---
title: Part 2 - Using a pipeline to automate data ingestion into IBM Concert <br/> <small> <i> Tech Sales enablement </i> </small>
layout: tutorial
---

<span id="top"></span>

<br/>

Click the [**Prerequisites**](prerequisites) tab for setup instructions.

<details markdown="1">

<summary>Introduction</summary>

Let’s look at a pipeline to understand how a customer will automate the data ingestion process.

Concert is designed to ingest data on a regular basis, every time an application is updated the pipeline will automatically generate new SBOMs and CVE scan and then upload them to Concert.

As an IBMer, we have access to Tekton on Redhat Openshift and will use this for building our pipeline. The pipeline concepts we will demonstrate can be translated to any other CI/CD pipeline.

Let’s get started.

<br/>

</details>

<p/>

<details markdown="1">

<summary>Prereq: Install prerequisites</summary>

Placeholder

**[Go to top](#top)**

<br/><br/>

</details>

<p/>

<details markdown="1">

<summary>1 - Install Tekton on OpenShift cluster</summary>

The first step is to install Tekton which is a Kubernetes-native CI/CD framework for automating application deployment pipelines on OpenShift clusters.

When we reserved our openshift cluster on Techzone, we received a kubeadmin login and password. We will use this to log into the cluster.

Once logged in, click on OperatorHub in the Operators section. Here we will search for openshift pipeline and should receive only one result. Click on the pipeline tile to open the install dialog. We will keep all the defaults selected and simply click install without any changes. The installation should complete within 1 minute with a success dialog.

**[Go to top](#top)**

<br/><br/>

</details>

<p/>

<details markdown="1">

<summary>2 - Log in to the OpenShift cluster on your terminal</summary>

Next we can log into the OpenShift cluster from our machine, using the oc login command. This command requires a login token that we can copy directly from our OCP console by clicking on copy login command and pasting it into our terminal.

<!-- <show copy login command from cluster> -->

Note that that OCP login token expires every 24 hours, so a new one needs to be generated between logins if time has elapsed.

**[Go to top](#top)**

<br/><br/>

</details>

<p/>

<details markdown="1">

<summary>3 - Create secrets</summary>

Before we can start automating our pipeline, we need to provide certain authentication credentials to Tekton in the form of secrets.

In this step, we will create 3 secrets: a Concert Secret, Github Secret and Registry Secret.

The Concert secret is what will authenticate us to use the API to upload data to Concert. To create this secret, we first need to generate our API key from Concert. To generate an API Key, ensure you have admin access and then log into the Concert instance. In this demo our Concert instance is deployed on SaaS. Click your profile, then API Key, then Generate, and copy the key into a notepad or place where you can access it, as it will not be visible again. This token doesn’t expire unless you generate a new one or revoke it.

Once we have the Concert API token, we will use the oc create secret generic command, setting the name of the secret to concert-token-secret. After that we insert our Concert token. Important to note, ensure you have the attribute “C_API_KEY” before the SaaS token, otherwise the API upload won’t authenticate successfully.

<code class="code-block"> oc create secret generic concert-token-secret <br/> --from-literal=token="C_API_KEY <br/> bWFyeWFtYUBjYS5pYm0uY29tOjE5N2U4ZmI2LTNiY2YtNGRhOC04OGY0LTViYTYwMmQyZWMxMQ==" </code>

Next we will create the Github secret. To do this we use the oc create secret generic command again, however this time we name the secret github-creds and provide our github username and token. This information was setup during the prerequisites, and if not then a IBM github username and token should be setup prior to this step.

<code class="code-block"> oc create secret generic github-creds ` <br/> --from-literal=username=$env:GITHUB_USERNAME ` <br/> --from-literal=password=$env:GITHUB_TOKEN ` <— Created during prereqs <br/> --type=kubernetes.io/basic-auth </code>

For the github secret, we must also annotate it and link it to the pipeline. Run the following commands to complete this step.

<code class="code-block"> oc annotate secret github-creds ` <br/> tekton.dev/git-0=https://github.ibm.com <br/><br/> oc secret link pipeline github-creds </code>

The third secret will authenticate us into the image registry we setup in the prerequisites. For this demo, we are using a private IBM internal jfrog artifactory registry to store our container images. To create this secret, we need our jfrog server address, username and token.

To generate these, let’s log into jfrog and quickly generate these values, noting them in notepad for easy reference.

We will use the same oc create secret command however this time the type is docker-registry and we will name it container-registry-secret, then we provide our jfrog information as noted just now, and run the whole command.

<code class="code-block"> oc create secret docker-registry container-registry-secret --docker-server=na.artifactory.swg-devops.com --docker-username=maryama@ca.ibm.com --docker-password=cmVmdGtuOjAxOjE3MzA3MTkwNDg6QktWbnhiQ1U5UzB5amFkREVLNkx6ZHNQZTJssecret/container-registry-secret </code>

Similar to the GitHub secret, we need to link the secret to our pipeline with both access and pull permissions. The pull permission allows Tekton to pull images from our registry.oc secret link pipeline container-registry-secret

<code class="code-block"> oc secret link pipeline container-registry-secret --for=pull </code>

Now that all three secrets have been added, we can quickly validate they’ve been successfully created by running the oc get serviceaccount command

<code class="code-block"> oc get serviceaccount pipeline -o yaml </code>

In the output, we should see the github secret at the bottom and the container-registry secret in two places. The Concert secret is not shown here.

Once all the secrets are created, we can begin creating our tekton tasks.

**[Go to top](#top)**

<br/><br/>

</details>

<p/>

<details markdown="1">

<summary>4 - Create Tekton tasks</summary>

A Tekton task defines a series of one or more steps in a Tekton pipeline. Each Task runs as a pod on a Kubernetes cluster. Each step in a task invokes a specific build tool and runs in its own container. 

Note that this video is not intended to teach Tekton concepts. We won’t create these tasks from scratch but instead we’ll walk through and configure a collection of pre-built qotd pipeline tasks. 

For the QotD application, we will create a Tekton pipeline with 11 tasks. Many of the Concert tasks rely on using the Toolkit that comes packaged with Concert to automate SBOM generation in the correct format. (IBM Concert Toolkit v1.0.1 used)

To access our set of pre-built qotd pipeline tasks, we simply need to clone or download all the pipeline code to our local machine. This IBM github repo is internal to IBM and available for all IBMers.

To clone the repo, navigate to the IBM-Concert-Platinum-Demos repo in your browser, and click on the green <> Code dropdown button, click on the SSH tab, and copy the repository reference

Next, we create a folder called sbom-concert-pipeline on our computer and then navigate to it in a command line. Here we are using the command line built into visual studio code to navigate to the folder. To pull down the pipeline repository to our local machine, we paste the SSH command we copied from github: git@github.ibm.com:ibm-concert-platinum-demos/sbom-concert-pipeline.git

Once the sbom-pipeline repo is downloaded to our local machine, we can open it on the left side of Visual Studio code and begin configuring each task. Each task is defined in a YAML file. 

For building and running this demo, most of the task files in the pipeline code will not require any changes and we will specify whenever a change is necessary to build and run the demo. 

However, it’s important to note that when working with a customer, techsellers will need to examine the customer’s existing pipeline and identify the concert-specific tasks or steps that should be added to the customer’s pppeline. Specifically, there are 7 Concert-specific tasks that will need to be added to every pipeline to connect it to Concert. We will highlight these tasks as we go along.

### Git Clone Task 

<!-- <Walk through pipeline graphic zoomed in> --> 

The initial task in the pipeline is called the Git Clone Task. In a customer’s environment, we would never work on the production code repository. So we begin the pipeline by first cloning the code repository for the microservice we will be working on. 

The git-clone ClusterTask is responsible for pulling down code from a GitHub

repository and storing in shared workspace storage.  This task cannot be seen in the repo here because the git-clone code is included as part of the default Tekton ClusterTasks bundled with OpenShift Pipelines. 

### Code Scan Task

The next task in the pipeline is called the Code Scan Task. The purpose of this task is to scan the source code of the microservice and generate a Software Bill of Material with library, license and package information being used in the microservice. In Concert, we call this a Package SBOM (of type code-scan). This is the first task where we will be using the Concert toolkit to simplify the generation of the SBOM. (IBM Concert Toolkit v1.0.1 used)

Line 15 is where we identify the toolkit and version we want to use for this task <!-- <typing action> -->

Line 21 is where the toolkit is being used with the code-scan command. The toolkit is provided as an image and as an end-user we do not have access to the source code. However, the code-scan command under the hood installs and uses an open source tool called cdxgen to scan the source code from the repo and produce a standard cycloneDX sbom file in json format. The pipeline stores this file in a results.output.path location accessible by Tekton.

As mentioned earlier, certain task files will need to be customized and written by the customer according to their pipeline. So it’s important to note here that when working with a customer, the task file provided in this demo should not be used as-is in a customer’s Tekton pipeline environment. The code provided should be used only as a template or guide in helping the customer write their pipeline tasks, however certain variables, such as component name, output, and output path will be specific to a customer’s environment and need to be updated by the customer for use with their pipeline’s parameters. 

### Kaniko-Build Task 

The next task in the pipeline is called the Kaniko Build task. This task is not Concert-specific, and every customer with a containerized application will have a similar build task already as part of their day-to-day setup. 

In our demo, a popular open source tool called Kaniko is used to build container images directly within a Kubernetes cluster, without requiring Docker to be installed on the nodes. Kaniko will read the Dockerfile and context, constructs the image, and then pushes it to a specified container registry, making it an essential step for automating container builds in CI/CD pipelines.

### Skopeo Copy Task 

The next task is called the Skopeo Copy task and it is another essential part of the pipeline and is not specific to IBM Concert. It is used for copying container images between different container registries. Similar to Kaniko, Skopeo is an open-source tool that enables operations on container images without requiring a Docker daemon. In our demo, Skopeo will push our microservice’s image to our registry.

### Image Scan Task

The next task in the pipeline is called the Image Scan Task. The purpose of this task is to scan the microservice and generate a SBOM with library, license and package information being used in the microservice. However, unlike the code-scan task we saw earlier, this task scans the image of the microservice which includes additional information such as operating system in Concert, we call this a Package SBOM (of type image-scan). 

This is the second task where we will be using the Concert toolkit to simplify the generation of the SBOM. (IBM Concert Toolkit v1.0.1 used)

Again, Line 15 is where we identify the toolkit and version we want to use for this task

Line 21 is where the toolkit is being used with the image-scan command. The toolkit is provided as an image and as an end-user we do not have access to the source code. However, the image-scan command under the hood installs and uses an open source tool called syft to scan the source code from the repo and produce a standard cycloneDX sbom file in json format. The pipeline stores this file in a results.output.path location accessible by Tekton.

### CVE Scan Task

The next task is the CVE scan task. IBM Concert accepts CVE scans that are run against container images only, so that’s why in our pipeline this task is performed right after the image is built in the previous steps. There are many CVE scanning tools on the market, in this demo our task will install and run an open source tool called Grype which will scan the image we built in our previous task for vulnerabilities and output a .csv file. The pipeline stores this file in a results.output.path location accessible by Tekton.

Currently IBM Concert ingests CVE scans in two formats: CSV and VDR. In this demo, we will be using the CSV format. For the CSV format, the columns and headers must be formatted in a specific sequence for uploading to Concert. This sequence is provided as a template to the Grype scan command. This causes Grype to scan the image and then generate a CSV file in the correct Concert format.

If a customer is using a different tool for their CVE scans, for example Trivvy or Twistlock, they can similarly provide this template as input to the tool to ensure the output is formatted correctly. 

<inline-notification text="The IBM Concert toolkit v1.0.1 does not contain any commands for the CVE scan task."></inline-notification>

### Build SBOM Task

The next task in the pipeline is the Build SBOM task. This task is very Concert-specific and a customer would not have this in an existing pipeline. 

To simplify the generation of the build SBOM file in the defined Concert format, we will be using the toolkit ((IBM Concert Toolkit v1.0.1 used)

Again, Line 15 is where we identify the toolkit and version we want to use for this task

Line 21 is where the toolkit is being used with the build-sbom command. The build-sbom command under the hood uses the pipeline’s build data to populate a config file to generate the SBOM file in json format. The pipeline stores this file in a results.output.path location accessible by Tekton.

### Deploy SBOM task 

The next task in the pipeline is the Deploy SBOM task. This task is also very Concert-specific and a customer would not have this in an existing pipeline. 

To simplify the generation of the deploy SBOM file in the defined Concert format, we will be using the toolkit (IBM Concert Toolkit v1.0.1 used).

Again, Line 15 is where we identify the toolkit and version we want to use for this task

Line 21 is where the toolkit is being used with the build-sbom command. The deploy-sbom command under the hood uses the pipeline’s deployment data to populate a config file to generate the SBOM file in json format. The pipeline stores this file in a results.output.path location accessible by Tekton.

### Application-definition SBOM Task

The next task in the pipeline is the Application-definition SBOM task. Similar to the previous two tasks, this task is very Concert-specific and a customer would not have this in an existing pipeline. 

To simplify the generation of the application definition SBOM file in the defined Concert format, we will be using the toolkit (IBM Concert Toolkit v1.0.1 used)

Again, Line 15 is where we identify the toolkit and version we want to use for this task

Line 21 is where the toolkit is being used with the application-definition command. The application-definition command under the hood uses application data to populate a config file to generate the SBOM file in json format. The pipeline stores this file in a results.output.path location accessible by Tekton.

### Upload Concert Task

The next task is where we connect to our IBM Concert instace to upload all the files we generated in the previous steps. This is the first step where code changes are required.

To simplify the uploading of data to Concert, we will be using the toolkit also. (IBM Concert Toolkit v1.0.1 used)

Again, Line 15 is where we identify the toolkit and version we want to use for this task

Line 21 is where the toolkit is being used with the upload-concert command. 

Line 55: Concert Instance IDStage 20240802-1832-4327-51e2-7e5b9e176e6bProd 20240814-1557-0004-91eb-38d7bc31c01f

For following along and running this demo, Line 55 must be updated with the instance ID of the correct Concert instance. For our demo, we are using a SaaS instance and the instance ID is provided in the URL. We will copy this and paste it into Line 55.

<inline-notification text="If the Concert instance is deployed on VM, the instance id is: 0000-0000-0000-0000"></inline-notification>

<inline-notification text="If the Concert instance is deployed on OCP, the instance ID is:"></inline-notification>


### SBOM Pipeline Task

The final task in our pipeline is called the SBOM Pipeline. This task defines the structure and logic of our sbom-pipeline. Without it, Tekton wouldn't know which tasks to run, in what order, or with what parameters.

All the pipeline tasks, like the default git-clone clustertask and code-scan are referenced in this file and are crucial for the pipeline's operation. Another important part of the sbom pipeline task is that this is where all the parameters used in the pipeline are defined. Using parameters in the pipeline allow for customization and flexibility. Without these parameters, the pipeline wouldn’t be able to adapt to different applications or environments to populate values dynamically. A very important parameter defined here is the application criticality number which specifies how business critical this application is to the business. The application criticality score ranges from 1 for low to 5 for critical, and the criticality number plays a significant role in helping Concert score and prioritize CVEs according to an organization. For our demo, we will set the application criticality to 4. Another important parameter to note is the access point information. Our demo microservice here has one access point, and we have set the exposure to public. Similar to application criticality, Concert takes endpoint expsure into its consideration when calculating the risk score.

To run our demo pipeline, we only need to make changes to line 29 which identifies the host of our IBM Concert instance as the base_url parameter. This information is also found in the URL of our Concert SaaS instance, and we can copy and paste it here. 

Update line 29 and 54 (optional): <br/>
• name: base_url <br/>
• default: <a href="https://73244.us-south-2.concert.test.saas.ibm.com" target="_blank" rel="noreferrer">"https://73244.us-south-2.concert.test.saas.ibm.com"</a><br/>
• prod: <a href="https://65879.us-south-8.concert.saas.ibm.com" target="_blank" rel="noreferrer">https://65879.us-south-8.concert.saas.ibm.com</a><br/>

That completes the definition of all our task files.

**[Go to top](#top)**

<br/><br/>

</details>

<p/>

<details markdown="1">

<summary>5 - Update trigger template</summary>

Now that all the pipeline tasks are created, we can move on to the second part of the pipeline and that is defining our webhooks that automatically trigger the pipeline to run.

IBM Concert is designed to update everytime the underlying app is updated and to rerender the data in the arena view based on changes made by the customer to their applications.

This automation is handled by the trigger template file. This template is part of the Tekton webhook that automatically runs the pipeline on every commit to a connected code repository.

In this step, we will configure the trigger template to connect with our QotD repos. 

To run our demo, we need to change only one line and that is line 44 where our image repository is defined. This is where we link to the image registry we setup in the prerequisites. For the value, we provide the host server of our registry, the folder path the image will be stored in, and we use a variable to dynamically name the image as the component name parameter from our pipeline.

Update line 44: <br/>
• name: image <br/>
• value: "na.artifactory.swg-devops.com/hyc-roja-platform-engineering-team-docker-local/pm-qotd/$(tt.params.component_name)"

This will result in images in our jfrog instances that look like this.

**[Go to top](#top)**

<br/><br/>

</details>

<p/>

<details markdown="1">

<summary>6 - Push all files to Tekton</summary>

Now that all our tasks are configured and the trigger template has been updated, we are finally ready to create the pipeline in our openshift instance. 

We can create the pipeline very quickly by bulk applying all our pipelines files to openshift. To push all the files, we will use the oc commands to push each of the folders individual. 

First, we need to ensure we’re in the correct folder path on our machine:

<code class="code-block"> cd sbom-concert-pipeline </code>

Then, we apply correct folder path on our machine: 

<code class="code-block"> oc apply -f ./1-pipeline <br/> oc apply -f ./2-webhook </code>

Note: If you encounter any issues, it’s important to note that yaml files are very specific on indentation. Ensure spacing is correct.

All the pipeline files were successfully created, we can now open our openshift instance and switch to default namespace to verify that the pipeline was successfully created and we can see all the individual tasks that we pushed are there.

**[Go to top](#top)**

<br/><br/>

</details>

<p/>

<details markdown="1">

<summary>7 - Create GitHub access token webhook</summary>

In the prerequisites, we set up an organization for our quote-of-the-day application in GitHub. In order for the trigger template to run whenever any of the repos in this organization are updated, we need to create a webhook at the organization level. 

To do this, we first need to determine the route to our openshift instance. This route was created when we pushed our pipeline to tekton. 

To get this route, we can go into our pipeline, and under trigger templates, copy the url, and then paste it into the payload URL field in GitHub.

We will keep SSL disabled, although in a customer environment, SSL would typically be enabled. and we keep all remaining selections and click update or add webbhook.

This tells us our Tekton route is 

<code class="code-block"> el-webhook-default.apps.66ba1da31bc8d0001e815a6c.ocp.techzone.ibm.com </code>

We copy this value, add <code>https://</code> to the front and paste it into our organization’s GitHub. Without the <code>https://</code>, GitHub won’t accept it as a valid url.

**[Go to top](#top)**

<br/><br/>

</details>

<p/>

<details markdown="1">

<summary>8 - Trigger a pipeline update</summary>

We are now ready to start automatically uploading our data to IBM Concert via our pipeline.

Recall that our quote-of-the-day application has 10 microservices. So let’s begin with one microservice called qotd-web. I can make any change to the source code of this microservice. In this case I will make a tiny update and add a comment to a line. I will then save and push the code to github by creating a commit. This is how any developer at a company would push their code changes to the repository. The commit action is what triggers our pipeline to run. 

Within a few seconds of the commit, the Tekton pipeline begins to run automatically.

**[Go to top](#top)**

<br/><br/>

</details>

<p/>

<details markdown="1">

<summary>9 - Review running pipeline in Tekton</summary>

To see the pipeline run in action, we can open our openshift cluster and click on the pipeline name. For a play-by-play view, we will switch to the logs tab, and watch as each step executes, making note of any errors.

<inline-notification text="The first run of a new pipeline takes longer than subsequent runs. The first run takes about 10 minutes, and subsequent runs take 1-2 minutes."></inline-notification>

**[Go to top](#top)**

<br/><br/>

</details>

<p/>

<details markdown="1">

<summary>View updates in Concert UI</summary>

The pipeline run ends successfully with the upload concert task. We can now log in to our Concert instance. If you were already logged in, doing a refresh in the browser will render the uploaded data in the Concert Arena view. To ensure all data was uploaded successfully, we can go to the <strong>Administration</strong> → <strong>Event log</strong> tab.

**[Go to top](#top)**

<br/><br/>

</details>

<p/>

<details markdown="1">

<summary>Summary</summary>

In this demo, we saw how a Tekton pipeline on an OpenShift cluster can be used to automate the generation of SBOM and CVE scans and upload them to IBM Concert on SaaS. 

Once CVE data is ingested successfully into Concert, teams can review the Concert risk scores and priorities.

When you do a PoV, you will use the same concepts above to add similar Concert-specific tasks into the customer’s CI/CD pipeline.

**[Go to top](#top)**

<br/><br/>

</details>
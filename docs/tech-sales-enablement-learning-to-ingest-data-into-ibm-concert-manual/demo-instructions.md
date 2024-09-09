---
title: Part 1 - Ingesting data manually into IBM Concert <br/> <small> <i> Tech Sales enablement </i> </small>
layout: demo-instructions
---

<span id="top"></span>

<br/> 

Click <a href="https://ibm.seismic.com/app?ContentId=24a980e9-bc75-427d-b341-bce2db2e771f#/doccenter/f6bc8873-d580-4ee8-a903-[…]0-a4ab-4913-a193-2cfef77d0f34/grid/" target="_blank" rel="noreferrer">here</a> to access the manual data ingestion video.

Click the [**Pre-requisites**](pre-requisites) tab for setup instructions.

<details markdown="1">

<summary>Introduction</summary>

In this demo, we’ll show how to ingest data manually into IBM Concert. 

We will walk through the manual process to help understand the details of how Concert works and the different types of data and formats that Concert supports. 

For our demo, we’ll use the Quote of the Day (QotD) application, which consists of 10 microservices. The final result will showcase a populated Concert Arena view with all the underlying components of the application and the prioritized CVEs.

<br/>

</details>

<p/>

<details markdown="1">

<summary>1 - Populate global variables</summary>

We begin by opening the concert-pm-utils repo code we downloaded in the pre-requisites section and open the **global_environment_variables** file. This file contains all the details of the demo QotD application and its environment.

In a real world PoV, customers will always use a pipeline to ingest data. These variables would be populated automatically from the pipeline.

For this demo, we will need to provide all the data in the global variables file. These variables will be used throughout the demo by the Concert toolkit to generate files for Concert.

<inline-notification text="This demo uses Concert Toolkit V1.0.1."></inline-notification>
<inline-notification text="Line numbers will vary as helper scripts get updated."></inline-notification>

<br/>

### Action 1.1: Review and update global variables in the table below.

For <i>[reason]</i>, we have pre-populated many of the variables below.

<div class="table_component" role="region" tabindex="0">
<table>
    <thead>
        <tr>
            <th>
                <div>
                    <div>Environment variable</div>
                </div>
            </th>
            <th>Description and code snippet</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><strong>Platform architecture</strong><br></td>
            <td>
                <div>
                    <div>Placeholder <br/> <img src="images/1-1.png" width="825" /></div>
                </div>
            </td>
        </tr>
        <tr>
            <td><strong>Containerization platform</strong><br></td>
            <td>
                <div>
                    <div>Placeholder <br/> <img src="images/1-2.png" width="725" /></div>
                </div>
            </td>
        </tr>
        <tr>
            <td><strong>Demo app name</strong><br></td>
            <td>
                <div>
                    <div>Placeholder <br/> <img src="images/1-3.png" width="250" /></div>
                </div>
            </td>
        </tr>
        <tr>
            <td><strong>Demo app criticality</strong><br></td>
            <td>
                <div>
                    <div>Placeholder <br/> <img src="images/1-4.png" width="250" /></div>
                </div>
            </td>
        </tr>
        <tr>
            <td><strong>Demo app repository URL</strong><br></td>
            <td>
                <div>
                    <div>Placeholder<br/> <img src="images/1-5.png" width="525" /></div>
                </div>
            </td>
        </tr>
        <tr>
            <td><strong>Demo app version</strong><br></td>
            <td>
                <div>
                    <div>Placeholder <br/> <img src="images/1-6.png" width="225" /></div>
                </div>
            </td>
        </tr>
        <tr>
            <td><strong>Demo app component</strong><br></td>
            <td>
                <div>
                    <div>Placeholder <br/> <img src="images/1-7.png" width="375" /></div>
                </div>
            </td>
        </tr>
        <tr>
            <td><strong>Demo app repo name</strong><br></td>
            <td>
                <div>
                    <div>Placeholder <br/> <img src="images/1-8.png" width="375" /></div>
                </div>
            </td>
        </tr>
        <tr>
            <td><strong>Demo app source code repo URL</strong><br></td>
            <td>
                <div>
                    <div>Placeholder <br/> <img src="images/1-9.png" width="925" /></div>
                </div>
            </td>
        </tr>
        <tr>
            <td><strong>Demo app image URL</strong><br></td>
            <td>
                <div>
                    <div>Placeholder <br/> <img src="images/1-10.png" width="550" /></div>
                </div>
            </td>
        </tr>
        <tr>
            <td><strong>Demo app image tag</strong><br></td>
            <td>
                <div>
                    <div>Placeholder <br/> <img src="images/1-11.png" width="350" /></div>
                </div>
            </td>
        </tr>
        <tr>
            <td><strong>Demo app repository branch</strong><br></td>
            <td>
                <div>
                    <div>Placeholder <br/> <img src="images/1-12.png" width="350" /></div>
                </div>
            </td>
        </tr>
        <tr>
            <td><strong>Demo app access points</strong><br></td>
            <td>
                <div>
                    <div>Placeholder <br/> <img src="images/1-13.png" width="1200" /></div>
                </div>
            </td>
        </tr>
        <tr>
            <td>
                <p><strong>Build number</strong><br><br><strong>Inventroy build number</strong><br><br><strong>Concert URN prefix</strong></p>
            </td>
            <td>
                <div>
                    <div>Placeholder <br/> <img src="images/1-14.png" width="325" /></div>
                </div>
            </td>
        </tr>
        <tr>
            <td>
                <p><strong>Kubernetes platform</strong><br><br><strong>Environment platform</strong><br><br><strong>Cluster ID</strong><br><br><strong>Cluster region</strong><br><br><strong>Cluster name</strong><br><br><strong>Cluster namespace</strong><br><br><strong>Kubernetes platform type</strong><br><br><strong>Kubernetes platform name</strong><br><br><strong>Cluster environment platform</strong></p>
            </td>
            <td>
                <div>
                    <div>Placeholder <br/> <img src="images/1-15.png" width="375" /></div>
                </div>
            </td>
        </tr>
        <tr>
            <td>
                <p><strong>Business name</strong><br><br><strong>Business unit name</strong><br><br><strong>Contact email</strong><br><br><strong>Contact phone</strong></p>
            </td>
            <td>
                <div>
                    <div>Placeholder <br/> <img src="images/1-16.png" width="275" /></div>
                </div>
            </td>
        </tr>
        <tr>
            <td>
                <p><strong>Concert ingestion endpoint</strong><br><br><strong>Concert ingestion instance ID</strong><br><br><strong>Concert ingestion token</strong></p>
            </td>
            <td>
                <div>
                    <div>Placeholder <br/> <img src="images/1-17.png" width="500" /></div>
                </div>
            </td>
        </tr>
        <tr>
            <td>
                <p><strong>Concert ingestion user</strong><br><br><strong>Concert ingestion password</strong></p>
            </td>
            <td>
                <div>
                    <div>Placeholder <br/> <img src="images/1-1.png" width="825" /></div>
                </div>
            </td>
        </tr>
    </tbody>
</table>
<div style="margin-top:8px">Made with <a href="https://www.htmltables.io/" target="_blank">HTML Tables</a></div>
</div>

<!-- <Show source code for install script> -->

**[Go to top](#top)**

<br/><br/>

</details>

<p/>

<details markdown="1">

<summary>2 - Install supporting software</summary>

The install_supporting_software.sh shell script will install the IBM Concert toolkit, Grype, Docker and other software needed for this demo.

### Action 2.1: Execute the code below in a terminal.

<code class="code-block"> ./install_supporting_software.sh </code>

The shell script will install the following: <br/>

| **Software** | **Description** |
| :--- | :--- |
| **IBM Concert toolkit** | Framework required to generate SBOMs and interact with IBM Concert APIs |
| **grype** | Vulnerability scanner for container images and filesystems |
| **Syft** | Tool for generating SBOMs from container images and filesystems |
| **cdxgen** | Tool required to generate CycloneDX SBOMs for various programming languages |
| **Python3** and **pip3** | Essential for running Python scripts and managing Python packages |
| **Homebrew** | Package manager for macOS that simplifies the installation, updating and management of software and libraries |
| **Node.js** | Required to enable the execution of JavaScript code server-side and the development of scalable network applications |
| **nvm** | Enable you to manage multiple versions of Node.js, making it easy to switch between different versions for various projects and development environments |
| **rpm** | Needed for installing certain packages like Syft |
| **Gradle** | Open-source build automation tool that streamlines the building, testing and deployment of software projects with its flexible and powerful capabilities |
| **jq** | Lightweight and flexible command-line JSON processor, essential for parsing, manipulating and transforming JSON data |
| **Bazel** | Powerful build and test tool that automates the process of compiling and testing large codebases efficiently |
| **GitHub CLI** | Tool for managing GitHub repositories from the command line |
| **Docker** | Platform for running and deploying containers and applications |

<img src="images/2-1.png" width="600" />

### Set up system paths

1. Update the system path and configure Git. Homebrew usually adds itself to the PATH automatically. However, if it doesn’t, you can add it manually: <br/><br/> <code class="code-block"> nano ~/.zshrc  # For zsh <br/> # or <br/> nano ~/.bash_profile  # For bash </code>

2. For users running macOS versions prior to Big Sur, you can set the Homebrew installation directory with the following command. Please add this line to your .zshrc or .bash_profile: <br/><br/> <code class="code-block"> export PATH="/usr/local/bin:/usr/local/sbin:$PATH" </code>

3. For users running macOS macOS versions Big Sur and later, the Homebrew installation directory is /opt/homebrew: <br/><br/> <code class="code-block"> export PATH="/opt/homebrew/bin:/opt/homebrew/sbin:$PATH" </code>

4. Homebrew usually handles this automatically, but to ensure Gradle is included in your PATH. For users running macOS versions prior to Big Sur, this can be done by adding the command below to your .zshrc or .bash_profile: <br/><br/> <code class="code-block"> export PATH="/usr/local/opt/gradle/bin:$PATH" </code>

5. For users running macOS versions Big Sur and later, use the command below: <br/><br/> <code class="code-block"> export PATH="/opt/homebrew/opt/gradle/bin:$PATH" </code>

6. Homebrew usually handles this automatically, but to ensure Bazel is included in your PATH. For users running macOS versions prior to Big Sur, this can be done by adding the command below to your .zshrc or .bash_profile: <br/><br/> <code class="code-block"> export PATH="/usr/local/bin:$PATH" </code>

7. For users running macOS versions Big Sur and later, use the command below: <br/><br/> <code class="code-block"> export PATH="/opt/homebrew/bin:$PATH" </code>

8. Apply changes: <br/><br/> <code class="code-block"> source ~/.zshrc  # For zsh <br/> # or <br/> source ~/.bash_profile  # For bash </code>

9. Configure Git: <br/><br/> <code class="code-block"> git config --global user.name "Your Name" <br/> git config --global user.email "your.email@ibm.com" </code>

**[Go to top](#top)**

<br/><br/>

</details>

<p/>

<details markdown="1">

<summary>3 - Generate 'Package SBOMs'</summary>

This slide shows the two variations of SBOMs that IBM Concert ingests.
<br/> <img src="images/sboms.jpeg" width="600" />

On the left, we see that Concert ingests the industry standard CycloneDX SBOM generated by various tools like CycloneDX, Syft and cdxgen. These SBOMs are called Package SBOMs.

On the right, we see that Concert also ingests SBOMs that are specific to Concert. These SBOMs are extenstions of the CycloneDX format and are customized for Concert. These SBOMs are called ‘Concert-defined’ SBOMs.

The first SBOM file is the Package SBOM. This SBOM provides an inventory of what’s in the software packages. Concert ingests two types of package SBOMs, one that scans the the source code and the second that scans the images.

<!-- <show section in script where toolkit image is pulled> -->

We will use the IBM Concert Toolkit (v1.0.1) to generate both types of package SBOMs.

<img src="images/3-1.png" width="800" />

<!-- <show section in script where code scan is called> -->

The code scan command in the Concert toolkit uses **cdxgen** to analyze the codebase, identifying all software packages and dependencies.

<img src="images/3-2.png" width="800" />

<!-- <show section in script where image scan is called> -->

The image scan command in the toolkit uses an open source tool called **Syft** to analyze the packages and operating system details in the containerized image.

In both cases, the toolkit generates a JSON file in standard CycloneDX format.

### Action 3.1: Execute the ./generate_package_sbom.sh shell script.

<code class="code-block"> ./generate_package_sbom.sh </code>

The output of this command will be an image-scan SBOM and a code-scan SBOM file for each microservice.

<!-- <show generated package SBOM files on the computer> -->

<img src="images/3-3.png" width="600" />

<img src="images/3-4.png" width="1000" />

**[Go to top](#top)**

<br/><br/>

</details>

<p/>

<details markdown="1">

<summary>4 - Generate CVE scan</summary>

Next, we use an open source tool called **Grype** to conduct a vulnerability scan by analyzing container images. However, customers can use any image scanning tool like Prisma Cloud's Twistlock or Aqua Security's Trivvy.

<inline-notification text="The Concert toolkit does not contain any commands for generating CVE scan files."></inline-notification>

### Action 4.1: Execute the generate_cve_csv_file.sh shell script.

<code class="code-block"> ./generate_cve_csv_file.sh </code>

The output of this command will be a CVE file in CSV format for each microservice image in the application.

<inline-notification text="Concert accepts CSV files in a specific column format. Use the provided template to ensure the output file is generated with the correct CSV headers."></inline-notification>

<!-- <show CVE scans generated on the computer> -->

<img src="images/4-1.png" width="800" />

<img src="images/4-2.png" width="800" />

One CSV scan file should be generated for every microservice image in our QotD application.

**[Go to top](#top)**

<br/><br/>

</details>

<p/>

<details markdown="1">

<summary>5 - Generate 'Build SBOMs'</summary>

IBM concert ingests custom SBOM files called ConcertDef. These are an extension of the CycloneDX format. The three concert-defined SBOMs are called: Build, Deploy, and Application Definition.

Let’s start with the Build SBOM.

We will use the toolkit to generate the build SBOM file, which is a detailed inventory that includes information about the libraries, frameworks, tools, and other dependencies that were used to build the software application.

<!-- <show script where build-sbom command is called> -->

### Action 5.1: Execute the generate_build_sbom.sh shell script. 

<code class="code-block"> ./generate_build_sbom.sh </code>

For each microservice image of the target application, a Build SBOM will be generated in the ./toolkit-data directory.
<br/> <img src="images/5-1.png" width="500" />

<!-- <show files in toolkit data directory> -->

<!-- <open one build sbom> -->

For each individual microservice, a Build SBOM provides an inventory of: <br/>
1. Associated images and their versions <br/> <img src="images/5-2.png" width="900" /> <br/><br/>
2. Repositories and their branches <br/> <img src="images/5-3.png" width="600" />

**[Go to top](#top)**

<br/><br/>

</details>

<p/>

<details markdown="1">

<summary>6 - Generate 'Deploy SBOMs'</summary>

The next step involves using the toolkit to generate the deploy SBOM file where the public and private access points are defined. The deploy SBOM focuses on the software as it is actually deployed in a specific environment, including any environment-specific configurations or dependencies.

<!-- <show script where deploy-sbom command is called> -->

### Action 6.1: Execute the generate_deploy_sbom.sh shell script.

<code class="code-block"> ./generate_deploy_sbom.sh </code>

For each pair of microservice and environment defined for the target application, a deploy SBOM will be generated in the ./toolkit-data directory. 

<!-- <show toolkit-data directory where SBOMs are generated (14)> --> 

involves using the toolkit to generate the Application Definition SBOM file, which is a detailed record of all elements involved in the application, from its core components to external dependencies, configuration settings, and runtime environments.
<br/> <img src="images/6-1.png" width="500" />

For each combination of microservice and environment, a Deploy SBOM provides an inventory of: <br/> 
1. Access points <br/> <img src="images/6-2.png" width="650" /> <br/><br/>
2. External dependencies <br/> <img src="images/6-3.png" width="450" />

**[Go to top](#top)**

<br/><br/>

</details>

<p/>

<details markdown="1">

<summary>7 - Generate 'Application-definition SBOM'</summary>

The last SBOM to be generated is the Application definition SBOM. This SBOM is where the application criticality is defined. As mentioned earlier the application criticality plays a significant role in Concert’s calculation of risk prioritization and recommendations.

<!-- <show script where app-definition command is called> -->

### Action 7.1: Execute the generate_app_def.sh shell script. 

<code class="code-block"> ./generate_app_def.sh </code>

Unlike the other SBOMs, the Application-definition SBOM is defined at the application level instead of the microservice level. This enables Concert to have an application-centric view and only one Application-definition SBOM is required for each application, regardless of how many microservices it has.

An Application-definition SBOM will be generated in the ./toolkit-data directory. 
<br/> <img src="images/7-1.png" width="500" />

<!-- <show toolkit-data directory where Application Definition SBOM is generated (1)> -->

An Application-definition SBOM defines the boundaries of an application, including the following underlying elements: <br/> 
1. Microservices <br/> <img src="images/7-2.png" width="650" /> <br/><br/> 
2. Repositories <br/> <img src="images/7-3.png" width="650" /> <br/><br/> 
3. Images <br/> <img src="images/7-4.png" width="650" /> <br/><br/>
4. Environments <br/> <img src="images/7-5.png" width="300" /> <br/><br/> 
5. Access points and their exposure levels <br/> <img src="images/7-6.png" width="500" /> <br/><br/> 
6. Application criticality <br/> <img src="images/7-7.png" width="350" />

**[Go to top](#top)**

<br/><br/>

</details>

<p/>

<details markdown="1">

<summary>8 - Upload data to Concert</summary>

The final step is to upload all the generated data into IBM Concert to make it accessible in the Concert UI.

### Action 8.1: Execute the upload_data_concert.sh shell script. 

<code class="code-block"> ./upload_data_concert.sh </code>

<!-- <show script with upload details> -->

This helper script automates the process, allowing multiple Concert-supported files to be uploaded at once, eliminating the need for manual uploads.

Alternatively, you can manually upload all relevant files from the ./toolkit-data directory to IBM Concert using the user interface, one by one.

<inline-notification text="Once all files are processed, they will be zipped and moved to the ./processed folder."></inline-notification>

<img src="images/8-1.png" width="800" />

**[Go to top](#top)**

<br/><br/>

</details>

<p/>

<details markdown="1">

<summary>View updates in Concert UI</summary>

We can now log in to Concert to view the uploaded data.
<br/> <img src="images/9-1.png" width="800" />
<br/> <img src="images/9-2.png" width="800" />

<!-- <show arena view> -->

<!-- <show dimensions view of vulnerability> -->

**[Go to top](#top)**

<br/><br/>

</details>

<p/>

<details markdown="1">

<summary>Summary</summary>

In this demo, we saw how to ingest data manually into IBM Concert. We learned about the five types of SBOMs and the CVE scan format that can be uploaded to Concert for visualization in the UI.

Click <a href="https://ibm.github.io/platinum-demos/tech-sales-enablement-learning-to-ingest-data-into-ibm-concert-pipeline/pre-requisites" target="_blank" rel="noreferrer">here</a> to continue to **Part 2 - Using a pipeline to automate data ingestion into IBM Concert**.

**[Go to top](#top)**

<br/><br/>

</details>
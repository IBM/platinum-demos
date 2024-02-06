<span id="place1"></span>

<span id="top"></span>

| **DEMO OVERVIEW** | | 
| :---         | :--- |
| **Scenario overview** | {{ page.overview }} |
| **Demo products** | {{ page.product }} |
| **Demo capabilities** | {{ page.capabilities }} |
| **Demo intro slides** | Download the Introduction and Overview slides <a href="{{ page.boxIntroPresentationUrl }}" target="_blank" rel="noreferrer">here</a>. This is a short deck of customer-facing slides that sets the context for the demo. |
| **Demo script** | A complete demo script is on the second tab above. You can download a printer-ready PDF of the demo script <a href="{{ page.boxPdfScript }}" target="_blank" rel="noreferrer">here</a>.<br/><br/> This demo script has multiple tasks that each have multiple steps. In each step, you have the details about what you need to do (**Actions**), what you can say while delivering this demo step (**Narration**), and what diagrams and screenshots you will see.<br/><br/>This demo script is a suggestion, and you are welcome to customize based in your sales opportunity. Most importantly, practice this demo in advance. If the demo seems easy for you to execute, the customer will focus on the content. If it seems difficult for you to execute, the customer will focus on your delivery. |
{% if page.customerVideo == "" %}
{% else %}
| **Customer-ready <br/>demo video** | View the demo video <a href="{{ page.customerVideo }}" target="_blank" rel="noreferrer">here</a>. This is a short, but detailed, hands-on walkthrough of the scenario. The video is customer-ready.<br/><br/>Potential uses of this video are:<br/><br/>1. Familiarize yourself with the details of this scenario <br/>2. Gain customer agreement that they would like to have a tech-seller do a deep-dive demo of this scenario <br/>3. Use as a prospecting tool to generate customer interest in applying these capabilities |
{% endif %}
| **Required versions** | Cloud Pak for Integration 2023.4.1 |
| **How to get support** | • Open a support case at <a href="https://techzone.ibm.com/help" target="_blank" rel="noreferrer">IBM Technology Zone Help</a> regarding issues with reserving and provisioning Tech Zone environments.<br/>• Contact <a href="https://ibm-cloud.slack.com/archives/C0216F39ACU" target="_blank" rel="noreferrer">#platinumdemos-automation-support</a> regarding issues with setting up and running this demo. |

{{ page.topcategory }}

<details markdown="1">

<summary>1 - Provision a Red Hat OpenShift cluster</summary>

To provision your own Red Hat OpenShift cluster for the Cloud Pak for Integration, follow these steps: <br/>

1. To deploy a Red Hat OpenShift cluster, go <a href="https://techzone.ibm.com/my/reservations/create/63a3a25a3a4689001740dbb3" target="_blank" rel="noreferrer">here</a>. Select if you prefer to make a reservation now or schedule for later. 
<br/><img src="../integration/images/prep-image001.png" width="800" />
<br/>

2. If you do not have a sales opportunity, select the purpose **Practice / Self-Education** (1) for a 2-day reservation (which can be extended without any approvals to 6 days) and fill in the **Purpose description** (2).
<br/><img src="../integration/images/prep-image002.png" width="800" />
<br/>

3. Select the **Preferred Geography**.
<br/><img src="../integration/images/prep-image003.png" width="800" />
<br/>

4. Several additional fields will appear. Select **4.14** (1) as the OpenShift version, **ODF - 2TB** (2) for the storage, **16 vCPU x 64 GB - 100 GB ephemeral storage** (3) as the worker node flavor, accept the terms and conditions (4) and click **Submit**.
<br/><img src="../integration/images/prep-image004.png" width="800" />
<br/>

5. You will receive a few emails as the provisioning process continues. You should expect the final email to be sent after an hour. The final email should look similar to the following.
<br/><img src="../integration/images/prep-image005.png" width="800" />
<br/>

**[Go to top](#top)**

<br/><br/>

</details>

<span id="AccessOpenShift"></span>

<details markdown="1">

<summary>2 - Access your OpenShift cluster and install the command line</summary>


In this section, you access your OpenShift cluster and install the OpenShift command line tool. 

1. Open the **Reservation ID** link that was included in the "Reservation Ready on IBM Technology Zone" email.
<br/><img src="../integration/images/prep-image101.png" width="800" />
<br/>

2. Copy the kubeadmin **Password** (1) and open the OpenShift console by clicking on **Open your IBM Cloud environment** (2).
<br/><img src="../integration/images/prep-image102.png" width="800" />
<br/>

3. Use **kubeadmin** (1) as the user, paste the **Password** (2) and click **Login** (3).
<br/><img src="../integration/images/prep-image103.png" width="800" />
<br/>

4. On the web console page, click **?** (1), and select **Command line tools** (2).
<br/><img src="../integration/images/prep-image104.png" width="800" />
<br/>

5. Follow the links to install the OpenShift Command Line Interface (CLI) for your Operating System.
<br/><img src="../integration/images/prep-image105.png" width="800" />
<br/>

6. To configure the command line on your machine, click on the down arrow to the right of kubeadmin (1) and select **Copy login command**.
<br/><img src="../integration/images/prep-image106-1.png" width="800" />
</br>

7. Click on **Display token**.

8. Copy the **Login with this token** and run in the command line.
<br/><img src="../integration/images/prep-image106-2.png" width="800" />
</br>

You have successfully configured the Openshift command line on your machine.

<br/>

**[Go to top](#top)**

<br/><br/>

</details>

<span id="cloneGitHub"></span>

<details markdown="1">

<summary>3 - Clone the demo assets from a GitHub repository</summary>

To copy the repository you will need to have the Git CLI on your machine. If you don’t have it, follow the installation steps described in this <a href="https://github.com/git-guides/install-git" target="_blank" rel="noreferrer">page</a>, based on your operating system.


1. To download the scripts to install the demo, create a new directory, change to this newly created directory, and run the following command:

   ```git clone {{ page.gitHubUrl }}```

   <br/>

2. Change to the new {{ page.gitHubDir }} directory:
   
   ```cd {{ page.gitHubDir }}```

   <br/>

**[Go to top](#top)**

<br/><br/>

</details>
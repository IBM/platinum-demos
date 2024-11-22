---
title: IBM Concert demo <br/> Resolving application dependencies with a central view <br/> <small> <i> Live demo for Tech Sales </i> </small>
layout: demoscript
banner: images/banner.jpg
---

<span id="top"></span>

Click the [**Demo preparation**](demo-preparation) tab for setup instructions.

<details markdown="1">

<summary>Introduction</summary>

Focus Corp is preparing for a significant release of their finance application. Since financial applications are mission-critical to their customers, it's essential to ensure the software is thoroughly protected against risks before launch.

In this demo, we'll showcase an application-centric approach, demonstrating how Concert can assist in addressing CVEs, outdated packages, expired certificates, and compliance assessments.

Let's get started!

<br/>

</details>

<p/>

<details markdown="1">

<summary><strong>1 - Arena View</strong>: Correlating an applications dependencies</summary>

<br/>

| **1.1** | **Placeholder** |
| :--- | :--- |
| **Narration** | Focus Corp's Finance Application is their most intricate system, spanning multiple regions and lifecycle stages, with numerous repositories and microservice images supporting its functionality. Before starting work, the software development team might need a corrolated overview of all the application's dependencies. |
| **Action** &nbsp; 1.1.1 | Show the **Home** page, which you opened during demo preparation. Select the **Arena view**. <br/> <img src="images/1-1-1.png" width="800" /> |
| **Action** &nbsp; 1.1.2 | On the **Arena view** page, enable all toggles: <br/> Priority 1 CVEs <br/> Priority 1 exposures <br/> Low compliance assessments <br/> Expired certificates <br/> <img src="images/1-1-2.png" width="800" /> |
| **Narration** | With this Arena view, the software developers can see a correlation of all applications belonging to Focus Corp along with their dependencies. For now, however, they want to focus specifically on the Finance Application to address its fixes. |
| **Action** &nbsp; 1.1.3 | On the **Arena view** page, click on the **Applications** dropdown filter, and select Finance-app <br/> <img src="images/1-1-3.png" width="800" /> <br/> <img src="images/1-1-4.png" width="800" /> |
| **Narration** | From this view of the fitered application, the software developer has a unified view displaying the corrolation between: <br/> The Finance Application <br/> Environments where it is deployed <br/> Access Points <br/> Expired Certificates which relate to those access points <br/> Images present in the application <br/> Repositories used to build those images <br/> Priority 1 CVE's present in both the images and the repositories. |
| **Action** &nbsp; 1.1.4 | On the **Arena view** page, click on the dot representing the Finance-app. <br/> <img src="images/1-1-5.png" width="800" /> <br/> This will bring the software developer to an application centric view of the finance-app within Concert.  <br/> <img src="images/1-1-6.png" width="800" /> |

**[Go to top](#top)**

<br/><br/>

</details>

<p/>

<details markdown="1">

<summary><strong>2 - Vulnerabilties </strong>: Viewing a summary of vulnerabilities present in an application </summary>

<br/>

| **2.1** | **Placeholder** |
| :--- | :--- |
| **Narration** | Focus Corp requires that all Priority 1 CVEs be resolved prior to an application's release. The software developer's first goal is to assess any CVEs impacting the Finance Application. |
| **Action** &nbsp; 2.1.1 | Click the **Vulnerabilities** tab <br/> <img src="images/2-1-1.png" width="800" /> <br/> <img src="images/2-1-2.png" width="800" />|
| **Narration** | This **Vulnerabilities** page provides a comprehensive overview of both image and code scan results related to the Finance application. <br/> At the top of the page, the software developer is met with a section containing a standard description about the CVE. This description is usually provided by the security scanning tool which detected this CVE. <br/> <img src="images/2-1-3.png" width="800" /> <br/> The **Impact View** enables software developers to evaluate the criticality of a CVE by showing the environments and access points where the CVE might be exposed. Additionally, it helps pinpoint the source of the CVE by identifying the affected packages and the images where the CVE is present. <br/> <img src="images/2-1-4.png" width="800" />  <br/> The central **Findings** table represents a list of each image within the Finance application where the CVE was located. This table also allows the developer to set an assessment state and open a ticket for each image to resolve the CVE. <br/> <img src="images/2-1-5.png" width="800" /> <br/> The 2 columns at the end of the page provide additional details and recommended mitigation for the CVE. This information is provided by watsonx.ai <br/> <img src="images/2-1-6.png" width="800" /> |
| **Narration** | The software developer for Focus Corp wants to open a ticket to track the mitigation of the CVE. |
| **Action** &nbsp; 2.1.2 | Click on the blue **Open ticket** button on the **Findings** table. <br/> <img src="images/2-1-7.png" width="800" /> <br/> The following screen will appear. <br/> <img src="images/2-1-8.png" width="800" />  |
| **Narration** | The body of the ticket is populated by watsonx.ai to provide comprehensive context to assist the developer in resolving the CVE efficiently. |

**[Go to top](#top)**

<br/><br/>

</details>

<p/>

<details markdown="1">

<summary><strong>3 - Packages </strong>: Viewing recommended package updates. </summary>

<br/>

| **2.1** | **Placeholder** |
| :--- | :--- |
| **Narration** | While updating package versions to resolve CVEs, the Focus Corp software developer also takes the opportunity to update other outdated packages within the application, proactively mitigating potential future risks. |
| **Action** &nbsp; 2.1.1 | Click the **Packages** tab <br/> <img src="images/3-1-1.png" width="800" /> <br/> <img src="images/3-1-2.png" width="800" />|
| **Narration** | This **Packages** page provides a comprehensive list of recomended package updates, related to the Finance application. <br/> At the top of the page, the software developer is met with a section containing details about the package. <br/> <img src="images/3-1-3.png" width="800" /> <br/> Similar to on the vulnerabilities page, the **Impact View** enables software developers to evaluate the criticality of the outdated package, by showing the environments and access points where the package is active. <br/> <img src="images/3-1-4.png" width="800" />  <br/> The central **Recommendations** section provides the recommended action to take for this package, along with justification for why this action should be taken. <br/> <img src="images/3-1-5.png" width="800" /> <br/> The table at the end of the page provides a full list of images where this package was located. <br/> <img src="images/3-1-6.png" width="800" /> |
| **Narration** | The software developer for Focus Corp wants to open a ticket to track the mitigation of this package. |
| **Action** &nbsp; 2.1.2 | Click on the blue **Open ticket** button on the table. <br/> <img src="images/3-1-7.png" width="800" /> <br/> The following screen will appear. <br/> <img src="images/3-1-8.png" width="800" />  |
| **Narration** | The body of the ticket is populated with the recomended action to take, along with the justification. |

**[Go to top](#top)**

<br/><br/>

</details>

<p/>

<details markdown="1">

<summary><strong>4 - Certificates</strong>: Using Concert Workflows to refresh environment certificates</summary>

<br/>

| **4.1** | **Placeholder** |
| :--- | :--- |
| **Narration** | Before the upcoming release, the software developer plans to rotate any expired certificates to ensure customers are not affected by potential outages. |
| **Action** &nbsp; 4.1.1 | Click on the Environments tab. <br/> <img src="images/4-1-1.png" width="800" /> <br/> <img src="images/4-1-2.png" width="800" /> <br/> On the table which appears, click on the **Certificates** tab. <br/> <img src="images/4-1-3.png" width="800" /> |
| **Narration** | The software developer gains information on the expiry status of all certificates relating to their application for a given environment. In an environment with real data, there could be hundreds of upcoming certificate expiries, or already expired certificates. So the software developer decides to set an **automation rule** within Concert to rotate all certificates for a given environment. |
| **Action** &nbsp; 4.1.2 | Click **Administration** (1) and select **Integrations** (2). <br/> <img src="images/4-1-4.png" width="800" /> <br/><br/> The following **Integrations** screen will appear: <br/> <img src="images/4-1-5.png" width="800" />  <br/> Click on the **Automation rules** tab.  <br/>  <img src="images/4-1-6.png" width="800" />  <br/> Then click on the Blue **Create Automation Rule** button. |
| **Action** &nbsp; 4.1.3 | Fill in the name and details for a new automation rule. Then change the **When this condition occurs** dropwdown to Certificate expiry. Set **take this action** to Trigger a workflow. Click the create button <br/> <img src="images/4-1-7.png" width="800" /> |
| **Narration** | One of the most valuable features of IBM Concert, in terms of Certificates, is the ability to create automation rules that automatically rotate certificates approaching expiration. These rules can be configured with specific conditions, such as the environments affected by the certificate’s expiry and the number of days before expiration that should trigger the rule. By automating this process, customers can significantly reduce downtime and avoid potential disruptions across their environments.  |

**[Go to top](#top)**

<br/><br/>

</details>

<p/>

<details markdown="1">

<summary><strong>5 - Compliance</strong>: Uploading and assessing compliance evidence</summary>

<br/>

| **5.1** | **Audit changes** |
| :--- | :--- |
| **Narration** | After addressing the CVE's for the finance application, the compliance manager at Focus Corp has asked the application developer for evidence for a compliance assessment that the CVE was detected and mitigated in a timely manner. |
| **Action** &nbsp; 5.1.1 | Click **Dimensions** (1) and select **Compliance** (2). <br/> <img src="images/5-1-1.png" width="800" /> <br/><br/> The following **Compliance** screen will appear: <br/> <img src="images/5-1-2.png" width="800" />  <br/> Click on the Blue compliance assessment name. <br/>  <img src="images/5-1-3.png" width="800" />  <br/> <img src="images/5-1-4.png" width="800" /> |
| **Action** &nbsp; 5.1.2 | Within the **Find by ID or name** Search bar, type in Risk. <br/> <img src="images/5-1-5.png" width="800" /> <br/> For the **Risk Monitoring** control, click on the kebab menu (three dots) on the right. Then select provide evidence. <br/> <img src="images/5-1-6.png" width="800" /> <br/> <img src="images/5-1-7.png" width="800" /> <br/> Change the **Evidence type** to File Evidence. <br/> <img src="images/5-1-8.png" width="800" /> <br/> Download this PDF from github as a sample: https://github.ibm.com/ibm-concert-platinum-demos/concert-tickets/blob/main/vulnerability-evidence.pdf <br/> Back in Concert, upload the vulnerability-evidence.pdf file. <br/> <img src="images/5-1-9.png" width="800" /> </> Click **Evaluate with watsonx**. <br/> <img src="images/5-1-10.png" width="800" /> <br/> <img src="images/5-1-11.png" width="800" /> |
| **Narration** | watsonx.ai has now evaluated the pdf evidence provided and gave a summary to the software developer on why it evaluated the pdf as sufficient or not. |

**[Go to top](#top)**

<br/><br/>

</details>

<p/>

<details markdown="1">

<summary>Summary</summary>

We've demonstrated how Concert takes an application-centric approach to addressing all risks associated with an application, enabling teams to shift left and proactively resolve these risks well ahead of release dates.

**[Go to top](#top)**

<br/><br/>

</details>
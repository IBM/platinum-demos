---
title: IBM Concert demo <br/> Using gen AI to manage the application portfolio <br/> 100-level live demo
layout: demoscript
banner: images/placeholder.jpg
---

<span id="top"></span>

<details markdown="1">

<summary>Introduction</summary>

Today we’ll explore how IBM Concert assists an operations team with managing a complex application landscape. Concert leverages AI across the entire application portfolio, enabling timely and effective decision-making.

By seamlessly integrating with existing toolsets and automatically discovering relevant data, we’ll see how Concert provides application owners with a holistic view of their applications and dependencies. Then we’ll use Concert’s generative AI capabilities to prioritize issues and provide actionable remediation recommendations to maintain application health and security.

Let’s get started.

<br/>

</details>

<p/>

<details markdown="1">

<summary><strong>1 - Home page</strong>: Focusing on the highest priority issues</summary>

<br/>

| **1.1** | **Examine the application landscape** |
| :--- | :--- |
| **Narration** | The operations manager at Focus Financial manages applications hosted across various environments. The application team has recently adopted a microservices architecture that has increased complexity, as the applications now span multiple servers and cloud providers. This has introduced new challenges related to security, compliance and change management. |
| **Action** &nbsp; 1.1.1 | Show the **Home** page, which you opened during demo preparation. <br/> <img src="images/1-1-1.png" width="800" /> |
| **Narration** | Upon logging into Concert, the operations manager sees a comprehensive overview of the organization’s application posture. Concert provides comprehensive AI-generated insights that transcend traditional infrastructure silos. <br/><br/> The entire application posture is displayed, highlighting key metrics tied to risk, compliance, cost and networking. Application issues are prioritized based on their impact, ensuring that the highest priority issues are addressed quickly. |

**[Go to top](#top)**

<br/><br/>

</details>

<p/>

<details markdown="1">

<summary><strong>2 - Arena view</strong>: Interactive map of the application portfolio</summary>

<br/>

| **2.1** | **Discover application connections and dependencies** |
| :--- | :--- |
| **Action** &nbsp; 2.1.1 | Click **Arena view**. <br/> <img src="images/2-1-1.png" width="800" /> |
| **Narration** | The operations team harnesses the power of gen AI as Concert delves into the application topology, revealing intricate connections, dependencies and opportunities. <br/><br/> The ‘Arena view’ provides the operations manager with a 360-degree view of the entire application ecosystem. Concert ingests data from various environments and toolsets which powers the “App 360” view of the application’s operations, showing all the applications, runtime environments, source code repositories and deployed images. <br/><br/> The operations manager can hover over any component to highlight the associated dependencies. |
| **Action** &nbsp; 2.1.2 | Hover over the **paymentApp** application. <br/> <img src="images/2-1-2.png" width="800" /> |
| **Narration** | Looking at the ‘paymentApp,’ they see the Docker images and GitHub repositories associated with this application. They also see the environments where ‘paymentApp’ is deployed - in this case: development, QA, staging and two production environments. |
| **Action** &nbsp; 2.1.3 | Hover over the **prod** environment. <br/> <img src="images/2-1-3.png" width="800" /> |
| **Narration** | Highlighting the 'prod' environment shows the applications deployed on it and the exposed public and private access points. |
| **Action** &nbsp; 2.1.4 | Hover over any **Deployed image**. <br/> <img src="images/2-1-4.png" width="800" /> |
| **Narration** | Highlighting an image shows the associated source code repositories, applications, environments and the exposed public and private access points. |
| **Action** &nbsp; 2.1.5 | Hover over any **Source repository**. <br/> <img src="images/2-1-5.png" width="800" /> |
| **Narration** | Highlighting a source code repository shows the associated images, applications, environments and the exposed public and private access points. Next we'll see how Concert leverages this baseline data to discover gaps, prioritize insights and take actions to maintain application health and optimize the overall operations. |

**[Go to top](#top)**

<br/><br/>

</details>

<p/>

<details markdown="1">

<summary><strong>3 - Turning data into knowledge</strong>: Managing application risk</summary>

<br/>

| **3.1** | **Prioritize and view CVEs** |
| :--- | :--- |
| **Action** &nbsp; 3.1.1 | Click the **Prioritized CVEs** switch. <inline-notification text="A red <strong>Prioritized CVEs</strong> section will appear in the diagram."></inline-notification> <img src="images/3-1-1.png" width="800" /> |
| **Narration** | The operations manager oversees the ongoing threats posed by Common Vulnerabilities and Exposures (CVEs). Concert empowers the operations team to identify and mitigate application vulnerabilities, ensuring resilient operations and reduced security risks by prioritizing the highest risk issues. <br/><br/> Organizations typically have many thousands of CVEs in their code libraries. Concert enables the operations team to focus on the highest risk CVEs – based on the actual exposure in their specific application environment. Concert uses the details of the specific environment, along with proprietary threat intelligence and business criticality, to calculate the risk posed by each vulnerability. <br/><br/> By clicking ‘Prioritized CVEs,’ the operations manager sees the most critical CVEs. The darkest circles represent 'Priority 1' vulnerabilities. | 
| **Action** &nbsp; 3.1.2 | Click a Priority 1 CVE (darkest red). <br/> <img src="images/3-1-2.png" width="800" /> <br/><br/> The following screen will appear: <br/> <img src="images/3-1-3.png" width="800" /> |
| **Narration** | Concert traces the root causes of vulnerabilities based on the application context. The operations manager selects a CVE to view the details. <br/><br/> The Concert-generated risk score is a contextual score based on factors such as the environments where the code is deployed, the number of applications affected and the business criticality of those applications. Concert also generates the CVE description and the “blast radius” showing each image and repository where the vulnerable code is deployed. |
| **Action** &nbsp; 3.1.3 | Click **X** to close the CVE details screen. <br/> <img src="images/3-1-4.png" width="800" /> |

<br/>

| **3.2** | **View the compliance assessments** |
| :--- | :--- |
| **Action** &nbsp; 3.2.1 | Click the **Prioritized CVEs** switch to clear the CVEs, and then click the **Latest compliance assessments** switch. <inline-notification text="A green <strong>Latest compliance assessments</strong> section will appear in the diagram."></inline-notification> <img src="images/3-2-1.png" width="800" /> |
| **Narration** | The operations manager is responsible for maintaining compliance by ensuring all applications adhere to regulatory requirements. By integrating compliance management into the application lifecycle, Concert streamlines compliance assessments across all applications and accelerates issue tracking. When compliance deviations are detected, Concert prioritizes issues and assists the operations team in addressing them efficiently. <br/><br/> By clicking ‘Latest compliance assessments,’ the operations manager sees a summary of the compliance assessments across the application environments. The lighter circles represent the environments with the lowest compliance scores, while the darker circles represent those with higher compliance scores. |
| **Action** &nbsp; 3.2.2 | Click **Dimensions** (1) and select **Compliance** (2). <br/> <img src="images/3-2-2.png" width="800" /> |
| **Action** &nbsp; 3.2.3 | Select the **Profiles** tab. <br/> <img src="images/3-2-3.png" width="800" /> |
| **Action** &nbsp; 3.2.4 | Click the first **Compliance profile**. <br/> <img src="images/3-2-4.png" width="800" /> |
| **Action** &nbsp; 3.2.5 | Open the first control. <br/> <img src="images/3-2-5.png" width="800" /> |
| **Narration** | Concert creates compliance profiles based on standards such as NIST 800. Each profile contains a set of compliance controls, which are the specific measures that ensure applications adhere to regulatory policies. Concert uses gen AI to generate the description of each control. |
| **Action** &nbsp; 3.2.6 | Click **X** to close the compliance profile. <br/> <img src="images/3-2-6.png" width="800" /> |
| **Action** &nbsp; 3.2.7 | Select the **Assessments** tab. <br/> <img src="images/3-2-7.png" width="800" /> |
| **Action** &nbsp; 3.2.8 | Click to open the first assessment. <br/> <img src="images/3-2-8.png" width="800" /> |
| **Narration** | Concert determines application compliance using compliance profiles. Concert creates compliance profiles based on standards such as NIST 800. Each profile contains a set of compliance controls, which are the specific measures that ensure applications adhere to regulatory policies. Concert uses gen AI to generate the description of each control. Concert’s assessment results identify which controls are compliant and which are not. <br/><br/> As applications are delivered, Concert verifies compliance and ensures adherence to standards as applications evolve and scale. In most organizations, compliance is typically handled in isolation by a separate compliance team. Concert provides a unified view of compliance impacts across application and compliance teams, enabling streamlined collaboration and decision-making. |

**[Go to top](#top)**

<br/><br/>

</details>

<p/>

<details markdown="1">

<summary><strong>4 - watsonx chatbot</strong>: Expert analysis and guidance</summary>

<br/>

| **4.1** | **Interact with the chatbot** |
| :--- | :--- |
| **Action** &nbsp; 4.1.1 | Click the **Latest compliance assessments** switch to clear the compliance assessments, and then click the **Prioritized CVEs** switch. <inline-notification text="A red <strong>Prioritized CVEs</strong> section will appear in the diagram."></inline-notification> <img src="images/4-1-1.png" width="800" /> |
| **Action** &nbsp; 4.1.2 | Click the same CVE you selected previously. <br/> <img src="images/4-1-2.png" width="800" /> |
| **Action** &nbsp; 4.1.3 | Click **Ask watsonx**. <br/> <img src="images/4-1-3.png" width="800" /> |
| **Narration** | Concert’s interactive chatbot uses gen AI to dig deeper into Concert’s analysis and engage in conversations. The operations manager uses natural language to interact with Concert, probing its conclusions, understanding its recommendations and exploring the potential impacts. The chatbot uses IBM’s Granite language model and comes pre-trained to have interactive conversations about application risk. <br/><br/> For example, the operations manager can interactively ask questions about CVE details and engage in a discussion about Concert’s remediation guidance. |
| **Action** &nbsp; 4.1.4 | Type '**How do I mitigate this CVE?**' in the chatbot. <br/> <img src="images/4-1-4.png" width="800" /> |
| **Narration** | Concert responds like an expert, providing the operations manager with interactive insight about the vulnerability and offering remediation guidance. |
| **Action** &nbsp; 4.1.5 | Click **X** to close the chatbot window. <br/> <img src="images/4-1-5.png" width="800" /> |

**[Go to top](#top)**

<br/><br/>

</details>

<p/>

<details markdown="1">

<summary><strong>5 - Service ticket generation</strong>: Quickly resolving application issues</summary>

<br/>

| **5.1** | **Open a ticket** |
| :--- | :--- |
| **Narration** | Now that the operations manager fully understands the potential impact of the CVE on the application environment, Concert can automatically generate a service ticket to resolve the vulnerability. Previously, this process required manually communicating the issue to a separate team to create the service ticket. |
| **Action** &nbsp; 5.1.1 | Click **Open ticket** in the first row. <br/> <img src="images/5-1-1.png" width="800" /> <br/><br/> The following **Open a ticket** screen will appear: <br/> <img src="images/5-1-2.png" width="800" /> |
| **Narration** | Concert can connect directly to popular ticketing systems, such as GitHub, Jira and ServiceNow, to automatically generate service tickets to remediate the vulnerability. Concert automatically inserts the appropriate text into the ticket fields, automating what would otherwise be a time-consuming task. In addition to ensuring accuracy, Concert saves an average of 15 minutes per vulnerability, which can add up significantly given the thousands of issues that can arise each year. |
| **Action** &nbsp; 5.1.2 | Click **X** to close the **Open a ticket** screen. <br/> <img src="images/5-1-3.png" width="800" /> |
| **Action** &nbsp; 5.1.3 | Click **X** to close the CVE details screen. <br/> <img src="images/5-1-4.png" width="800" /> |

<br/>

| **5.2** | **Create an automation rule** |
| :--- | :--- |
| **Narration** | Alternatively, the operations manager can configure automation rules to automatically create and assign tickets in the ticketing system, further speeding up the process of remediating vulnerabilities. Concert’s automation rules define the automatic actions to take when it detects an impacting CVE. |
| **Action** &nbsp; 5.2.1 | Click **Administration** and select **Integrations**. <br/> <img src="images/5-2-1.png" width="800" /> |
| **Action** &nbsp; 5.2.2 | Click the **Automation rules** tab. <br/> <img src="images/5-2-2.png" width="800" /> |
| **Action** &nbsp; 5.2.3 | Click **Create automation rule**. <br/> <img src="images/5-2-3.png" width="800" /> |
| **Action** &nbsp; 5.2.4 | Type '**Automatic CVE ticket for production**' into the **Name** field (1). <br/> For the first condition, select **Environments** and **production** (2). <br/> For the second condition, Select **Open GitHub issue** (3). <br/> <img src="images/5-2-4.png" width="800" /> |
| **Narration** | For example, the operations manager can configure a rule to automatically generate a service ticket in GitHub for each vulnerability detected in the production environment. If desired, the operations manager can also set threshold values on risk scores to determine when a ticket should be generated. |
| **Action** &nbsp; 5.2.5 | Click **X** to close the **Create an automation rule** screen. <br/> <img src="images/5-2-5.png" width="800" /> |

**[Go to top](#top)**

<br/><br/>

</details>

<p/>

<details markdown="1">

<summary><strong>6 - Evidence store</strong>: Monitoring and auditing changes</summary>

<br/>

| **6.1** | **Placeholder** |
| :--- | :--- |
| **Action** &nbsp; 6.1.1 | Click **Inventory** (1) and select **Evidence store** (2). <br/> <img src="images/6-1-1.png" width="800" /> <br/><br/> The following **Evidence store** screen will appear: <br/> <img src="images/6-1-2.png" width="800" /> |
| **Narration** | As activities occur and data is updated, Concert continuously maintains the information in the ‘Evidence store.’ The 'Evidence store' acts as a comprehensive change log, tracking CVE resolution progress, compliance status, delivered applications and all the other crucial details. <br/><br/> During software audits, compiling and presenting all necessary data to demonstrate compliance can be very time-consuming. However, with Concert, all relevant information is automatically collected and stored in the 'Evidence store,' making the audit process much more efficient. <br/><br/> For example, we can easily see what compliance assessments we’ve completed and what changed over time. |
| **Action** &nbsp; 6.1.2 | Click **Compliance assessment** under the chart. <br/> <img src="images/6-1-3.png" width="800" /> <br/><br/> The following screen will appear: <br/> <img src="images/6-1-4.png" width="800" /> |
| **Action** &nbsp; 6.1.3 | Select the last two assessments (1) and then select **Compare** (2). <br/> <img src="images/6-1-5.png" width="800" /> <br/><br/> The following screen will appear: <br/> <img src="images/6-1-6.png" width="800" /> |
| **Narration** | Concert compares the two selected compliance assessments, highlighting the differences. It compares the total number of controls that passed in each assessment and the results for each specific control. |

**[Go to top](#top)**

<br/><br/>

</details>

<p/>

<details markdown="1">

<summary>Summary</summary>

We’ve shown how Concert helps an operations manager identify and prioritize application issues, and then facilitate remediation. Before using Concert, the operations team struggled with manual efforts, multiple tools and extensive data required to manage their applications.

The operations manager leveraged Concert to bridge data silos and provide a 360-degree view of their application operations. Concert analyzed data across diverse application environments and helped the operations team proactively ensure the health of their applications.

**[Go to top](#top)**

<br/><br/>

</details>
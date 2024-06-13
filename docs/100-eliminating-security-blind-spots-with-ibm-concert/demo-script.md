---
title: Eliminating security blind spots with IBM Concert <br/>100-level live demo
layout: demoscript
banner: images/placeholder.jpg
---

<span id="top"></span>

<details markdown="1">

<summary>Introduction</summary>

As enterprises develop and deploy an increasing number of software applications, they face significant risks and challenges related to security vulnerabilities and compliance issues.

Leveraging data from various tools, IBM Concert empowers security managers to gain a comprehensive view of vulnerabilities across their homegrown application landscape. Using Concert’s advanced gen AI analytics engine, we can accurately assess vulnerability risk tailored to each customer's specific environment. Concert identifies potential threats, evaluates their impact, and provides actionable recommendations to prioritize and mitigate risks effectively.

Let’s delve into how IBM Concert helps manage vulnerabilities and enhances your security posture.

<br/>

</details>

<p/>

<details markdown="1">

<summary>1 - Viewing a summary of the application security posture</summary>

<br/>

| **1.1** | **Placeholder** |
| :--- | :--- |
| **Narration** | The security manager at Focus Financial is overwhelmed with a backlog of 20,000 CVEs, struggling to manage vulnerabilities across applications hosted in diverse environments. With the recent adoption of a microservices architecture, the complexity has surged as these applications now span multiple servers and cloud providers. This shift has introduced significant challenges in security and vulnerability management, making it crucial to find an intelligent way to prioritize and address these CVEs. |
| **Action** &nbsp; 1.1.1 | Show the **Home** page, which you opened during demo preparation. <br/> <img src="images/1-1-1.png" width="800" /> |
| **Narration** | Upon logging into Concert, the security manager is presented with a circular dashboard, featuring arc slices that represent different aspects of the application landscape. The vulnerability summary is prominently highlighted by default, providing an immediate overview of his risk posture. <br/><br/> The right section provides a high-level overview of key vulnerability metrics, such as the number of total unique CVEs, the number of Priority 1, 2 and 3 CVEs, and more. |
| **Action** &nbsp; 1.1.2 | Scroll down the home page to show the **Most vulnerable applications** and **Prioritized CVEs impacting public access points** graphs. <br/> <img src="images/1-1-2.png" width="800" /> |
| **Narration** | Scrolling down the home page, the security manager can see visual representations with a bar chart showing his most vulnerable applications on the left, and the prioritized CVEs impacting public access points on the right. |
| **Action** &nbsp; 1.1.3 | Scroll down the home page to show the **Highest prioritiy CVEs** table. <br/> <img src="images/1-1-3.png" width="800" /> |
| **Narration** | Finally, at the bottom of the home page, the security manager can see a table with the top five vulnerabilities displayed in order of priority. |

**[Go to top](#top)**

<br/><br/>

</details>

<p/>

<details markdown="1">

<summary>2 - Analyzing a CVE</summary>

<br/>

| **2.1** | **Placeholder** |
| :--- | :--- |
| **Action** &nbsp; 2.1.1 | Click **CVE-2022-42889**. <br/> <img src="images/2-1-1.png" width="800" /> <br/><br/> The following screen will appear: <br/> <img src="images/2-1-2.png" width="800" /> |
| **Narration** | The security manager selects a CVE to view the details and sees the "blast radius" showing each image and repository where the vulnerable code is deployed. <br/><br/> The CVE view provides the security manager with a summary of the issue, the industry-defined generic CVSS score, and a custom Concert risk score. Instead of relying on generic assessments, Concert uses gen AI to correlate vulnerability data using multiple risk vectors to analyze complex chains of application dependencies and uncover the highest severity risks in an organization’s specific environment. This enables Concert to generate a score based on the actual exposure in their specific application environment. Concert then uses the details of the specific environment, along with proprietary threat intelligence and business criticality, to calculate the risk posed by each vulnerability. |

**[Go to top](#top)**

<br/><br/>

</details>

<p/>

<details markdown="1">

<summary>3 - Using conversational AI to gain deeper insights</summary>

<br/>

| **3.1** | **Placeholder** |
| :--- | :--- |
| **Action** &nbsp; 3.1.1 | Click **Ask watsonx**. <br/> <img src="images/3-1-1.png" width="800" /> |
| **Narration** | Concert’s interactive chatbot uses generative AI to dig deeper into Concert’s specific suggestions and explain the potential impact and remediation of each issue. The chatbot uses IBM’s Granite language model and comes pre-trained to have interactive conversations about application risk. The security manager interactively asks questions about CVE details and engages in a discussion about remediation guidance. Concert responds just as a CVE expert would. |
| **Action** &nbsp; 3.1.2 | Type '**How do I mitigate this CVE?**' in the chatbot. <br/> <img src="images/3-1-2.png" width="800" /> |

**[Go to top](#top)**

<br/><br/>

</details>

<p/>

<details markdown="1">

<summary>4 - Visualizing the impact of CVEs on the application ecosystem</summary>

<br/>

| **4.1** | **Placeholder** |
| :--- | :--- |
| **Action** &nbsp; 4.1.1 | Click the **Prioritized CVEs** switch. <inline-notification text="A red <strong>Prioritized CVEs</strong> section will appear in the diagram."></inline-notification> <img src="images/4-1-1.png" width="800" /> |
| **Narration** | By clicking on ‘Prioritized CVEs,’ the operations manager sees the higher priority CVEs. The darkest circles represent the most critical CVEs. <br/><br/> Hovering over a CVE highlights the end-to-end exposure path of the CVE from repositories to endpoints. |

**[Go to top](#top)**

<br/><br/>

</details>

<p/>

<details markdown="1">

<summary>5 - Viewing all vulnerabilities in the dimensions view</summary>

<br/>

| **5.1** | **Placeholder** |
| :--- | :--- |
| **Action** &nbsp; 5.1.1 | Placeholder <br/> <img src="images/5-1-1.png" width="800" /> |
| **Narration** |  |

**[Go to top](#top)**

<br/><br/>

</details>

<p/>

<details markdown="1">

<summary>Summary</summary>

Placeholder

**[Go to top](#top)**

<br/><br/>

</details>
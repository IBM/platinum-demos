---
title: Streamline work with watsonx Orchestrate <br/> 100-level live demo
layout: demoscript
banner: images/scalable-resilient-integration-banner-SCRIPT-5-25-23.jpg
---

<span id="top"></span>

This 100-level demo, designed for sellers and tech sellers, does not require technical skills and deployment skills, and it only covers the end user view. 

A more in-depth 300-level demo, designed for tech sellers, is coming soon that will cover both the end user view and builder view. <br/><br/>

<details markdown="1">

<summary>Introduction</summary>

Today we’ll look at how watsonx Orchestrate uses conversational AI to help a salesperson get work done quickly.

A high priority task for sellers can be to implement an effective marketing strategy to upsell/cross-sell to their existing client base. Identifying the right potential clients and doing personalized outreach achieves the best results. However, this requires sellers to work across various systems including a CRM tool like Salesforce, a recommendation engine powered by IBM Automation Decision Services (ADS), and an email tool like Outlook. It can become a daunting task because every outreach activity is best done when personalized. 

Let’s look at a customer outreach activity that typically consumes a few hours.  We’ll see how a seller is able to reduce that time down to 5 minutes or even less. Let’s get started.

<br/><br/>

</details>

<p/>

<details markdown="1">

<summary>1 - Retrieving a customer list from Salesforce using conversational AI</summary>

<br/>

| **1.1** | **Introduce salesforce skill invocation using chat prompt** |
| :--- | :--- |
| **Narration** | The first step of the upsell task is to search Salesforce for clients that are upsell opportunities. <br/><br/> We invoke the customer upsell task using a chat prompt. |
| **Action** &nbsp; 1.1.1 | Type a natural language command 'Fetch my customers with recent life changes' to pull a customer list from Salesforce. <br/> <img src="images/1-1-1-applications-dashboard.png" width="800" /> |
| **Narration** | watsonx Orchestrate understands the request automatically and connects to Salesforce data using an API in the back end and retrieves my customer list. The data shows a list of all customers with recent life changing events. The customer data is neatly displayed in a built-in table within the chat interface. |

<br/>

**[Go to top](#place1)**

<br/><br/>

</details>

<p/>

<details markdown="1">

<summary>2 - Running a decision engine for a recommendation</summary>

<br/>

| **2.1** | **Select a customer for cross-sell/upsell** |
| :--- | :--- |
| **Narration** | The next step of the task is to determine the products to recommend to the selected customer. This skill makes a product recommendation based on the customer’s situation. |
| **Action** &nbsp; 2.1.1 | Select a customer from the table and click **Apply** in the chat window. <br/> <img src="images/2-1-1-alter-line.png" width="800" /> |
| **Narration** | watsonx Orchestrate uses the built-in decision automation capabilities to determine cross-sell/upsell recommendations for the selected customer. <br/><br/> The decision engine applies business logic that considers many different customer factors in order to make a product recommendation. In this case, the decision recognizes that the customer, John Collins, has a child who recently turned twenty-five. In the US, twenty-five is a milestone requiring children to acquire independent health insurance care coverage. Therefore, the decision will recommend a few suitable health coverage products for John’s child. |

<br/>

**[Go to top](#place1)**

<br/><br/>

</details>

<p/>

<details markdown="1">

<summary>3 - Sending a personalized email for a cross-sell / upsell opportunity</summary>

<br/>

| **3.1** | **Use a generative AI from watsonx.ai to create a personalized email** |
| :--- | :--- |
| **Narration** | Personalized emails make sales offers more compelling and increase the likelihood of conversion. Large Language Models (LLMs) are used to generate personalized emails for customers by leveraging natural language processing capabilities, understanding of context, and ability to generate human-like text. <br/><br/> watsonx Orchestrate uses one of IBM’s watsonx AI LLMs to generate a personalized email for the client. The generated email contains client-specific content that references their recent history and why the recommended policy change has been recommended. |
| **Action** &nbsp; 3.1.1 | Click the **Generate Email** button in the watsonx Orchestrate chat window. <br/> <img src="images/3-1-1-click-scale.png" width="800" /> |
| **Narration** | watsonx Orchestrate then uses one of IBM’s watsonx AI LLMs to generate a personalized email for this client. The email has details specific to this client, like their name, policy type, reference to their recent history, and why a change in policy makes sense. |
| **Action** &nbsp; 3.1.2 | Review the email and make any changes like adding your signature. <br/><br/> Click the **Send Email** button in the watsonx Orchestrate chat window. <br/><br/> Open an email client to show the sent email. <br/> <img src="images/3-1-2-click-scale.png" width="800" /> |
| **Narration** | watsonx Orchestrate comes with a pre-built email editor that allows me to further customize or change the email to my preferences, like adding a signature. When I’m happy with the email format, I can send the email directly from watsonx Orchestrate without having to open my email client. As you can see here in one of my inboxes, the email was sent successfully. |
  
<br/>

**[Go to top](#place1)**

<br/><br/>

</details>

<p/>

<details markdown="1">

<summary>Summary</summary>

<br/>

In today’s demo, we saw an insurance seller use watsonx Orchestrate to automate some of their repetitive, daily tasks. What would normally take hours to do, we were able to accomplish in only five minutes without any code or constant switching between applications. 

That’s because watsonx Orchestrate comes with a catalog of pre-built skills and the ability to create custom ones. Instead of dealing with complex CURL or what the API commands, users only need to click a button to access their tools and services.

For multiple customers, this is equivalent to saving days of work. From an IT perspective, you are creating more efficient ways of doing work for end users and developers alike, and getting more out of your existing investments.

Thank you for attending today’s presentation.

**[Go to top](#place1)**

<br/><br/>

</details>
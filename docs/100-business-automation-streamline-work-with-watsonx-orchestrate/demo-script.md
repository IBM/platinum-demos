---
title: Streamline work with watsonx Orchestrate <br/> 100-level live demo
layout: demoscript
banner: images/wxo_100_script_banner.jpg
---

<span id="top"></span>

<details markdown="1">

<summary>Introduction</summary>

Today we’ll see how IBM watsonx Orchestrate uses conversational AI to help sales professionals get their work done quickly.

Sellers in every industry perform many different tasks each day in their effort to upsell and cross-sell, including making customer offers, updating policies, and processing claims. In today's example, we'll look at how an insurance sales representative performs a series of tasks that traditionally require the use of multiple systems, making it challenging to remember which applications are required and how they are used.

Let’s look at how we can help sales reps become more efficient and effective in carrying out these daily responsibilities. Prior to watsonx Orchestrate, sales reps in a brokerage office dedicated a few hours per week to sending prospecting emails for upsell and cross-sell. The steps of this process were: 
1.	Search the CRM system for customers that meet certain criteria.
2.	Determine the best upsell and cross-sell products to offer each customer.
3.	Write a customized email to each customer.
4.	Send each e-mail.

We will see in the demo how quickly IBM watsonx Orchestrate can assist insurance sellers in performing this sequence of tasks. 

<br/><br/>

</details>

<p/>

<details markdown="1">

<summary>1 - Retrieving a customer list from a CRM using conversational AI</summary>

<br/>

| **1.1** | **Invoke Salesforce skill using conversational AI** |
| :--- | :--- |
| **Narration** | A common task for an insurance seller is to periodically search the Salesforce CRM system for customers with recent life changes and identify upsell/cross-sell opportunities.<br/><br/>In watsonx Orchestrate the upsell task is invoked by using a natural language phrase. Orchestrate uses AI to understand the user’s intent and can perform the correct action even when the request is ambiguous.|
| **Action** &nbsp; 1.1.1 | Type a natural language command **'Write upsell email to customers who have experienced recent life changes'** to pull a customer list from Salesforce. <br/> <img src="images/1-1-1.png" width="800" /> |
| **Narration** | watsonx Orchestrate automatically connects to Salesforce using an API that queries multiple data fields to retrieve a list of customers with recent life changes. The customer data is neatly displayed in a table within the chat interface.<br/><br/>The seller reviews the list of customers and recognizes a great cross-sell opportunity with John Collins because he has a child who is about to turn twenty-six. In the US, twenty-six is a milestone requiring children to acquire independent health insurance coverage. Other countries set different age limits for various family milestones.|
| **Action** &nbsp; 1.1.2 | Select **John Collins** (1) from the table and click **Apply** (2) in the chat window. <br/> <img src="images/1-1-2.png" width="800" /> |

<br/>

**[Go to top](#place1)**

<br/><br/>

</details>

<p/>

<details markdown="1">

<summary>2 - Running a decision engine for a recommendation</summary>

<br/>

| **2.1** | **Identify products for cross-sell / upsell** |
| :--- | :--- |
| **Narration** | The next step is to determine which products to recommend to the selected customer.<br/><br/>To do this task, watsonx Orchestrate automatically invokes a product recommendation skill that uses built-in decisioning capabilities to apply business logic that considers many different factors, such as the child’s age, pre-existing conditions, and current coverage, to determine the best products to recommend to the customer.<br/><br/>In the case of John Collins, the decision engine recommends three health insurance plans suitable for his young adult: Bronze-level Marketplace Plan, Silver-level Marketplace Plan and Short-term Health Insurance.|

| **Action** &nbsp; 2.1.1 | The customer details are submitted into the built-in decision engine and the upsell recommendations are displayed. Note that this form would usually be hidden as it is an intermediate step, but it’s shown here for clarity. <br/> <img src="images/1-1-1.png" width="800" /> |

<br/>

**[Go to top](#place1)**

<br/><br/>

</details>

<p/>

<details markdown="1">

<summary>3 - Sending a personalized email for a cross-sell / upsell opportunity</summary>

<br/>

| **3.1** | **Use generative AI to create a personalized email** |
| :--- | :--- |
| **Narration** | Personalized emails make sales offers more compelling and increase the likelihood of conversion. Large Language Models (LLMs) use natural language processing capabilities to generate customer-specific emails by understanding context and producing human-like text.<br/><br/>watsonx Orchestrate can use any of the watsonx.ai LLMs to generate a personalized email for the client. The generative AI input prompt is automatically created based on the customer’s life event. Also, the products recommended by the decision engine are inserted dynamically into the prompt submitted to the LLM.|
| **Action** &nbsp; 3.1.1 | In the prompt field, highlight the embedded recommended products to show how the prompt has been populated using data taken from the CRM system and the decision engine (1). Click Apply (2). <br/> <img src="images/3-1-1.png" width="800" /> |
| **Action** &nbsp; 3.1.2 | Scroll down and click **Apply**. <br/> <img src="images/3-1-2.png" width="800" /> |
| **Narration** | watsonx Orchestrate connects to watsonx.ai to generate an email containing the upsell offer. The generated email contains client-specific content that references the client’s recent history and why the products have been recommended. <br/><br/> Orchestrate then launches the out-of-the-box Microsoft Outlook skill so the seller can send the email directly from Orchestrate without having to open their email client. The fields for the e-mail, such as the subject line and e-mail body, are pre-prepopulated and can be updated.|
| **Action** &nbsp; 3.1.3 | Change the email address in the **To** field to your own email and review the email. <br/> <img src="images/3-1-3.png" width="800" /> <br/> Highlight and review the automatically generated email subject and body.|
| **Action** &nbsp; 3.1.4 | Review the email. <br/><br/> Scroll down and click **Apply** in the watsonx Orchestrate chat window. <br/> <img src="images/3-1-4.png" width="800" /> |
| **Action** &nbsp; 3.1.5 | Open an email client to show the sent email (the email may not be received if a known bug is not fixed). <br/> <img src="images/3-1-5.jpg" width="800" /> |
| **Narration** | As you can see here in one of their inboxes, the email was sent successfully. |
  
<br/>

**[Go to top](#place1)**

<br/><br/>

</details>

<p/>

<details markdown="1">

<summary>Summary</summary>

<br/>

To summarize, in today’s demo we saw an insurance seller use watsonx Orchestrate to automate some of their repetitive, daily tasks. What would normally take hours to do, we were able to accomplish in only five minutes without any code or constant switching between applications. 

That’s because watsonx Orchestrate comes with a catalog of pre-built skills and the ability to create custom ones. Instead of dealing with complex API commands, users only need to write a phrase or click a button to invoke their automations.

For multiple customers, this is equivalent to saving days of work. From an IT perspective, you are creating more efficient ways of doing work for end users and developers alike, and getting more out of your existing investments.

Thank you for attending today’s presentation.

**[Go to top](#place1)**

<br/><br/>

</details>
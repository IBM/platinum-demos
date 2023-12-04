---
title: Boosting sales productivity with watsonx Orchestrate<br/> 100-level live demo
layout: demoscript
banner: images/wxo_100_script_banner.jpg
---

<span id="top"></span>

<details markdown="1">

<summary>Introduction</summary>

Today I want to show you how watsonx Orchestrate uses conversational AI to help your sales professionals be more productive, which means closing more business. 

Typically insurance sales agents spend their time across many tasks while constantly context switching between multiple applications to do their jobs. A large part of any successful insurance sellers time should be spent servicing existing clients, but an important part of being a great sales agent is finding new business and building pipeline.

Prior to watsonx Orchestrate, agents in this insurance office dedicated a few hours per week to sending prospecting emails for upsell and cross-sell opportunities, as well as building pipeline. To do this, a typical insurance seller would: 
1.	Search Salesforce for customers that meet certain cross-sell criteria.
2.	Determine the best cross-sell products to offer each customer.
3.	Send a personalized email to each customer.

Unfortunately, agents in this office are facing a number of challenges that hinder their ability to perform at their best:
- Searching their Salesforce CRM effectively for sales opportunities is time consuming and requires a lot of skill, skills that not everyone on the team possesses.
- Matching customers circumstances to the most optimal and competitive products is time consuming and requires expert product knowledge. The information about products, customers and policies is spread over multiple systems and spreadsheets.
- Multiple systems and applications are used; it takes time to switch between these systems to find the required information. Data is copied and pasted between applications and inevitably errors are made.
- There isn't time to create a personalized email for each customer so instead they use templates, but they know that the emails that are produced this way are often ignored.    

Let's look at how this prospecting work can be done more effectively with watsonx Orchestrate.
- We’ll use a chat interface to extract data from SalesForce that leverages a pre-configured search to find customers with recent life events.
- We’ll match these customers to the most suitable and competitive products using an automation that represents the digitized knowledge of a product expert. 
- Instead of using an email template, we’ll feed the customer information and the products details into a generarative AI model. This model will draft the prospecting email ready for us to review and edit with any specific information for this customer.
- Finally, we’ll automate the creation and dispatch of the email. We’ll get a chance to review it but we won’t have to open Outlook and copy over email addresses and product info.  <br/><br/>

Let's get started.

<br/>
</details>

<p/>

<details markdown="1">

<summary>1 - Retrieving a customer list from Salesforce</summary>

<br/>

| **1.1** | **Invoke a Salesforce skill using natural language** |
| :--- | :--- |
| **Narration** | A common task for an insurance agent is to periodically search their Salesforce (CRM) for customers with recent life events that are good candidates to receive upsell/cross-sell offers. For example, the birth of a child brings focus to life insurance coverage, and so on. Traditionally this task involves creating custom Salesforce reports and downloading them for manual and offline review by the selling agent.<br/><br/> How does this play out with an insurance company using watsonx Orchestrate? The agent invokes the Salesforce search using the simple natural language phrase: "Write an upsell email to my customers". IBM watsonx Orchestrate uses AI to understand the sales agent's intent and performs the correct action, even when the request phrase is ambiguous.|
| **Action** &nbsp; 1.1.1 | Type the natural language command **'Write an upsell email to my customers'** (1) and click the **Send arrow** (2) in the chat window.<br/><img src="images/1-1-1.png" width="800" /> <br/>**Note:** if you get a response "No skill matches your request. Try rephrasing your question.", please check you have selected **Team skills** from the menu bar. 
| **Narration** | Orchestrate runs the Salesforce task by connecting to a back-end API that retrieves a list of customers with recent life events. The retrieved customer data is neatly displayed in a table within Orchestrate's chat interface.<br/><br/>The agent reviews the list of customers and pursues a cross-sell opportunity with John Collins, who has a child that recently turned twenty-five. For this product, turning twenty-five is a milestone requiring children to acquire independent health insurance coverage. (Other countries set different age limits for various family milestones.)|
| **Action** &nbsp; 1.1.2 | Select the radio button associated with **John Collins** (1) from the table and click the **Apply** button (2) in the chat window. <br/> <img src="images/1-1-2.png" width="800" /> |

<br/>

**[Go to top](#place1)**

<br/><br/>

</details>

<p/>

<details markdown="1">

<summary>2 - Automating the product recommendation</summary>

<br/>

| **2.1** | **Identify products for cross-sell / upsell** |
| :--- | :--- |
| **Narration** | Next, the agent needs to determine which products to recommend for John based on his circumstances and recent life event.<br/><br/> The customer details from Salesforce are automatically submitted into Orchestrate's built-in decision engine and the upsell recommendations are displayed. Behind the scenes, the decision engine applied business logic that took into account many different attributes specific to this customer, such as the child’s age, pre-existing conditions, and current coverage. Then it applied product knowledge to determine the best products to recommend.<br/><br/>In the case of John Collins, the decision engine recommended three health insurance plans that are suitable for his child: Bronze-level Marketplace Plan, Silver-level Marketplace Plan, and Short-term Health Insurance.| 
| **Action** &nbsp; 2.1.1 | Highlight the three insurance plans recommended by the decision skill as you talk about it.<br/><img src="images/2-1-1.png" width="800" /> |

<br/>

**[Go to top](#place1)**

<br/><br/>

</details>

<p/>

<details markdown="1">

<summary>3 - Generating and sending a personalized email</summary>

<br/>

| **3.1** | **Use generative AI to write a personalized email to the client** |
| :--- | :--- |
| **Narration** | Personalized emails increase the likelihood of conversion. Watsonx Orchestrate uses one of IBM's Large Language Models (LLM's), built on the watsonx.ai platform. This model generates a personalized email for the selected customer. Perfecting the AI prompt to generate a properly formatted email is typically a time-consuming activity. To make this faster and repeatable for insurance sellers, watsonx Orchestrate uses a template AI prompt to which it adds the dynamic customer and product data.|
| **Action** &nbsp; 3.1.1 | In the **Prompt** field, **highlight** (1) the generated prompt that includes the recommended products to show how data from the decision engine has been automatically inserted. Now click **Apply** (2).<br/><img src="images/3-1-1.png" width="800" /> |

<br/>

| **3.2** | **Use watsonx Orchestrate's built-in Microsoft Outlook skill to send a personalized email to the client** |
| :--- | :--- |
| **Narration** | IBM watsonx Orchestrate launches its out-of-the-box Outlook skill and pre-fills the form with the customer contact details and the generated email containing the proposal. The insurance seller can now review the generated content to ensure it is accurate and add any further information to ensure the proposal is relevant to John. The IBM provided generative models are specifically trained on curated data to produce output suitable for business purposes, but we still require the agent to review it. This 'human in the loop" approach is vital, we want to save time by leveraging AI to generate the bulk of the content, but we still want agent to have overall control. <br/><br/>Since we're using a built-in skill to handle the Outlook email the agent doesn't need to open their Outlook client, the **To** and **Subject** fields have been pre-populated and the AI-generated text has been inserted into the **content** field.|
| **Action** &nbsp; 3.2.1 | Review the generated email and edit if necessary and discuss the text generated by watsonx.ai that was automatically inserted into the **content** field.<br/> <img src="images/3-1-4.png" width="800" /><br/><br/>**Note:** LLM's are non-deterministic, for the same input they can generate slightly different output. The models are contstantly retraining and evolving so your output may differ.|
| **Action** &nbsp; 3.2.2 | Change the email address in the **To** (1) field to your own email.<br/> <img src="images/3-1-3.png" width="800" /> <br/><br/>Scroll down and click **Apply** (2) in the watsonx Orchestrate chat window.<br/><img src="images/3-1-5.png" width="800" /> <br/>IBM watsonx Orchestrate will tell you that the email was sent. <img src="images/3-1-6.png" width="800" />|

 
<br/>

**[Go to top](#place1)**

<br/><br/>

</details>

<p/>

<details markdown="1">

<summary>Summary</summary>

<br/> 
Using an upsell/cross-sell example, this lab showed how watsonx Orchestrate provides a conversational interface for insurance sales agents to perform their repetitive tasks and reduce the time it takes to complete common business tasks, such as searching through CRM reports for sales opportunities.

Product expertise was used to create an automation that provided optimal product recommendations and an LLM was used to generate the draft proposal for the agent to review. 

By providing a catalog of skills, watsonx Orchestrate eliminated the need for the insurance agent to manually move data between different back-end applications. Watsonx Orchestrate streamlined the agent's work by sequencing a series of skills within a single unified interface, boosting this agent's productivity, reducing errors and enabling them to focus on higher value work.

Thank you for attending today’s presentation.

**[Go to top](#place1)**

<br/><br/>

</details>
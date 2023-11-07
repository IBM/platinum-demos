---
title: Leveraging ODM decisions in watsonx Orchestrate <br/> 300-level live demo
layout: preparation
banner: images/scalable-resilient-integration-banner-PREP-5-25-23.jpg
---

<span id="place1"></span>

<span id="top"></span>

| **DEMO OVERVIEW** | | 
| :---         | :--- |
| **Scenario overview** | In this demo, we will see how watsonx Orchestrate can leverage Operational Decision Manager’s deployed services on premises to create new skills. To illustrate this, we will use a company’s customer service application. |
| **Demo products** | IBM Operational Decision Manager (included in Cloud Pak for Business Automation V23.0.1), watsonx Orchestrate |
| **Demo capabilities** | Decision management; Digital assistant |
| **Demo script** | A complete demo script is on the second tab above. <br/><br/> This demo script has multiple tasks that each have multiple steps. In each step, you have the details about what you need to do (**Actions**), what you can say while delivering this demo step (**Narration**), and what diagrams and screenshots you will see.<br/><br/>This demo script is a suggestion, and you are welcome to customize based in your sales opportunity. Most importantly, practice this demo in advance. If the demo seems easy for you to execute, the customer will focus on the content. If it seems difficult for you to execute, the customer will focus on your delivery. |
| **Demo downloads** | Operational Decision Manager (Decision Center projects) <br/> • <a href="./files/Customer Service.zip" target="_blank" rel="noreferrer">Customer Service.zip</a> <br/> • <a href="./files/Get Request Details.zip" target="_blank" rel="noreferrer">Get Request Details.zip</a> <br/><br/> watsonx Orchestrate (Skills) <br/> • <a href="./files/XXX FocusCorp Customer Service.json" target="_blank" rel="noreferrer">XXX FocusCorp Customer Service.json</a> <br/> • <a href="./files/XXX FocusCorp Get data from CRM.json" target="_blank" rel="noreferrer">XXX FocusCorp Get data from CRM.json</a> <br/><br/> Optional (For ODM experts looking to customize the decision service) <br/> • <a href="./files/RuleDesignerFiles_V5_20231027.zip" target="_blank" rel="noreferrer">RuleDesignerFiles.zip</a> |
| **Required versions** | IBM Operational Decision Manager 8.11.1.0 on IBM Cloud, watsonx Orchestrate SaaS (Standard or Enterprise edition) |
| **How to get support** | • Open a support case at <a href="https://techzone.ibm.com/help" target="_blank" rel="noreferrer">IBM Technology Zone Help</a> regarding issues with reserving and provisioning Tech Zone environments.<br/>• Contact <a href="https://ibm-cloud.slack.com/archives/C0216F39ACU" target="_blank" rel="noreferrer">#platinumdemos-automation-support</a> regarding issues with setting up and running this demo. |

### **DEMO INSTALLATION AND SETUP**

<inline-notification text="You are going to deliver a demo on a watsonx Orchestrate shared environment. watsonx Orchestrate environments are single-tenant. To prevent conflicts and to easily access your different artifacts, you will have to pre-fix or update some skills and artifacts with your own initials. <br/><br/> In this documentation, we will use ‘<strong>XXX</strong>’. You are asked to use your own 3-letter initials that are not yet used on your watsonx Orchestrate instance."></inline-notification>

<details markdown="1">

<summary>Prerequisites</summary>

Before starting the installation of this demo, make sure you have been granted access to a watsonx Orchestrate SaaS environment: <br/><br/>
• IBM Tech Sales: Contact your local geo tech sales leader to be invited to the dedicated watsonx Orchestrate instances <br/>
• Business Partners: Contact your local IBM Ecosystem representative

It is also required that you have a text editor that's able to edit .json files. In this documentation, we will use Microsoft™ Visual Studio Code.

<br/>

**[Go to top](#top)**

<br/><br/>

</details>
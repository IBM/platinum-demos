---
title: Boosting sales productivity with watsonx Orchestrate <br/> 300-level live demo
layout: preparation
banner: images/wxo_300_prep_banner.png
---

<span id="place1"></span>

<span id="top"></span>

| **DEMO OVERVIEW** | | 
| :---         | :--- |
| **Scenario overview** | This demo shows how watsonx Orchestrate can be used by sales representatives to assist with the upsell/cross-sell process. To illustrate this, an insurance seller uses watsonx Orchestrate to retrieve a list of customers from Salesforce and automatically send a customized offer.|
| **Demo products** | watsonx Orchestrate |
| **Demo capabilities** | Salesforce skill; watsonx.ai generative AI skill; Microsoft Outlook skill; Embedded decision engine skill|
| **Demo script** | A complete demo script is on the second tab above. <br/><br/> This demo script has multiple tasks that each have multiple steps. In each step, you have the details about what you need to do (**Actions**), what you can say while delivering this demo step (**Narration**), and what screenshots you will see.<br/><br/>This demo script is a suggestion, and you are welcome to customize based in your sales opportunity. Most importantly, practice this demo in advance. If the demo seems easy for you to execute, the customer will focus on the content. If it seems difficult for you to execute, the customer will focus on your delivery. |
| **How to get support** | • Open a support case at <a href="https://techzone.ibm.com/help" target="_blank" rel="noreferrer">IBM Technology Zone Help</a> regarding issues with reserving and provisioning Tech Zone environments.<br/>• Contact <a href="https://ibm-cloud.slack.com/archives/C0216F39ACU" target="_blank" rel="noreferrer">#platinumdemos-automation-support</a> regarding issues with setting up and running this demo. |

### **PREPARE TO GIVE THE DEMO**

New users will have access to pre-connected "team skills” to perform Part 1 of the demo that uses an existing skill flow. 

<img src="images/Prep-0-1.png" width="300" />

For Part 2, it will be necessary to set up two “personal skills” that can be used to build a new skill flow.

The OpenAPI file for the custom Salesforce skill will also require an update before we can re-import it. (This API has already been imported, so it is necessary to change the API signature before we can repeat the import process.)

<details markdown="1">

<summary>1 - Add Salesforce API as personal skill</summary>

1. Click the **Team skills** drop-down menu (1) and click **Personal skills** (2). <br/> <img src="images/Prep-1-1.png" width="500" /><br/>

2. Click the **Add skills from the catalog** tile. <br/> <img src="images/Prep-1-2.png" width="500" /><br/>

3. Search for '**retrieve**' in the search panel. <br/> <img src="images/Prep-1-3.png" width="800" /><br/>

4. The list of apps is filtered to only show apps that contain skills containing the word 'retrieve.' Click the **Salesforce – Get customers with recent life changes** card. <br/> <img src="images/Prep-1-4.png" width="800" /><br/>

5. Click **Add skill +** (1). Click **Connect app** (2). <br/> <img src="images/Prep-1-5.png" width="800" /><br/>

6. Use the credentials provided and enter the **Client ID** (1) and **Client Secret** (2). Click **Connect app** (3). <br/> <img src="images/Prep-1-6.png" width="800" /><br/>

7. Click the **menu slider** icon. <br/> <img src="images/Prep-1-7.png" width="500" /><br/>

8. Click **Home**. <br/> <img src="images/Prep-1-8.png" width="500" /><br/>

9. Test the skill works correctly by clicking the skill tile. <br/> <img src="images/Prep-1-9.png" width="500" /><br/>

10. A table should be shown containing the data from Salesforce. <br/> <img src="images/Prep-1-10.png" width="500" /><br/>
   
</details>

<p/>

<details markdown="1">

<summary>2 - Add personal skill with Automation Builder</summary>

The next personal skill to add will be based on a decision model imported into Automation Builder.

1. Click the **menu slider** icon (1). Click **Automation Builder** (2). <br/> <img src="images/Prep-2-1.png" width="800" /><br/>

2. Click **New**. <br/> <img src="images/Prep-2-2.png" width="300" /><br/>

3. Click **Import automation** (1). Click **Browse** (2). <br/> <img src="images/Prep-2-3.png" width="700" /><br/>

4. Select the **Product Upsell.zip** file provided with this demo and click **Save**. <br/> <img src="images/Prep-2-4.png" width="800" /><br/>

5. Click **Product Upsell** within the card to open the Product Upsell automation. <br/> <img src="images/Prep-2-5.png" width="300" /><br/>

6. Click the **Share changes** tab. <br/> <img src="images/Prep-2-6.png" width="800" /><br/>

7. Click **Share**. <br/> <img src="images/Prep-2-7.png" width="800" /><br/>

8. In the Share window, click **Share**. <br/> <img src="images/Prep-2-8.png" width="500" /><br/>

9. Click the **View history** tab. <br/> <img src="images/Prep-2-9.png" width="800" /><br/>

10. Click **Version +**. <br/> <img src="images/Prep-2-10.png" width="800" /><br/>

11. In the **Name** field, enter the version number '**1.0.0**' (1). Click **Create** (2). <br/> <img src="images/Prep-2-11.png" width="500" /><br/>

12. Click the **Publish** tab. <br/> <img src="images/Prep-2-12.png" width="800" /><br/>

13. Expand version **1.0.0** (1). Click **Publish** (2). <br/> <img src="images/Prep-2-13.png" width="800" /><br/>

14. In the Publish automation window, click **Publish**. <br/> <img src="images/Prep-2-14.png" width="500" /><br/>

15. After a few minutes, check that the **Publish status** updated (1). Click the **menu slider** icon (2). <br/> <img src="images/Prep-2-15.png" width="800" /><br/>

16. Click **Skills** (2). <br/> <img src="images/Prep-2-16.png" width="500" /><br/>

17. The new skill is shown in the Skills and apps panel. <inline-notification text="With many users running the demo, there may be several copies of the same skill already present. Confirm the identity of your skill by expanding its details (1) and confirming the timestamp and author (2)."></inline-notification> The skill should have a status of **Ready to publish** (3). Click the **ellipsis** icon (4). Click **Enhance this skill** (5). <br/> <img src="images/Prep-2-17.png" width="800" /><br/>

18. Click the **Phrases** tab (1) and enter the phrases '**Get upsell products**' and '**Fetch recommended products**' (2). Click **Publish** (3). <br/> <img src="images/Prep-2-18.png" width="800" /><br/>

19. Click **Home**. <br/> <img src="images/Prep-2-19.png" width="500" /><br/>

20. Click **Add skills from the catalog**. <br/> <img src="images/Prep-2-20.png" width="500" /><br/>

21. Search for '**product**' in the search panel (1). Click the **Product Upsell** card (2). <br/> <img src="images/Prep-2-21.png" width="500" /><br/>

22. Click **Add skill +**. <br/> <img src="images/Prep-2-22.png" width="500" /><br/>

23. Click **Home**. <br/> <img src="images/Prep-2-23.png" width="500" /><br/>

24. Click **Execute Product Upsell Operation**. <br/> <img src="images/Prep-2-24.png" width="700" /><br/>

25. Enter values for the **customer.childAge** (1) and **customer.name** (2) fields. Click **Apply** (3). <br/> <img src="images/Prep-2-25.png" width="500" /><br/>

26. Confirm the output is received from the decision. <br/> <img src="images/Prep-2-26.png" width="500" /><br/>

</details>

<p/>

<details markdown="1">

<summary>3 - Update the OpenAPI file</summary>

<inline-notification text="The OpenAPI file must be updated before it can be used to import a new skill. This is necessary as Orchestrate uses two attributes as the unique ID for the skill and the skill has already been imported as a team skill."></inline-notification>

1. In a multi-user environment, we must provide unique values for the API. There are four attributes to update: **x-ibm-application-name**, **description**, **summary** and **operationId**. <br/> <img src="images/Prep-3-1.png" width="800" /><br/><br/> Add your initials and date to the four attributes. <br/><br/> Please test you can import the API as a skill before starting the demo. These steps are taken from the demo script and are duplicated here for convenience. <br/>

</details>

<br/>

### **PREPARATION REQUIRED TO GIVE THIS DEMO AGAIN**

<details markdown="1">

<summary>Delete the draft skill</summary>

Delete the draft skill once you have tested it, as it will be imported again in the demo. After returning to the skill panel, search for the unique ID and delete it. <br/> <img src="images/Prep-4-1.png" width="800" /><br/>

</details>

<p/>

<details markdown="1">

<summary>Repeat the demo</summary>

To repeat the demo, remove the two skills that were created during the demo. First, remove the skill flow, and then remove the skill created from the OpenAPI.

1. Click the **menu slider** icon and select **Skills**. Use the search panel to find the skill flow that was created in the demo. In the example demo, this was created as '**GB Upsell Skill**' (it is listed below as a composite skill). Click the corresponding **ellipsis** icon to the right of the screen. Click **Delete this skill**. <br/> <img src="images/Prep-5-1.png" width="800" /><br/>

2. Remove the skill that was created using an OpenAPI file. During the preparation for this skill import, it was recommended to add a unique ID to the description attribute in the OpenAPI file. (In the example, 'GB081123' was added to the description attribute.) Use your unique ID to find the skill. Click the **ellipsis** icon and click **Delete this skill**. <br/> <img src="images/Prep-5-2.png" width="800" /><br/>

</details>

<br/>

### **AFTER EACH DEMO**

<details markdown="1">

<summary>Final cleanup</summary>

The watsonx Orchestrate environment used for the demo is shared by many users. After completing your demo, please take a few minutes to remove any skills or automations you created during the demo. Then, also remove the personal skills created during the demo preparation. Finally, remove the decision automation that was imported.

1. Click the **menu slider** icon and select **Skills**. Use the search panel to find the skill flow that was created in the demo. In the example demo, this was created as '**GB Upsell Skill**' (it is listed below as a composite skill). Expand the skill details to confirm you are the author. Click the corresponding **ellipsis** icon to the right of the screen. Click **Delete this skill**. <br/> <img src="images/Prep-6-1.png" width="800" /><br/>

2. Remove the skill that was created using an OpenAPI file. During the preparation for this skill import, it was recommended to add a unique ID to the description attribute in the OpenAPI file. (In the example, 'GB081123' was added to the description attribute.) Use your unique ID to find the skill. Expand the skill details to confirm you are the author. Click the **ellipsis** icon and click **Delete this skill**. <br/> <img src="images/Prep-6-2.png" width="800" /><br/>

3. Remove the **Product Upsell** skill that was created when the decision automation was published. Enter '**Product Upsell**' in the search panel, and expand the details to confirm you are the author. Click the **ellipsis** icon and click **Delete this skill**. <br/> <img src="images/Prep-6-3.png" width="800" /><br/>

4. Click the **menu slider** icon. Select **Automation builder**. <br/> <img src="images/Prep-6-4.png" width="800" /><br/>

5. Click the **ellipsis** icon on the **Product Upsell** card. Click **Delete** and confirm the deletion. <br/> <img src="images/Prep-6-5.png" width="250" /><br/>

</details>

Click [here](demo-script) to go to the **Demo script** on the next tab.
---
title: Low-code integration using AI
layout: preparation
banner: images/Low-code-integration-300Prep.jpg
overview: In this demo, you are going to synchronize data between Salesforce and Insightly cloud CRM. You need to have these services and endpoints created and all the credentials necessary to access them securely in the demo. <br/><br/> Both Salesforce and Insightly are CRM systems provided as a SaaS (i.e., they are hosted in the cloud). In this scenario, we will synchronize contact information data between both solutions.
product: Cloud Pak for Integration
capabilities: Low-code integration authoring; Mapping assistance
boxIntroPresentationUrl: https://ibm.box.com/s/2j47xs97ju9tiiq2s2b1s4v6j05st51a
boxPdfScript: https://ibm.box.com/s/qpm2oue1yw5i62urbwck1nboihvxfhvh
gitHubUrl: https://github.com/IBM/platinum-demo-code-low-code-integration.git
gitHubDir: platinum-demo-code-low-code-integration
topcategory: "### **DEMO INSTALLATION AND SETUP**"
---

{% include integration/integration-prepartion.md %}

<span id="installDemo"></span>

<details markdown="1">

<summary>4 - Set up Salesforce</summary>

You need a Salesforce developer account to use for testing. If you already have a Salesforce developer account, you can use that (start at step 2 below). If not, you can sign up for a free developer account by following step 1 below.


1. Go to <a href="https://developer.salesforce.com/signup" target="_blank" rel="noreferrer">Salesforce Developers</a>. Follow the prompts on the Saleforce pages to get your free developer account.<br/>

2. As soon as you have your account, go back to the <a href="https://login.salesforce.com/" target="_blank" rel="noreferrer">Salesforce log in page</a> and log in to your dev admin account.<br/><img src="images/Prep3.5.png" width="800" /><br/>

3. Click the **profile** icon (1) and save your Salesforce Login URL (2).<br/><img src="images/Prep3.6.png" width="800" /><br/>

4. In the same user profile menu, select **Settings**.<br/><img src="images/Prep3.7.png" width="800" /><br/>

5. Click **Reset My Security Token** in the **My Personal Information** (1) menu. Then, click **Reset Security Token** (2). A newly-generated security token will be emailed to you.<br/><img src="images/Prep3.8.png" width="800" /><br/>

6. Next, you will create an application representing App Connect Enterprise, and then retrieve the Consumer Key and Consumer Secret. Click the **cogwheel** icon (1) and then select **Setup** (2).<br/><img src="images/Prep3.9.png" width="800" /><br/>

7. In the navigator on the left-hand side, scroll to **PLATFORM TOOLS**, expand **Apps** (1), and click **App Manager** (2).<br/><img src="images/prep-image3.7.png" width="800" /><br/>

8. Click **New Connected App**.<br/><img src="images/prep-image3.8.png" width="800" /><br/>

9. Enter **App Connect** (1) as the **Connect App Name** and your email as the **Contact Email** (2). Mark **Enable OAuth Settings** (3).<br/><img src="images/prep-image3.9.png" width="800" /><br/>

10. Mark **Enable for Device Flow** (1). Now select **Manage user data via APIs (api)** (2) as the **Selected OAuth Scopes**. Click **Add** (3)<br/><img src="images/prep-image3.10.png" width="800" /><br/>

11. Click **Save**.<br/><img src="images/prep-image3.11.png" width="800" /><br/>

12. It will take approximately 10 minutes for the new connected app to register in Salesforce. Once it does, you should see **Manage Consumer Details** displayed. Click **Manage Consumer Details,** following any authentication directions.<br/><img src="images/Prep3.15.png" width="800" /><br/>

13. Save the **Consumer Key** and **Consumer Secret.**<br/><img src="images/salesforce-key-secret.png" width="800" /><br/>

Your Salesforce dev account is ready.

**[Go to top](#top)**
<br/>
</details>

<span id="setupInsightly"></span>

<details markdown="1">

<summary>5 - Set up Insightly</summary>

Next, let’s set up Insightly, a cloud-based customer relationship management (CRM) solution.

We will now create a trial account (15 days). After the trial period, you can migrate your trial account to a free account (with limited users).

1. Go to <a href="https://www.insightly.com/" target="_blank" rel="noreferrer">Insightly</a> and click **Try CRM Free**.<br/><img src="images/prep-insightly-1.png" width="800" /><br/>

2. Complete the form with your personal data to create a free Insightly account. Accept the **Terms of Service and Privacy Policy** and click **Create My Account**.<br/><img src="images/prep-insightly-2.png" width="800" /><br/>

3. Confirm your email address.<br/><img src="images/prep-insightly-3.png" width="800" /><br/><img src="images/prep-insightly-4.png" width="800" /><br/>

4. As soon as you click the link to confirm your email, you should see an initial Insightly screen asking basic information about your company.<br/><br/>Write **demo** (1), select **1-5** (2), select **IT Services** (3), and fill in any phone number (4), matching the screenshot below. Click **Let's go!** (5).<br/><img src="images/prep-image4.4.png" width="800" /><br/>

5. Close the **Invite your team** dialog.<br/><img src="images/prep-image4.5.png" width="800" /><br/>

6. You have an Insightly account. Let's get the API key to enable App Connect to authenticate when making API calls. Click the **Profile** (1) icon in Insightly and select **User Settings** (2).<br/><img src="images/prep-image4.6.png" width="800" /><br/>

7. Scroll down to the bottom of the page and copy the **API key**, which is a long string of characters.<br/><img src="images/prep-image4.7.png" width="800" /><br/>

9. On the **Free** plan tile, click **Select Plan**.<br/><img src="images/prep-image4.9.png" width="800" /><br/>

10. Click **OK** on the confirmation dialog box.

<br/>

Your Insightly account is ready to use.

<br/>

**[Go to top](#top)**

</details>

<span id="connectEndpoints"></span>

<details markdown="1">

<summary>6 - Connect Cloud Pak for Integration to your endpoints</summary>

Let’s configure our services endpoints in Cloud Pak for Integration.

1. Return the connectivity instructions from section 2.2, navigate to the **Cloud Pak Console** (1) tab and use the credentials (2) access the Platform Navigator.<br/><img src="images/prep-image209.png" width="800" /><br/><img src="images/prep-image210.png" width="800" /><br/><br/><inline-notification text="If you are using Chrome, you may see a certificate error when accessing the page. To bypass this, type <strong>thisisunsafe</strong> and press return."></inline-notification><br/>

2. Click **ace-designer-demo** in the **Integrations** section.
<br/><img src="images/Prep4.2.png" width="800" /><br/>

3. Click the **Catalog** icon.<br/><img src="images/Prep4.3.png" width="800" /><br/>

4. This is the list of the available connectors.<br/><img src="images/Prep4.4.png" width="800" /><br/>Now configure the Salesforce connector.<br/><br/>

5. Search for **salesforce** (1) and click **Connect** (2).<br/><img src="images/Prep4.5.png" width="800" /><br/>

6. Enter your Salesforce **Login URL**.<br/><br/><inline-notification text="You must enter <strong>‘https://’</strong> in front of the Saleforce Login URL you saved earlier. The connection will not work if you just copy/paste the URL."></inline-notification><br/><img src="images/Prep4.6.png" width="800" /><br/>

7. Input your Salesforce **Username** (1). Fill in the connector's **Password** field (2) by concatenating your Salesforce **Password** and the **Security token** received via email.<br/><br/>For example, if your Salesforce password is ‘myGreatPassword’ and your Salesforce security token is ‘2325jsdhew4312hs534dh’ then enter ‘myGreatPassword2325jsdhew4312hs534dh’ in the **Password** field.<br/><img src="images/Prep4.7.png" width="800" /><br/>

8. Input Salesforce’s **Consumer Key** as **Client ID** (1) and **Secret** as **Client Secret** (2), respectively, in the connector account UI. Click **Connect** (3).<br/><img src="images/Prep4.8.png" width="800" /><br/>

9. Search for **insightly** and click **Connect**.<br/><img src="images/prep-image5.6.png" width="800" /><br/>

10. Paste your **API key** (1) in the **API key** field. Keep **v3.1** (2) in the **API version** field. Click **Connect** (3).<br/><img src="images/prep-image5.7.png" width="800" /><br/>

Your environment is ready to demo.


**[Go to top](#top)**
<br/>

</details>
<span id="afterEachDemo"></span>

## **AFTER EACH DEMO**

<details markdown="1">

<summary>Reset the environment</summary>

After practicing the demo you will need to reset the environment.

1. Delete any contacts that were added in Insightly.

2. Reinstall Cloud Pak for Integration to ensure you have a clean environment. Follow <strong>step 1</strong> and <strong>step 2</strong> above.

3. Reconnect the end points, following <strong>step 5</strong> to your endpoints above.

<inline-notification text="Attempting to reuse the same environment may result in inconsistencies between your environment and what is shown in the script and screenshots."></inline-notification>


**[Go to top](#top)**
<br/>

</details>

Click [here](/300-integration-low-code-integration-using-ai/demo-script) to go to the **Demo script** on the next tab.

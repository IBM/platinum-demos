---
title: Managing events and APIs from a unified environment <br/>300-level live demo
layout: preparation
banner: images/managing-events-apis-preparation-banner-10-27-22.jpg
overview: This demo compares exposing data from an airport’s flight information system over REST APIs and over an event stream. A flight information board will get flight data using a traditional REST API. We will then show how a new event stream for flight information on can be easily made available to the developers of an airline mobile application. This will enable the mobile app to receive flight delays the moment they occur, resulting in an improved and more marketable experience.
product: Cloud Pak for Integration
capabilities: API and event management; Event streams
boxIntroPresentationUrl: https://ibm.box.com/s/9bzas80jz80s3xechdl642ag80f4qjuz
boxPdfScript: https://ibm.box.com/s/6siayii6qbus0v8m5pi293ntgphzbwh7
gitHubUrl: https://github.com/IBM/platinum-demo-code-eem.git
gitHubDir: platinum-demo-code-eem/scripts/
topcategory: "### **DEMO INSTALLATION AND SETUP**"
---

{% include integration/integration-prepartion.md %}

<span id="installDemo"></span>

<details markdown="1">

<summary>4 - Install and configure API Connect, Event Streams and Event Endpoint Management</summary>

1. In this directory you will see the following two files required to set up the demo:<br/>

   **setup-software.sh** - Sets up EEM and Event Streams<br/>
   **setup-app.sh** - Sets up the Flight Board application

1. These scripts require a utility called jq. If you don't have it, follow the installation steps described in this <a href="https://jqlang.github.io/jq/download/" target="_blank" rel="noreferrer">page</a>, based on your operating system. 

1. Run the following command:<br/>
   ```
       ./setup-software.sh cp4i
   ```
    This could take 30-45 minutes to complete. It will be complete when API Connect, Event Endpoint Management and IBM Event Streams have been installed.<br/><br/>The Platform Navigator and Event Streams UI endpoints are displayed at the end of the script for convenience. These will be used later.<br/>

2. Navigate to the Event Stream UI outputted in the previous step.
<br/><img src="images/prep-image201.png" width="800" /><br/>

3. Log in with the username **admin** and the password you created in step 2.5. This opens **IBM Event Steams**.<br/><img src="images/prep-image202.png" width="800" /><br/>

4. Select the **Topics** (1) icon, then click **Create topic** (2).<br/><img src="images/prep-image203.png" width="800" /><br/>

5. Specify **flight-delays** (1) as the **Topic name** and select **Next** (2).<br/><img src="images/prep-image204.png" width="800" /><br/>

6. Click **Next**.<br/><img src="images/prep-image205.png" width="800" /><br/>

7. Click **Next**.<br/><img src="images/prep-image206.png" width="800" /><br/>

8. Click **Create topic**.<br/><img src="images/prep-image207.png" width="800" /><br/>

9. Click on **Connect to this cluster**. <br/><img src="images/prep-image207-1.png" width="800" /><br/>

10. Click on **Internal** (1) and copy the URL (2). <br/><img src="images/prep-image207-2.png" width="800" /><br/>

11. Next, open a browser window and go to the **Event Endpoint Management URL** from step 4.1.<br/><img src="images/prep-image208-1.png" width="800" /><br/><br/><inline-notification text="If you are using Chrome, you may see a certificate error when accessing the page. To bypass this, type <strong>thisisunsafe</strong> and press return."></inline-notification><br/><br/>

12. Log in with the username **eem-admin** and the password **passw0rd**. <br/><img src="images/prep-image208-2.png" width="800" /><br/>

13. Click on the **Topics** (1) icon and select **Add topic** (2). <br/><img src="images/prep-image208-3.png" width="800" /><br/>

14. Click **Add new cluster**. <br/><img src="images/prep-image208-4.png" width="800" /><br/>

15. Enter **ibm-event-streams** (1) for the cluster name and click **Next** (2). <br/><img src="images/prep-image208-5.png" width="800" /><br/>

16. Paste the URL from step 10 into the text box (1) and click **Next** (2). <br/><img src="images/prep-image208-6.png" width="800" /><br/>

17. Click **Add cluster**. <br/><img src="images/prep-image208-7.png" width="800" /><br/>

18. Check **ibm-event-streams** (1) and click **Next**. <br/><img src="images/prep-image208-8.png" width="800" /><br/>

19. Check **flight-delays** (1) and click **Add Topic**. <br/><img src="images/prep-image208-9.png" width="800" /><br/>

20. Click on **flight-delays**. <br/><img src="images/prep-image208-10.png" width="800" /><br/>

21. Click on **Export AsyncAPI for IBM API Connect**. <br/><img src="images/prep-image208-11.png" width="800" /><br/>

22. Next, open a browser window and go to the **Platform Navigator URL** from step 4.1.<br/><img src="images/prep-image208.png" width="800" /><br/><br/><inline-notification text="If you are using Chrome, you may see a certificate error when accessing the page. To bypass this, type <strong>thisisunsafe</strong> and press return."></inline-notification><br/><br/>

23.	Return the connectivity instructions from section 2.2, navigate to the **Cloud Pak Console** (1) tab and use the credentials (2) access the Platform Navigator.<br/><img src="images/prep-image209.png" width="800" /><br/><img src="images/prep-image210.png" width="800" /><br/>

24. Click **Design APIs**. <br/><img src="images/prep-image211.png" width="800" /><br/>

25. If a login screen is presented, select **Common Services User Registry** <br/><img src="images/prep-image212.png" width="800" /><br/>

26. Click **Manage catalogs** (2).<br/><img src="images/prep-image213.png" width="800" /><br/>

27. Open **Sandbox**.<br/><img src="images/prep-image214.png" width="800" /><br/>

28. Select the **Consumers** (1) tab, click **Add** (2) and select **Create organization** (3).<br/><img src="images/prep-image215.png" width="800" /><br/>

29. Fill in **IBM** as the title.<br/><img src="images/prep-image216.png" width="800" /><br/>

30. Scroll down to the Owner section, set the type of user to **New user** (1), fill in the following details and click **Create**.

    | FIELD | VALUE |
    | ------ | ------- |
    | **Username:** | devuser |
    | **Email:** | devuser@ibmapiconnect.com |
    | **First name:** | Dev |
    | **Last name:** | User |
    | **Password:** | AP1Connect! | 
    
    <img src="images/prep-image217.png" width="800" />
  

31. A new consumer organization is created.
<br/><img src="images/prep-image218.png" width="800" /><br/>

32. Click on the **Catalog settings** (1) tab, **Gateway services** (2) and **Edit** (3). <br/><img src="images/prep-image232.png" width="800" /><br/>

33. Check the **EEM Event Gateway** (1) and click **Save** (2). <br/><img src="images/prep-image233.png" width="800" /><br/>

Congratulations! Your portal developer user has been created and you are ready for the demo.

<br/>

**[Go to top](#top)**

</details>

<span id="installFlightBoard"></span>

<details markdown="1">

<summary>5 - Install the Flight Board app</summary>

1. Run the following commands to install the Flight Board app:<br/>
    ```
      cd platinum-demo-code-eem/scripts/
    ```
    ```
      ./setup-app.sh cp4i
    ```

    It takes a few minutes to configure access and generate credentials for the flight board app.<br/>

2. Open a browser window for each of the URLs that are created: one is for the **FlightBoard** app and the other is for ** FlightBoard Manager**. <br/><img src="images/Prep6.2.png" width="800" /><br/>

**[Go to top](#top)**

</details>


## **PREPARE TO GIVE THE DEMO**

<details markdown="1">

<summary>Open these resources before starting demonstration</summary>

1. Download the **Flight-Delay.avsc** schema from <a href="https://raw.githubusercontent.com/IBM/platinum-demo-code-eem/main/resources/Flight-Delays.avsc" target="_blank">here</a>. You will need this for Action 4.1.5 of the demonstration.<br/><br/>

2. Open the following tabs in a web browser:<br/>
• IBM Event Streams<br/>
• IBM Cloud Pak for Integration Platform Navigator<br/>
• The Flight Board<br/>
• The Flight Board Manager<br/>
• IBM API Connect Developer Portal
   <inline-notification text="These URLs are provided as the output from the setup-software.sh and setup-app.sh scripts. For convenience you can also get the URLs for the above by running the following command from the eem-demo/scripts folder:"></inline-notification>
   ```
   ./get-urls.sh
   ```

3. Click **Sign in** to log in to the Developer Portal using the devuser account you created in the preparation steps above.<br/><img src="images/prep-demo-2.png" width="800" /><br/>

4. Enter the **Username** and **Password**. Click **Sign in**.<br/><img src="images/prep-demo-3.png" width="800" /><br/>

5. Prepare a terminal by logging into the OpenShift cluster with the “Copy login command” option from the OpenShift user interface, then executing it within the terminal window.<br/><img src="images/prep-demo-4.png" width="800" /><br/>

**[Go to top](#top)**

</details>

Click [here](/300-integration-managing-events-and-apis-from-unified-environment/demo-script) to go to the **Demo script** on the next tab.
---
title: Using event automation to create Kafka streams from IBM MQ <br/>300-level live demo
layout: preparation
banner: images/Using Event Automation with MQ banner 300 Prep 12-13-23.jpg
overview: In this demo we will see how Focus Corp, an online retailer, uses real-time MQ transaction data to capitalize on time-sensitive revenue opportunities. <br/><br/>This demo builds on **Detecting time-critical situations using Event Automation** adding steps that show the IBM MQ to Kafka connectivity. 
product: IBM Event Automation, Cloud Pak for Integration
capabilities: Event Streaming, Event Endpoint Management, Event Processing and IBM MQ
boxIntroPresentationUrl: https://ibm.box.com/s/pdidbqniosqelx6d77lvetmqd9u7gwp4
boxPdfScript: https://ibm.box.com/s/da97h1zq1oesc4sjmwa1yadran3vp70z
customerVideo: https://ibm.box.com/s/efjqukq1zsffphuvhoi93lpc0i65iqzm
gitHubUrl: https://github.com/IBM/platinum-demo-code-event-automation.git
gitHubDir: platinum-demo-code-event-automation
topcategory: "### **DEMO INSTALLATION AND SETUP**"
---

{% include integration/integration-prepartion.md %}

<span id="installDemo"></span>

<details markdown="1">

<summary>4 - Install the demo and access the Web UI</summary>

1. To deploy the demo run:

   ```./deploy.sh```

   This will automatically deploy the resources into the CP4I namespace.


2. The deployment will take approximately 20-45 minutes to install. Wait for the deployment to complete. The URL and credentials will be shown once the installation is complete. 

   <img src="images/prep-401.png" width="800" />

   If you need to recall this information please use the getURL.sh command: 

   ```getURL.sh```

   <img src="images/prep-402.png" width="800" />

3. In preparation for running the demo open the IBM MQ, Event Streams, Event Endpoint Management and Event Processing consoles using the supplied credentials. 

4. When opening the IBM MQ console for the first time you will be asked to provide a new password as you are using a temporary password. Provide a new password and click **Submit**. Once you have changed the password the `getURL.sh` script will continue to output the out of date temporary password.<br/><img src="images/prep-501.png" width="800" /><br/>

5. We have also created a scratch pad that you may find useful while running the demo. It contains space for all the username and passwords outputted above, and the text that you need to copy and paste within the demo. You can find this file [here](../300-integration-event-automation-common/scratch-pad).
<br/>

Your have completed the demo setup.

<br/>

**[Go to top](#top)**

<br/><br/>

</details>
<hr/>
Click [here](demo-script) to go to the **Demo script** on the next tab.

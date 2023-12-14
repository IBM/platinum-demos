---
title: Using event automation to create Kafka streams from IBM MQ <br/>300-level live demo
layout: preparation
banner: images/Using Event Automation with MQ banner 300 Prep 12-13-23.jpg
overview: In this demo we will see how Focus Corp, an online retailer, uses real-time MQ transaction data to capitalize on time-sensitive revenue opportunities.
product: IBM Event Automation, Cloud Pak for Integration
capabilities: Event Streaming, Event Endpoint Management, Event Processing and IBM MQ
boxIntroPresentationUrl: https://ibm.box.com/shared/static/fr89lmewzkqmnu97vzscw1ykgls4c6j4.pptx
boxPdfScript: https://ibm.box.com/shared/static/d40f5v5oib8vkmblykol5rrep0936nbi.pdf
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

3. In preparation for running the demo open the Event Streams, Event Endpoint Management and Event Processing consoles using the supplied credentials. We have also created a scratch pad that you may find useful while running the demo. It contains space for all the username and passwords outputted above, and the text that you need to copy and paste within the demo. You can find this file [here](../300-integration-event-automation-common/scratch-pad).
<br/>

Your have completed the demo setup.

<br/>

**[Go to top](#top)**

<br/><br/>

</details>
<hr/>
Click [here](demo-script) to go to the **Demo script** on the next tab.

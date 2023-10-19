---
title: Tapping into IBM MQ communication and streaming messages to IBM Event Automation <br/>300-level live demo
layout: preparation
banner: images/temp-banner.jpg
overview: overviewtest
product: producttest
capabilities: capabilitiestest
boxIntroPresentationUrl: https://somewhere.com
boxPdfScript: https://somewhere2.com
gitHubUrl: https://github.com/IBM/platinum-demo-code-event-automation.git
gitHubDir: platinum-demo-code-event-automation
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

3. In preparation for running the demo open the MQ, Event Streams, Event Endpoint Management and Event Processing consoles using the supplied credentials. 
<br/>

Your have completed the demo setup.

<br/>

**[Go to top](#top)**

<br/><br/>

</details>
<hr/>
Click [here](demo-script) to go to the **Demo script** on the next tab.

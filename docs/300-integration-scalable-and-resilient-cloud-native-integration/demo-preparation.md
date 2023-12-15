---
title: Scalable and resilient cloud-native integration <br/>300-level live demo
layout: preparation
banner: images/scalable-resilient-integration-banner-PREP-5-25-23.jpg
overview: In this demo we will see how Focus Bank maintains, enhances and elastically scales its IBM MQ and IBM App Connect Enterprise cloud-native integration.
product: Cloud Pak for Integration
capabilities: Declarative product upgrade; IBM streaming queues; Pipeline deployment; Horizontal scalability and continuous availability
boxIntroPresentationUrl: https://ibm.box.com/s/quzwd2gvn7zbo9oo19xi1o05gtdlvmwj
boxPdfScript: https://ibm.box.com/s/jsz9v4mva1jdz7gg1fls3xk4rhgiezvh
customerVideo: ""
gitHubUrl: https://github.com/IBM/platinum-demo-code-cloud-native-integration.git
gitHubDir: platinum-demo-code-cloud-native-integration
topcategory: "### **DEMO INSTALLATION AND SETUP**"
---

{% include integration/integration-prepartion.md %}

<span id="installDemo"></span>

<details markdown="1">

<summary>4 - Install the demo and access the Web UI</summary>

1. To deploy the demo run:

   ```./deploy.sh```

   If you didn’t use CP4I as the project name, you can append your custom project name to the deploy command. For example:

   ```deploy.sh custom-cp4i```

   <br/>

2. The deployment will take approximately 10 minutes to install. To wait for the deployment to complete and receive the web console URL run the command:

   ```./getURL.sh```

   If you didn’t use CP4I as the project name, you can append your custom project name to the getURL command. For example:

   ```getURL.sh custom-cp4i```

<br/>

Your have completed the demo setup.

<br/>

**[Go to top](#top)**

<br/><br/>

</details>
<hr/>
Click [here](demo-script) to go to the **Demo script** on the next tab.
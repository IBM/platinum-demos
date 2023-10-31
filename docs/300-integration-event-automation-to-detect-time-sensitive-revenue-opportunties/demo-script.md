---
title: Tapping into IBM MQ communication and streaming messages to IBM Event Automation <br/>300-level live demo
layout: demoscript
banner: images/temp-banner.jpg
browsingselfservice: 2
nocodeeditor: 3
outputtomarketing: 4
---

<span id="top"></span>

<details markdown="1">

<summary>Introduction</summary>

Today we will see how Focus Corp, an online retailer, uses real-time transaction data to capitalize on time-sensitive revenue opportunities. 


Focus Corp has a goal of driving more revenue from its first-time customers. The marketing team want to send a high-value promotion to first-time customers immediately after a large initial order.


Focus Corp use IBM MQ to coordinate transactions between its order management system and its payments gateway. We’ll see how these transactions can be harvested to generate a Apache Kafka event stream and exposed to other teams for reuse. The marketing team will use this event stream to precisely identify which customers to send the promotional offer to.


Let’s get started!

(Demo intro slides <a href="https://ibm.box.com/s/quzwd2gvn7zbo9oo19xi1o05gtdlvmwj" target="_blank" rel="noreferrer">here</a>)

(Printer-ready PDF of demo script <a href="https://ibm.box.com/s/jsz9v4mva1jdz7gg1fls3xk4rhgiezvh" target="_blank" rel="noreferrer">here</a>)

<br/><br/>

</details>

<p/>

<details markdown="1">

<summary>1 - Creating an event stream from a message queue</summary>

Focus Corp’s integration team exposes the enterprise’s data using event streams. This allows application teams to subscribe to the data without impacting the backend system, decoupling development, and lowering risks. The integration team have received a request to access customer orders. The order management system and its payment gateway exchange customer orders over IBM MQ. The integration team will tap into this communication, clone each of the orders and publish into an event stream.

<br/>

| **1.1** | **Configure a new queue in IBM MQ for the cloned order messages** |
| :--- | :--- |
| **Narration** | Focus Corp’s integration team log into the IBM MQ console. They create a new queue called TO.KAFKA to store the cloned order messages before they are published to Apache Kafka. |
| **Action** &nbsp; 1.1.1 | In the IBM MQ console click on **manage**.<br/> <img src="images/1-1-MQ-Console.png" width="800" /> |
| **Action** &nbsp; 1.1.2 | Click on the **Create** button to start creating the new queue.<br/> <img src="images/1-1-MQ-Console-CreateQ-Button.png" width="800" /> |
| **Action** &nbsp; 1.1.3 | Click on the **Local** tile.<br/> <img src="images/1-1-MQ-Console-LocalQ.png" width="800" /> |
| **Action** &nbsp; 1.1.4 | Fill in **TO.KAFKA** (1) as the queue name and click **Create** (2).<br/> <img src="images/1-1-MQ-Console-CreateQ.png" width="800" /> |
| **Action** &nbsp; 1.1.4 | See the newly created queue in the table.<br/> <img src="images/1-1-MQ-Console-SeeNewQ.png" width="800" /> |

| **1.2** | **Configure IBM MQ to clone the orders** |
| :--- | :--- |
| **Narration** | Next the integration team identify the queue being used between the order management system and its payment gateway. They update the configuration to specify TO.KAFKA as the streaming queue. This causes IBM MQ to clone all new messages put to the queue. Once saved the new configuration is live, and the integration team can see cloned order messages stacking up in the TO.KAFKA queue. |
| **Action** &nbsp; 1.2.1 | Click on the **PAYMENT.REQ** queue.<br/> <img src="images/1-2-ClickQ.png" width="800" /> |
| **Action** &nbsp; 1.2.2 | Click on a message (1), scroll down (2) and show the order details (3).<br/> <img src="images/1-2-ShowMessage.png" width="800" /> |
| **Action** &nbsp; 1.2.3 | Click **Close**.<br/> <img src="images/1-2-CloseMessage.png" width="800" /> |
| **Action** &nbsp; 1.2.4 | Click the **Actions** button and select **View configuration**.<br/> <img src="images/1-2-ViewConfig.png" width="800" /> |
| **Action** &nbsp; 1.2.5 | Click the **Edit** button.<br/> <img src="images/1-2-EditConfig.png" width="800" /> |
| **Action** &nbsp; 1.2.6 | Select the **Storage** (1) section, in the Streaming queue name field type **TO.KAFKA** (2), and click **Save** (3).<br/> <img src="images/1-2-SaveConfig.png" width="800" /> |
| **Action** &nbsp; 1.2.7 | Scroll to the top of the page (1), and select **Manage** (2).<br/> <img src="images/1-2-ViewQueues.png" width="800" /> |
| **Action** &nbsp; 1.2.8 | Click on the **TO.KAFKA** (1) queue.<br/> <img src="images/1-2-ViewStreamedMessages.png" width="800" /> |
| **Action** &nbsp; 1.2.9 | View the order messages building up on the queue.<br/> <img src="images/1-2-ViewClonedMessages.png" width="800" /> |

| **1.3** | **Define the orders event stream** |
| :--- | :--- |
| **Narration** | Next the integration team open the IBM Event Streams console to create the orders stream where the messages will be published. They have options to customize the replication and retention settings that control the redundancy and volume of data held.  |
| **Action** &nbsp; 1.3.1 | In the IBM Event Streams console click on the **Create a topic** tile.<br/> <img src="images/1-3-CreateTile.png" width="800" /> |
| **Action** &nbsp; 1.3.2 | Specify **ORDERS** (1) as the Topic name, and click **Next** (2).<br/> <img src="images/1-3-TopicName.png" width="800" /> |
| **Action** &nbsp; 1.3.3 | Leave the number of partitions as the default and click **Next** (1).<br/> <img src="images/1-3-Partitions.png" width="800" /> |
| **Action** &nbsp; 1.3.4 | Leave the retention settings as the default and click **Next** (1).<br/> <img src="images/1-3-Retention.png" width="800" /> |
| **Action** &nbsp; 1.3.5 | Leave the replication settings as the default and click **Create topic** (1).<br/> <img src="images/1-3-CreateTopic.png" width="800" /> |

| **1.4** | **Configure the IBM MQ to IBM Event Streams bridge** |
| :--- | :--- |
| **Narration** | Next the integration team open the Red Hat OpenShift console to configure the MQ to IBM Event Stream bridge. The bridge is supplied and supported by IBM and built on the Apache Kafka connector framework. The configuration includes the connectivity details for both IBM MQ and IBM Event Streams. Once created, the connector reads messages from the TO.KAFKA queue and publishes to the order stream. |
| **Action** &nbsp; 1.4.1 | In the Red Hat OpenShift console click on the **+** button in the top right.<br/> <img src="images/1-4-ClickPlus.png" width="800" /> |
| **Action** &nbsp; 1.4.2 | Copy and paste (1) the below into the Red Hat OpenShift console, click **Create** (2). <br/> <br/><inline-code code="apiVersion: eventstreams.ibm.com/v1beta2<br/>kind: KafkaConnector<br/>metadata:<br/>&nbsp;&nbsp;name: mq-connector<br/>&nbsp;&nbsp;namespace: cp4i<br/>&nbsp;&nbsp;labels:<br/>&nbsp;&nbsp;&nbsp;&nbsp;eventstreams.ibm.com/cluster: kafka-connect-cluster<br/>spec:<br/>&nbsp;&nbsp;class: com.ibm.eventstreams.connect.mqsource.MQSourceConnector<br/>&nbsp;&nbsp;tasksMax: 1<br/>&nbsp;&nbsp;config:<br/>&nbsp;&nbsp;&nbsp;&nbsp;# the Kafka topic to produce to<br/>&nbsp;&nbsp;&nbsp;&nbsp;topic: ORDERS<br/>&nbsp;&nbsp;&nbsp;&nbsp;# the MQ queue to get messages from<br/>&nbsp;&nbsp;&nbsp;&nbsp;mq.queue: TO.KAFKA<br/>&nbsp;&nbsp;&nbsp;&nbsp;# connection details for the queue manager<br/>&nbsp;&nbsp;&nbsp;&nbsp;mq.queue.manager: orders<br/>&nbsp;&nbsp;&nbsp;&nbsp;mq.connection.name.list: orders-ibm-mq(1414)<br/>&nbsp;&nbsp;&nbsp;&nbsp;mq.channel.name: SYSTEM.DEF.SVRCONN<br/>&nbsp;&nbsp;&nbsp;&nbsp;# format of the messages to transfer<br/>&nbsp;&nbsp;&nbsp;&nbsp;mq.message.body.jms: true<br/>&nbsp;&nbsp;&nbsp;&nbsp;mq.record.builder: com.ibm.eventstreams.connect.mqsource.builders.JsonRecordBuilder<br/>&nbsp;&nbsp;&nbsp;&nbsp;key.converter: org.apache.kafka.connect.storage.StringConverter<br/>&nbsp;&nbsp;&nbsp;&nbsp;value.converter: org.apache.kafka.connect.json.JsonConverter<br/>&nbsp;&nbsp;&nbsp;&nbsp;# whether to send the schema with the messages<br/>&nbsp;&nbsp;&nbsp;&nbsp;key.converter.schemas.enable: false<br/>&nbsp;&nbsp;&nbsp;&nbsp;value.converter.schemas.enable: false</code><br/>"></inline-code><img src="images/1-4-Paste.png" width="800" /> |

| **1.5** | **View the orders in the stream** |
| :--- | :--- |
| **Narration** | The integration team return to the IBM Event Streams console to view the order stream. They see the events since they configured the streaming queue in IBM MQ. |
 **Action** &nbsp; 1.5.1 | Return to the IBM Event Streams console and show that the messages are being streamed into the topic. Click the topic icon (1), and select the **ORDERS** (2) topic. <br/> <br/><img src="images/1-5-NavigateToTopic.png" width="800" /> |
 **Action** &nbsp; 1.5.2 | All of the messages since the MQ streaming queue configuration update will be available. Click on one to view the details. <br/> <br/><img src="images/1-5-ViewEvent.png" width="800" /> |

| **1.6** | **Importing the streams into IBM Event Endpoint Management** |
| :--- | :--- |
| **Narration** | Next the integration team open the IBM Event Endpoint Management console. The console supports two usages, one for teams publishing event streams, and a second for those consuming. The integration team import the order and customer streams by discovering the topic on IBM Event Streams.  |
| **Action** &nbsp; 1.6.1 | In the IBM Event Endpoint Management console click on the **topic** (1) icon and select the **Add topic** (2) button. <br/> <img src="images/1-6-ViewTopics.png" width="800" /> |
| **Action** &nbsp; 1.6.2 | No Apache Kafka clusters have been configured, the IBM Event Streams environment will be added. Click **Add new cluster**. <br/> <img src="images/1-6-AddClusterWizard.png" width="800" /> |
| **Action** &nbsp; 1.6.3 | Specify **IBM Event Streams** (1) for the cluster name and click **Next** (2). <br/> <img src="images/1-6-ClusterName.png" width="800" /> |
| **Action** &nbsp; 1.6.4 | Specify **ademo-es-kafka-bootstrap.cp4i.svc:9095** (1) for the servers and click **Next** (2). <br/> <img src="images/1-6-ClusterAddress.png" width="800" /> |
| **Action** &nbsp; 1.6.5 | Check the **Accept all certificates** (1) box and click **Next** (2). <br/> <img src="images/1-6-ClusterCert.png" width="800" /> |
| **Action** &nbsp; 1.6.6 | Specify **es-admin** (1) for the username, the password (2) value was outputted in the preparation section, and click **Next** (3). <br/> <img src="images/1-6-ClusterCredentials.png" width="800" /> |
| **Action** &nbsp; 1.6.7 | Select **IBM Event Streams** (1) and click **Next** (2). <br/> <img src="images/1-6-ClusterSelection.png" width="800" /> |
| **Action** &nbsp; 1.6.8 | Check **CUSTOMERS** (1) and **ORDERS** (2), and click **Add topic** (2). <br/> <img src="images/1-6-SelectTopics.png" width="800" /> |

| **1.7** | **Importing the streams into IBM Event Endpoint Management** |
| :--- | :--- |
| **Narration** | Next the integration team describe the order and customer streams, providing a description and example message. These topics can then be published for subscribers.  |
| **Action** &nbsp; 1.7.1 | Click on the **CUSTOMERS** (1) topic. <br/> <img src="images/1-7-SelectCustomerTopic.png" width="800" /> |
| **Action** &nbsp; 1.7.2 | Click on the **Edit information** (1) button. <br/> <img src="images/1-7-EditCustomer.png" width="800" /> |
| **Action** &nbsp; 1.7.3 | Enter **Events from the customer service system when a customer contacts the help portal.** (1) as the description. <br/> <img src="images/1-7-CustomerDescription.png" width="800" /> |
| **Action** &nbsp; 1.7.4 | Scroll down and enter **customer** (1) as a tag and **customerservice@focus.corp** as the contact email. <br/> <img src="images/1-7-CustomerContact.png" width="800" /> |
| **Action** &nbsp; 1.7.5 | Select the **Event information** tab, scroll down to the sample message text box (2) and copy the content from below, and click **Save** (3). <br/> <br/><inline-code code="{<br/>&nbsp;&nbsp;&quot;customerid&quot;: &quot;acb3eb65-98a1-45c2-84d4-f5df157862b4&quot;,<br/>&nbsp;&nbsp;&quot;customername&quot;: &quot;Emilio Quitzon&quot;,<br/>&nbsp;&nbsp;&quot;registered&quot;: &quot;2023-10-24 19:20:35.638&quot;<br/>}"></inline-code> <img src="images/1-7-SampleCustomer.png" width="800" /> |
| **Action** &nbsp; 1.7.6 | Select the **Manage** (1) tab and click on the **Publish topic +** (2) button. <br/> <img src="images/1-7-ManageCustomer.png" width="800" /> |
| **Action** &nbsp; 1.7.7 | Check the **production** (1) gateway group and click on **Publish topic** (2). <br/> <img src="images/1-7-PublishCustomer.png" width="800" /> |
| **Action** &nbsp; 1.7.8 | Click on the **ORDERS** (1) topic. <br/> <img src="images/1-7-SelectOrderTopic.png" width="800" /> |
| **Action** &nbsp; 1.7.9 | Click on the **Edit information** (1) button. <br/> <img src="images/1-7-EditOrder.png" width="800" /> |
| **Action** &nbsp; 1.7.10 | Enter **Events from the Focus Corp order management system. An event will be emitted for every new order that is made.** (1) as the description. <br/> <img src="images/1-7-OrderDescription.png" width="800" /> |
| **Action** &nbsp; 1.7.11 | Scroll down and enter **order** (1) as a tag and **order@focus.corp** as the contact email. <br/> <img src="images/1-7-OrderContact.png" width="800" /> |
| **Action** &nbsp; 1.7.12 | Select the **Event information** tab, scroll down to the sample message text box (2) and copy the content from below, and click **Save** (3). <br/> <br/><inline-code code="{<br/>&nbsp;&nbsp;&quot;quantity&quot;: 9,<br/>&nbsp;&nbsp;&quot;price&quot;: 197.09,<br/>&nbsp;&nbsp;&quot;customerid&quot;: &quot;a7d1586b-ced1-462f-9e44-14e9e5013540&quot;,<br/>&nbsp;&nbsp;&quot;description&quot;: &quot;Composite Oversize 28in Tennis Racket&quot;,<br/>&nbsp;&nbsp;&quot;id&quot;: &quot;1eba7af9-b748-4754-b750-3459e589dccf&quot;,<br/>&nbsp;&nbsp;&quot;region&quot;: &quot;EMEA&quot;,<br/>&nbsp;&nbsp;&quot;ordertime&quot;: &quot;2023-10-24 19:26:04.839&quot;,<br/>&nbsp;&nbsp;&quot;customer&quot;: &quot;Reed McKenzie DDS&quot;<br/>}"></inline-code> <img src="images/1-7-SampleOrder.png" width="800" /> |
| **Action** &nbsp; 1.7.13 | Select the **Manage** (1) tab and click on the **Publish topic +** (2) button. <br/> <img src="images/1-7-ManageOrder.png" width="800" /> |
| **Action** &nbsp; 1.7.14 | Check the **production** (1) gateway group and click on **Publish topic** (2). <br/> <img src="images/1-7-PublishCustomer.png" width="800" /> |

<br/>

**[Go to top](#place1)**

<br/><br/>

</details>

<p/>

{% include integration/event-automation-common.md %}

<details markdown="1">

<summary>Summary</summary>

<br/>

In this demo we showed how ...


Thank you for attending today’s presentation.


**[Go to top](#place1)**

<br/><br/>

</details>
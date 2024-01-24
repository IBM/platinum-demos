---
title: Using event automation to create Kafka streams from IBM MQ <br/>300-level live demo
layout: demoscript
banner: images/Using Event Automation with MQ banner 300 Script 12-13-23.jpg
browsingselfservice: 2
nocodeeditor: 3
outputtomarketing: 4
---

<span id="top"></span>

<details markdown="1">

<summary>Introduction</summary>

Today we will see how Focus Corp, an online retailer, uses real-time transaction data to capitalize on time-sensitive revenue opportunities. 


Focus Corp has a goal of driving more revenue from its first-time customers. The marketing team want to send a high-value promotion to first-time customers immediately after a large initial order.


Focus Corp uses IBM MQ to coordinate transactions between its order management system and its payments gateway. We’ll see how these transactions can be harvested to generate an Apache Kafka event stream and exposed to other teams for reuse. The marketing team will use these event streams to precisely identify when, and to which customers, to send its highest-value promotional offers.


Let’s get started!

(Demo intro slides <a href="https://ibm.box.com/s/pdidbqniosqelx6d77lvetmqd9u7gwp4" target="_blank" rel="noreferrer">here</a>)

(Printer-ready PDF of demo script <a href="https://ibm.box.com/s/da97h1zq1oesc4sjmwa1yadran3vp70z" target="_blank" rel="noreferrer">here</a>)

<br/><br/>

</details>

<p/>

<details markdown="1">

<summary>1 - Creating an event stream from a message queue</summary>

Focus Corp’s integration team exposes the enterprise’s data using event streams. This allows application teams to subscribe to the data without impacting the backend system, decoupling development, and lowering risks. The integration team has received a request to access customer orders. The order management system and its payment gateway exchange customer orders over IBM MQ. The integration team will tap into this communication, clone each of the orders and publish the messages into an event stream.

<br/>

| **1.1** | **Configure a new queue in IBM MQ for the cloned order messages** |
| :--- | :--- |
| **Narration** | Focus Corp’s integration team logs into the IBM MQ console. They create a new queue called TO.KAFKA to store the cloned order messages before they are published to Apache Kafka. |
| **Action** &nbsp; 1.1.1 | In the IBM MQ console, click on **Manage** (1) and **Queues** (2).<br/> <img src="images/1-1-MQ-Console.png" width="800" /> |
| **Action** &nbsp; 1.1.2 | Define a new queue by clicking on the **Create** button.<br/> <img src="images/1-1-MQ-Console-CreateQ-Button.png" width="800" /> |
| **Action** &nbsp; 1.1.3 | Click on the **Local** tile.<br/> <img src="images/1-1-MQ-Console-LocalQ.png" width="800" /> |
| **Action** &nbsp; 1.1.4 | Fill in **TO.KAFKA** (1) as the queue name and click **Create** (2).<br/> <img src="images/1-1-MQ-Console-CreateQ.png" width="800" /> |
| **Action** &nbsp; 1.1.5 | See the new queue in the table.<br/> <img src="images/1-1-MQ-Console-SeeNewQ.png" width="800" /> |

| **1.2** | **Configure IBM MQ to clone the orders** |
| :--- | :--- |
| **Narration** | Next the integration team identifies the queue that connects the order management system to the payment gateway. They review the messages as they are passing through MQ to verify they contain the expected payload. |
| **Action** &nbsp; 1.2.1 | Click on the **PAYMENT.REQ** queue.<br/> <img src="images/1-2-ClickQ.png" width="800" /> |
| **Action** &nbsp; 1.2.2 | Click on a message (1), scroll down (2) and show the order details (3).<br/> <img src="images/1-2-ShowMessage.png" width="800" /> |
| **Action** &nbsp; 1.2.3 | Click **Close**.<br/> <img src="images/1-2-CloseMessage.png" width="800" /> |
| **Narration** | They update the configuration to specify TO.KAFKA as the streaming queue. This causes IBM MQ to clone new messages to the PAYMENT.REQ queue. |
| **Action** &nbsp; 1.2.4 | Click the **Actions** button and select **View configuration**.<br/> <img src="images/1-2-ViewConfig.png" width="800" /> |
| **Action** &nbsp; 1.2.5 | Click the **Edit** button.<br/> <img src="images/1-2-EditConfig.png" width="800" /> |
| **Action** &nbsp; 1.2.6 | Select the **Storage** (1) section. In the Streaming queue name field type **TO.KAFKA** (2), and click **Save** (3).<br/> <img src="images/1-2-SaveConfig.png" width="800" /> |
| **Narration** | Once saved the new configuration is live, and the integration team can see cloned order messages in the TO.KAFKA queue. |
| **Action** &nbsp; 1.2.7 | Scroll to the top of the page (1), and select **Manage** (2).<br/> <img src="images/1-2-ViewQueues.png" width="800" /> |
| **Action** &nbsp; 1.2.8 | Click on the **TO.KAFKA** (1) queue.<br/> <img src="images/1-2-ViewStreamedMessages.png" width="800" /> |
| **Action** &nbsp; 1.2.9 | View the order messages building up on the queue.<br/> <img src="images/1-2-ViewClonedMessages.png" width="800" /> |

| **1.3** | **Define the Orders event stream** |
| :--- | :--- |
| **Narration** | Next the integration team opens the IBM Event Streams console to create the Orders stream where messages will be published. Options are provided to customize the data replication and retention settings. The team uses the default values, as their standard policy is to retain data for a week and to replicate for high availability.  |
| **Action** &nbsp; 1.3.1 | In the IBM Event Streams console, click on the **Create a topic** tile.<br/> <img src="images/1-3-CreateTile.png" width="800" /> |
| **Action** &nbsp; 1.3.2 | Specify **ORDERS** (1) as the Topic name, and click **Next** (2).<br/> <img src="images/1-3-TopicName.png" width="800" /> |
| **Action** &nbsp; 1.3.3 | Leave the number of partitions as the default, and click **Next** (1).<br/> <img src="images/1-3-Partitions.png" width="800" /> |
| **Action** &nbsp; 1.3.4 | Leave the retention settings as the default, and click **Next** (1).<br/> <img src="images/1-3-Retention.png" width="800" /> |
| **Action** &nbsp; 1.3.5 | Leave the replication settings as the default, and click **Create topic** (1).<br/> <img src="images/1-3-CreateTopic.png" width="800" /> |

| **1.4** | **Configure the IBM MQ to IBM Event Streams bridge** |
| :--- | :--- |
| **Narration** | Next the integration team open the Red Hat OpenShift console to configure the MQ to IBM Event Streams bridge. The bridge is supplied and supported by IBM and built on the Apache Kafka connector framework. The configuration includes the connectivity details for both IBM MQ and IBM Event Streams. Once created, the connector reads messages from the TO.KAFKA queue and publishes to the Order stream. |
| **Action** &nbsp; 1.4.1 | In the Red Hat OpenShift console, click on the **+** button in the top right.<br/> <img src="images/1-4-ClickPlus.png" width="800" /> |
| **Action** &nbsp; 1.4.2 | The configuration snippet to create the MQ to Kafka bridge is shown below. Copy this configuration snippet and paste (1) into the Red Hat OpenShift console, and click **Create** (2). <br/> <br/><inline-code code="apiVersion: eventstreams.ibm.com/v1beta2<br/>kind: KafkaConnector<br/>metadata:<br/>&nbsp;&nbsp;name: mq-connector<br/>&nbsp;&nbsp;namespace: cp4i<br/>&nbsp;&nbsp;labels:<br/>&nbsp;&nbsp;&nbsp;&nbsp;eventstreams.ibm.com/cluster: kafka-connect-cluster<br/>spec:<br/>&nbsp;&nbsp;class: com.ibm.eventstreams.connect.mqsource.MQSourceConnector<br/>&nbsp;&nbsp;tasksMax: 1<br/>&nbsp;&nbsp;config:<br/>&nbsp;&nbsp;&nbsp;&nbsp;# the Kafka topic to produce to<br/>&nbsp;&nbsp;&nbsp;&nbsp;topic: ORDERS<br/>&nbsp;&nbsp;&nbsp;&nbsp;# the MQ queue to get messages from<br/>&nbsp;&nbsp;&nbsp;&nbsp;mq.queue: TO.KAFKA<br/>&nbsp;&nbsp;&nbsp;&nbsp;# connection details for the queue manager<br/>&nbsp;&nbsp;&nbsp;&nbsp;mq.queue.manager: orders<br/>&nbsp;&nbsp;&nbsp;&nbsp;mq.connection.name.list: orders-ibm-mq(1414)<br/>&nbsp;&nbsp;&nbsp;&nbsp;mq.channel.name: SYSTEM.DEF.SVRCONN<br/>&nbsp;&nbsp;&nbsp;&nbsp;# format of the messages to transfer<br/>&nbsp;&nbsp;&nbsp;&nbsp;mq.message.body.jms: true<br/>&nbsp;&nbsp;&nbsp;&nbsp;mq.record.builder: com.ibm.eventstreams.connect.mqsource.builders.JsonRecordBuilder<br/>&nbsp;&nbsp;&nbsp;&nbsp;key.converter: org.apache.kafka.connect.storage.StringConverter<br/>&nbsp;&nbsp;&nbsp;&nbsp;value.converter: org.apache.kafka.connect.json.JsonConverter<br/>&nbsp;&nbsp;&nbsp;&nbsp;# whether to send the schema with the messages<br/>&nbsp;&nbsp;&nbsp;&nbsp;key.converter.schemas.enable: false<br/>&nbsp;&nbsp;&nbsp;&nbsp;value.converter.schemas.enable: false</code><br/>"></inline-code><img src="images/1-4-Paste.png" width="800" /> |

| **1.5** | **View the orders in the stream** |
| :--- | :--- |
| **Narration** | The integration team returns to the IBM Event Streams console to view the orders. They see the events that have been generated since they configured the streaming queue in IBM MQ. |
 **Action** &nbsp; 1.5.1 | Return to the IBM Event Streams console and show that the messages are being streamed into the topic. Click the topic icon (1), and select the **ORDERS** (2) topic. <br/> <br/><img src="images/1-5-NavigateToTopic.png" width="800" /> |
 **Action** &nbsp; 1.5.2 | All messages since the MQ streaming queue configuration update are seen. Click on one to view the details. <br/> <br/><img src="images/1-5-ViewEvent.png" width="800" /> |

| **1.6** | **Importing the streams into IBM Event Endpoint Management** |
| :--- | :--- |
| **Narration** | Next the integration team open the IBM Event Endpoint Management console. The console supports two usages, one for teams publishing event streams, and a second for those consuming. The integration team wants to import the order and customer streams by discovering the topic on IBM Event Streams. As this is the first time they have imported from IBM Event Streams they need to register the cluster.|
| **Action** &nbsp; 1.6.1 | In the IBM Event Endpoint Management console, click on the **topic** (1) icon and select the **Add topic** (2) button. <br/> <img src="images/1-6-ViewTopics.png" width="800" /> |
| **Action** &nbsp; 1.6.2 | Click **Add new cluster**. <br/> <img src="images/1-6-AddClusterWizard.png" width="800" /> |
| **Action** &nbsp; 1.6.3 | Specify **IBM Event Streams** (1) for the cluster name and click **Next** (2). <br/> <img src="images/1-6-ClusterName.png" width="800" /> |
| **Narration** | They enter the cluster connectivity details including the endpoint, certificates for secure communication and username / password credentials.|
| **Action** &nbsp; 1.6.4 | Specify **ademo-es-kafka-bootstrap.cp4i.svc:9095** (1) for the servers field and click **Next** (2). <br/> <img src="images/1-6-ClusterAddress.png" width="800" /> |
| **Action** &nbsp; 1.6.5 | Check the **Accept all certificates** (1) box and click **Next** (2). <br/> <img src="images/1-6-ClusterCert.png" width="800" /> |
| **Action** &nbsp; 1.6.6 | Specify **es-admin** (1) for the username, use the value outputted in the preparation section for the password (2), and click **Add cluster** (3). <br/> <img src="images/1-6-ClusterCredentials.png" width="800" /> |
| **Narration** | The available topics are discovered, and the team imports both the CUSTOMERS and ORDERS streams.|
| **Action** &nbsp; 1.6.7 | Select **IBM Event Streams** (1) and click **Next** (2). <br/> <img src="images/1-6-ClusterSelection.png" width="800" /> |
| **Action** &nbsp; 1.6.8 | Check **CUSTOMERS** (1) and **ORDERS** (2), and click **Add topic** (2). <br/> <img src="images/1-6-SelectTopics.png" width="800" /> |

| **1.7** | **Describe and publish the streams into IBM Event Endpoint Management** |
| :--- | :--- |
| **Narration** | Next the integration team describes the streams, providing a description and example message. This information is displayed to consumers when they discover and subscribe to the event stream. They start by editing the CUSTOMERS stream. |
| **Action** &nbsp; 1.7.1 | Click on the **CUSTOMERS** (1) topic. <br/> <img src="images/1-7-SelectCustomerTopic.png" width="800" /> |
| **Action** &nbsp; 1.7.2 | Click on the **Edit information** (1) button. <br/> <img src="images/1-7-EditCustomer.png" width="800" /> |
| **Action** &nbsp; 1.7.3 | Enter **Events generated by the customer management system. A new event is created for each new user registration.** (1) as the description. <br/> <img src="images/1-7-CustomerDescription.png" width="800" /> |
| **Action** &nbsp; 1.7.4 | Scroll down and enter **customer** (1) as a tag and **customerservice@focus.corp** as the contact email (2). <br/> <img src="images/1-7-CustomerContact.png" width="800" /> |
| **Action** &nbsp; 1.7.5 | Select the **Event information** tab, scroll down to the sample message text box (2) and copy the content from below, and click **Save** (3). <br/> <br/><inline-code code="{<br/>&nbsp;&nbsp;&quot;customerid&quot;: &quot;acb3eb65-98a1-45c2-84d4-f5df157862b4&quot;,<br/>&nbsp;&nbsp;&quot;customername&quot;: &quot;Emilio Quitzon&quot;,<br/>&nbsp;&nbsp;&quot;registered&quot;: &quot;2023-10-24 19:20:35.638&quot;<br/>}"></inline-code> <img src="images/1-7-SampleCustomer.png" width="800" /> |
| **Narration** | The integration team publishes the event stream, which allows consumers to view and subscribe. |
| **Action** &nbsp; 1.7.6 | Select the **Options** (1) tab and click on the **Create Option +** (2) button. <br/> <img src="images/1-7-OptionsCustomer.png" width="800" /> |
| **Action** &nbsp; 1.7.7 | Enter **Customer Access** (1) as the option name, **CUSTOMERS** (2) as the alias, **Self-service access to customer event stream** (3) as the description and click **Next** (4).  <br/> <img src="images/1-7-OptionsCreateCustomer.png" width="800" /> |
| **Action** &nbsp; 1.7.8 | Click **Next**.  <br/> <img src="images/1-7-OptionsCreateControlsCustomer.png" width="800" /> |
| **Action** &nbsp; 1.7.9 | Click **Publish**.  <br/> <img src="images/1-7-PublishCustomer.png" width="800" /> |
| **Action** &nbsp; 1.7.10 | Check the **production** (1) checkbox and click **Save** (2).  <br/> <img src="images/1-7-OptionsSaveCustomer.png" width="800" /> |
| **Narration** | They repeat the same process for the ORDERS stream. |
| **Action** &nbsp; 1.7.11 | Select the **topics** (1) icon and click on the **ORDERS** (2) topic. <br/> <img src="images/1-7-SelectOrderTopic.png" width="800" /> |
| **Action** &nbsp; 1.7.12 | Click on the **Edit information** (1) button. <br/> <img src="images/1-7-EditOrder.png" width="800" /> |
| **Action** &nbsp; 1.7.13 | Enter **Events from the Focus Corp order management system. An event will be emitted for every new order that is made.** (1) as the description. <br/> <img src="images/1-7-OrderDescription.png" width="800" /> |
| **Action** &nbsp; 1.7.14 | Scroll down and enter **order** (1) as a tag and **orders@focus.corp** (2) as the contact email. <br/> <img src="images/1-7-OrderContact.png" width="800" /> |
| **Action** &nbsp; 1.7.15 | Select the **Event information** tab, scroll down to the sample message text box (2) and copy the content from below, and click **Save** (3). <br/> <br/><inline-code code="{<br/>&nbsp;&nbsp;&quot;quantity&quot;: 9,<br/>&nbsp;&nbsp;&quot;price&quot;: 197.09,<br/>&nbsp;&nbsp;&quot;customerid&quot;: &quot;a7d1586b-ced1-462f-9e44-14e9e5013540&quot;,<br/>&nbsp;&nbsp;&quot;description&quot;: &quot;Composite Oversize 28in Tennis Racket&quot;,<br/>&nbsp;&nbsp;&quot;id&quot;: &quot;1eba7af9-b748-4754-b750-3459e589dccf&quot;,<br/>&nbsp;&nbsp;&quot;region&quot;: &quot;EMEA&quot;,<br/>&nbsp;&nbsp;&quot;ordertime&quot;: &quot;2023-10-24 19:26:04.839&quot;,<br/>&nbsp;&nbsp;&quot;customer&quot;: &quot;Reed McKenzie DDS&quot;<br/>}"></inline-code> <img src="images/1-7-SampleOrder.png" width="800" /> |
| **Action** &nbsp; 1.7.16 | Select the **Options** (1) tab and click on the **Create Option +** (2) button. <br/> <img src="images/1-7-OptionsOrder.png" width="800" /> |
| **Action** &nbsp; 1.7.17 | Enter **Order Access** (1) as the option name, **ORDERS** (2) as the alias, **Self-service access to orders event stream** (3) as the description and click **Next** (4).  <br/> <img src="images/1-7-OptionsCreateOrders.png" width="800" /> |
| **Action** &nbsp; 1.7.18 | Click **Next**.  <br/> <img src="images/1-7-OptionsCreateControlsOrder.png" width="800" /> |
| **Action** &nbsp; 1.7.19 | Click **Publish**.  <br/> <img src="images/1-7-PublishOrder.png" width="800" /> |
| **Action** &nbsp; 1.7.20 | Check the **production** (1) checkbox and click **Save** (2).  <br/> <img src="images/1-7-OptionsSaveOrder.png" width="800" /> |

<br/>

**[Go to top](#place1)**

<br/><br/>

</details>

<p/>

{% include integration/event-automation-common.md %}

<details markdown="1">

<summary>Summary</summary>

In this demo we showed how Focus Corp used IBM MQ and IBM Event Automation to capitalize on time-sensitive revenue opportunities. Specifically, we saw the integration team configure IBM MQ to clone messages, and IBM Event Automation set up to publish them to an event stream. This and other streams were published to an Event Catalog that allowed non-technical consumers, like the marketing team, to easily discover and subscribe to the streams. The marketing team then used these streams to build an event processing flow, using a no-code editor. The flow detects in real-time which customers should receive the highest value discounts. This has transformed how quickly the marketing team can create new features and frees them from needing to rely on the integration team for access to this valuable business data.

Thank you for attending today’s presentation.


**[Go to top](#place1)**

<br/><br/>

</details>
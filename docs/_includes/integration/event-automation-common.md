<details markdown="1">

<summary>{{ page.browsingselfservice }} - Browsing the self-service event stream catalog</summary>

Focus Corp’s marketing team wants to offer a high-value promotion to specific first-time customers immediately after their initial order.
<br/>

| **{{ page.browsingselfservice }}.1** | **Subscribe to the Customer and Order topics** |
| :--- | :--- |
| **Narration** | The marketing team browses the self-service catalog to find the event streams they need.   |
| **Action** &nbsp; {{ page.browsingselfservice }}.1.1 | Open the IBM Event Endpoint Management console. Select the **catalog** (1) icon and click on **CUSTOMERS** (2).<br/> <img src="../300-integration-event-automation-common/images/1-Catalog-SelectCustomer.png" width="800" /> |
| **Narration** | They see the CUSTOMERS stream description, sample message and connectivity details. They confirm this provides an event for each new customer who registers. They generate security credentials for their application to access the stream.   |
| **Action** &nbsp; {{ page.browsingselfservice }}.1.2 | Show the description, sample message and connection details. Click on the **Generate access credentials**.<br/> <img src="../300-integration-event-automation-common/images/1-Catalog-GenerateCustomerCred.png" width="800" /> |
| **Action** &nbsp; {{ page.browsingselfservice }}.1.3 | Fill in **marketing@focus.corp** (1) as the contact details, and click **Generate**.<br/> <img src="../300-integration-event-automation-common/images/1-Catalog-ContactDetailsCustomer.png" width="800" /> |
| **Narration** | The credentials are immediately created, which the team safely store.   |
| **Action** &nbsp; {{ page.browsingselfservice }}.1.4 | Save the **Username** (1) and **Password** (2) to a safe location before clicking on **Close** (3).<br/> <img src="../300-integration-event-automation-common/images/1-Catalog-CopyCustomerCred.png" width="800" /> |
| **Narration** | The marketing team discover the ORDERS stream that provides an event for each new order. They complete the same process to generate credentials for this stream.  |
| **Action** &nbsp; {{ page.browsingselfservice }}.1.5 | Complete the same process for the Order topic. Select the **catalog** (1) icon and click on **ORDERS** (2).<br/> <img src="../300-integration-event-automation-common/images/1-Catalog-SelectOrder.png" width="800" /> |
| **Action** &nbsp; {{ page.browsingselfservice }}.1.6 | Show the description, sample message and connection details. Click on the **Generate access credentials**.<br/> <img src="../300-integration-event-automation-common/images/1-Catalog-GenerateOrderCred.png" width="800" /> |
| **Action** &nbsp; {{ page.browsingselfservice }}.1.7 | Fill in **marketing@focus.corp** (1) as the contact details, and click **Generate** (2).<br/> <img src="../300-integration-event-automation-common/images/1-Catalog-ContactDetailsOrder.png" width="800" /> |
| **Action** &nbsp; {{ page.browsingselfservice }}.1.8 | Save the **Username** (1) and **Password** (2) to a safe location before clicking on **Close** (3).<br/> <img src="../300-integration-event-automation-common/images/1-Catalog-CopyOrderCred.png" width="800" /> |

<br/>

**[Go to top](#place1)**

<br/><br/>

</details>

<p/>

<details markdown="1">

<summary>{{ page.nocodeeditor }} - Using the no-code editor to configure the solution </summary>

The marketing team’s business requirement is to correlate newly created customer accounts with orders of over 100 dollars within a 24-hour window. 

<br/>

| **{{ page.nocodeeditor }}.1** | **Configure an event source for the Order events** |
| :--- | :--- |
| **Narration** | The team will use an event flow to detect when a new customer creates an order over $100. They start by creating a new flow called NewCustomerLargeOrder. |
| **Action** &nbsp; {{ page.nocodeeditor }}.1.1 | Open the IBM Event Processing console, dismiss the tutorial if it appears and click **Create** (1) to start authoring a new flow.<br/> <img src="../300-integration-event-automation-common/images/2-Flow-CreateFlow.png" width="800" /> |
| **Action** &nbsp; {{ page.nocodeeditor }}.1.2 | Specify **NewCustomerLargeOrder** (1) for the flow name and click **Create** (2).<br/> <img src="../300-integration-event-automation-common/images/2-Flow-FlowName.png" width="800" /> |
| **Narration** | A flow starts with one or more event sources, which represent the inbound events. The marketing team starts defining the ORDERS event source using the pre-created node. They configure the event source, starting with the connectivity details they discovered in the event management console.|
| **Action** &nbsp; {{ page.nocodeeditor }}.1.3 | Hover over the added node and select the **Edit** icon.<br/> <img src="../300-integration-event-automation-common/images/2-Flow-1stEventSourceEdit.png" width="800" /> |
| **Action** &nbsp; {{ page.nocodeeditor }}.1.4 | Select the **Add event source** (1) tile and click on **Next** (2).<br/> <img src="../300-integration-event-automation-common/images/2-Flow-1stEventSourceAdd.png" width="800" /> |
| **Action** &nbsp; {{ page.nocodeeditor }}.1.5 | Return to the Event Endpoint Management console and scroll down to the 'Access information' section. Copy the server address details.<br/> <img src="../300-integration-event-automation-common/images/2-Flow-EEMAddress.png" width="800" /> |
| **Action** &nbsp; {{ page.nocodeeditor }}.1.6 | Type **Orders** (1) for the node name, paste the server address into the **Server** (2) field, and click **Next** (3).<br/> <img src="../300-integration-event-automation-common/images/2-Flow-1stEventSourceServerDetails.png" width="800" /> |
| **Narration** | They configure the security details, accepting the certificates being used by the event stream. Then they specify the username / password credentials that they generated in the event management console.|
| **Action** &nbsp; {{ page.nocodeeditor }}.1.7 | Check the **Accept certificates** (1) box and select **Next** (2).<br/> <img src="../300-integration-event-automation-common/images/2-Flow-1stEventSourceAcceptCerts.png" width="800" /> |
| **Action** &nbsp; {{ page.nocodeeditor }}.1.8 | Copy the username (1) and password (2) from step {{ page.browsingselfservice }}.1.8, and click **Next** (3).<br/> <img src="../300-integration-event-automation-common/images/2-Flow-1stEventSourceCredentials.png" width="800" /> |
| **Narration** | The system connects to the event stream and queries the available topics for the provided credentials. A single ORDERS topic is found and selected by the team.|
| **Action** &nbsp; {{ page.nocodeeditor }}.1.9 | Check **ORDERS** (1) and click **Next** (2).<br/> <img src="../300-integration-event-automation-common/images/2-Flow-1stEventSourceSelectTopic.png" width="800" /> |
| **Narration** | The data structure for the events needs to be defined. For simplicity, the team decide to copy the sample message from the Event Management console.|
| **Action** &nbsp; {{ page.nocodeeditor }}.1.10 | Click on **Upload a schema or sample message** (1).<br/> <img src="../300-integration-event-automation-common/images/2-Flow-1stEventSourceUploadSample.png" width="800" /> |
| **Action** &nbsp; {{ page.nocodeeditor }}.1.11 | Select the **JSON** (1) tab, copy the text below into the **Enter sample message** (2) box, and click **Done** (3).<br/> <br/><inline-code code="{<br/>&nbsp;&nbsp;&quot;quantity&quot;: 9,<br/>&nbsp;&nbsp;&quot;price&quot;: 197.09,<br/>&nbsp;&nbsp;&quot;customerid&quot;: &quot;a7d1586b-ced1-462f-9e44-14e9e5013540&quot;,<br/>&nbsp;&nbsp;&quot;description&quot;: &quot;Composite Oversize 28in Tennis Racket&quot;,<br/>&nbsp;&nbsp;&quot;id&quot;: &quot;1eba7af9-b748-4754-b750-3459e589dccf&quot;,<br/>&nbsp;&nbsp;&quot;region&quot;: &quot;EMEA&quot;,<br/>&nbsp;&nbsp;&quot;ordertime&quot;: &quot;2023-10-24 19:26:04.839&quot;,<br/>&nbsp;&nbsp;&quot;customer&quot;: &quot;Reed McKenzie DDS&quot;<br/>}"></inline-code><img src="../300-integration-event-automation-common/images/2-Flow-1stEventSourceSample.png" width="800" /> |
| **Action** &nbsp; {{ page.nocodeeditor }}.1.12 | Click on **Configure**.<br/> <img src="../300-integration-event-automation-common/images/2-Flow-1stEventSourceComplete.png" width="800" /> |

<br/>

| **{{ page.nocodeeditor }}.2** | **Configure an event source for the New Customer events** |
| :--- | :--- |
| **Narration** | The marketing team require a second event source for the New Customer events. They drag and drop an event source node onto the canvas.  |
| **Action** &nbsp; {{ page.nocodeeditor }}.2.1 | Press and hold the mouse button on the **Event source** (1) node, and drag onto the canvas (2).<br/> <img src="../300-integration-event-automation-common/images/2-Flow-2ndEventSourceDrag.png" width="800" /> |
| **Narration** | Similar to before, the team configure the event source starting with the connectivity details they discovered in the event management console. |
| **Action** &nbsp; {{ page.nocodeeditor }}.2.2 | Hover over the added node and select the **Edit** icon.<br/> <img src="../300-integration-event-automation-common/images/2-Flow-2ndEventSourceEdit.png" width="800" /> |
| **Action** &nbsp; {{ page.nocodeeditor }}.2.3 | Select the **Add event source** (1) tile and click on **Next** (2).<br/> <img src="../300-integration-event-automation-common/images/2-Flow-2ndEventSourceAdd.png" width="800" /> |
| **Action** &nbsp; {{ page.nocodeeditor }}.2.4 | Return to the Event Endpoint Management console and scroll down to the 'Access information' section. Copy the server address details.<br/> <img src="../300-integration-event-automation-common/images/2-Flow-EEMAddress.png" width="800" /> |
| **Action** &nbsp; {{ page.nocodeeditor }}.2.5 | Type **New Customers** (1) for the node name, paste the server address into the **Server** (2) field, and click **Next** (3).<br/> <img src="../300-integration-event-automation-common/images/2-Flow-2ndEventSourceServerDetails.png" width="800" /> |
| **Narration** | They configure the security details, accepting the certificates being used by the event stream. Then they specify the username / password credentials that they generated in the event management console.|
| **Action** &nbsp; {{ page.nocodeeditor }}.2.6 | Check the **Accept certificates** (1) box and select **Next** (2).<br/> <img src="../300-integration-event-automation-common/images/2-Flow-2ndEventSourceAcceptCerts.png" width="800" /> |
| **Action** &nbsp; {{ page.nocodeeditor }}.2.7 | Copy the username (1) and password (2) from step {{ page.browsingselfservice }}.1.4, and click **Next** (3).<br/> <img src="../300-integration-event-automation-common/images/2-Flow-2ndEventSourceCredentials.png" width="800" /> |
| **Narration** | The system connects to the event stream and queries the available topics for the provided credentials. A single CUSTOMERS topic is found and selected by the team.|
| **Action** &nbsp; {{ page.nocodeeditor }}.2.8 | Check **CUSTOMERS** (1) and click **Next** (2).<br/> <img src="../300-integration-event-automation-common/images/2-Flow-2ndEventSourceSelectTopic.png" width="800" /> |
| **Narration** | The data structure for the events needs to be defined. For simplicity, the team decide to copy the sample message from the Event Management console.|
| **Action** &nbsp; {{ page.nocodeeditor }}.2.9 | Click on **Upload a schema or sample message**.<br/> <img src="../300-integration-event-automation-common/images/2-Flow-2ndEventSourceUploadSample.png" width="800" /> |
| **Action** &nbsp; {{ page.nocodeeditor }}.2.10 | Select the **JSON** (1) tab, copy the text below into the **Enter sample message** (2) box, and click **Done** (3).<br/> <br/><inline-code code="{<br/>&nbsp;&nbsp;&quot;customerid&quot;: &quot;acb3eb65-98a1-45c2-84d4-f5df157862b4&quot;,<br/>&nbsp;&nbsp;&quot;customername&quot;: &quot;Emilio Quitzon&quot;,<br/>&nbsp;&nbsp;&quot;registered&quot;: &quot;2023-10-24 19:20:35.638&quot;<br/>}"></inline-code><img src="../300-integration-event-automation-common/images/2-Flow-2ndEventSourceSample.png" width="800" /> |
| **Action** &nbsp; {{ page.nocodeeditor }}.2.11 | Click on **Configure**.<br/> <img src="../300-integration-event-automation-common/images/2-Flow-2ndEventSourceComplete.png" width="800" /> |

<br/>

| **{{ page.nocodeeditor }}.3** | **Filter orders over 100 dollars** |
| :--- | :--- |
| **Narration** | The ORDERS stream provides an event for each order; however the marketing team only wants to identify orders over $100. They use a Filter node to disregard the unnecessary events. They drag and drop the node onto the canvas. |
| **Action** &nbsp; {{ page.nocodeeditor }}.3.1 | Press and hold the mouse button on the **Filter** (1) node and drag onto the canvas (2).<br/> <img src="../300-integration-event-automation-common/images/2-Flow-FilterDrag.png" width="800" /> |
| **Narration** | The team connects the ORDERS output terminal of the Filter node. |
| **Action** &nbsp; {{ page.nocodeeditor }}.3.2 | Hover over the Orders output terminal and hold the mouse button down.<br/> <img src="../300-integration-event-automation-common/images/2-Flow-FilterConnectSource1.png" width="800" /> |
| **Action** &nbsp; {{ page.nocodeeditor }}.3.3 | Drag the connection to the Filter's input terminal and release the mouse button.<br/> <img src="../300-integration-event-automation-common/images/2-Flow-FilterConnectTarget.png" width="800" /> |
| **Narration** | The Filter node provides an expression builder that makes it easy for the marketing team to Filter out orders under $100. |
| **Action** &nbsp; {{ page.nocodeeditor }}.3.4 | Hover over the Filter node and select the **edit** icon.<br/> <img src="../300-integration-event-automation-common/images/2-Flow-FilterEdit.png" width="800" /> |
| **Action** &nbsp; {{ page.nocodeeditor }}.3.5 | Enter **FilterLargeOrders** (1) for the node name and click **Next** (2).<br/> <img src="../300-integration-event-automation-common/images/2-Flow-FilterName.png" width="800" /> |
| **Action** &nbsp; {{ page.nocodeeditor }}.3.6 | Click on the **Assistant** pull down.<br/> <img src="../300-integration-event-automation-common/images/2-Flow-FilterAssistance.png" width="800" /> |
| **Action** &nbsp; {{ page.nocodeeditor }}.3.7 | Select **price** (1) for the property, **> Is greater than** (2) for the condition and enter **100** (3) for the value. Click on **Add to expression** (4) to complete . <br/> <img src="../300-integration-event-automation-common/images/2-Flow-FilterCondition.png" width="800" /> |
| **Action** &nbsp; {{ page.nocodeeditor }}.3.8 | The completed conditions will be shown (1), click on **Configure** (2). <br/> <img src="../300-integration-event-automation-common/images/2-Flow-FilterComplete.png" width="800" /> |

<br/>

| **{{ page.nocodeeditor }}.4** | **Identify new customer order over 100 dollars** |
| :--- | :--- |
| **Narration** | The team wants to join the New Customer and filtered Order streams together, detecting when a new customer has placed a large order within 24 hours of opening a new account. To detect this situation, a JOIN node is used. The team drags and drops the node onto the canvas.  |
| **Action** &nbsp; {{ page.nocodeeditor }}.4.1 | Press and hold the mouse button on the **Interval join** node and drag onto the canvas.<br/> <img src="../300-integration-event-automation-common/images/2-Flow-JoinDrag.png" width="800" /> |
| **Narration** | The JOIN node takes two input streams. The marketing team connects the filtered Order event and New Customer event to the input terminal of the JOIN node.  |
| **Action** &nbsp; {{ page.nocodeeditor }}.4.2 | Hover over the New Customers output terminal and hold the mouse button down.<br/> <img src="../300-integration-event-automation-common/images/2-Flow-JoinSourceConnect1.png" width="800" /> |
| **Action** &nbsp; {{ page.nocodeeditor }}.4.3 | Drag the connection to the intervalJoin_1 input terminal and release the mouse button.<br/> <img src="../300-integration-event-automation-common/images/2-Flow-JoinSourceConnect2.png" width="800" /> |
| **Action** &nbsp; {{ page.nocodeeditor }}.4.4 | Complete the same process to connect the FilterLargeOrders output terminal.<br/> <img src="../300-integration-event-automation-common/images/2-Flow-JoinSourceConnect4.png" width="800" /> |
| **Narration** | To detect a common event across the two streams, the team needs to configure how the JOIN node can match events. The marketing team uses the 'expression builder' to correlate events based on the common customerid field within the two events.   |
| **Action** &nbsp; {{ page.nocodeeditor }}.4.5 | Hover over the intervalJoin_1 node and select the **edit** icon.<br/> <img src="../300-integration-event-automation-common/images/2-Flow-JoinEdit.png" width="800" /> |
| **Action** &nbsp; {{ page.nocodeeditor }}.4.6 | Enter **DetectNewCustomerLargeOrder** (1) for the node name and click **Next** (2).<br/> <img src="../300-integration-event-automation-common/images/2-Flow-JoinName.png" width="800" /> |
| **Action** &nbsp; {{ page.nocodeeditor }}.4.7 | Click on the **Assistant** (1) pull down. Select **customerid** (2 + 3) from both pull downs and click **Add to expression** (4) to complete. <br/> <img src="../300-integration-event-automation-common/images/2-Flow-JoinCondition.png" width="800" /> |
| **Action** &nbsp; {{ page.nocodeeditor }}.4.8 | The completed condition will be shown, click on **Next**. <br/> <img src="../300-integration-event-automation-common/images/2-Flow-JoinConditionComplete.png" width="800" /> |
| **Narration** | The JOIN node uses a time window to detect a situation. There are two events involved: a triggering event that starts the time window, and a second event that detects the situation. For the marketing team's requirement, the New Customer event is the triggering event as this must always happen first, and the Order event represents the situation being detected. The team specifies this in the UI.    |
| **Action** &nbsp; {{ page.nocodeeditor }}.4.9 | Select **FilterLargeOrders (event_time)** for the event to detect.<br/> <img src="../300-integration-event-automation-common/images/2-Flow-JoinTimeWindow1.png" width="800" /> |
| **Action** &nbsp; {{ page.nocodeeditor }}.4.10 | Select **New Customers (event_time)** (1) for the event to start the time window, change the metric to **hours** (2), number of hours to **24** (3), and click **Next** (4).<br/> <img src="../300-integration-event-automation-common/images/2-Flow-JoinTimeWindow2.png" width="800" /> |
| **Narration** | The output data from the JOIN node will be a combination of the fields from the two events. Because the two events have been merged, there are two duplicate fields (customerid and event_time). This can be resolved by either renaming or removing the fields. As these are duplicates, the marketing team deletes the fields.   |
| **Action** &nbsp; {{ page.nocodeeditor }}.4.11 | Remove the duplicate fields by clicking on the '-' sign: **customerid** (1), **event_time** (2).<br/> <img src="../300-integration-event-automation-common/images/2-Flow-JoinRemoveDuplicates.png" width="800" /> |
| **Action** &nbsp; {{ page.nocodeeditor }}.4.12 | Click **Configure**.<br/> <img src="../300-integration-event-automation-common/images/2-Flow-JoinConfigComplete.png" width="800" /> |

**[Go to top](#place1)**

<br/><br/>

</details>

<p/>

<details markdown="1">

<summary>{{ page.outputtomarketing }} - Sending the output to the marketing application </summary>

<br/>

| **{{ page.outputtomarketing }}.1** | **Configure an event destination for the output stream** |
| :--- | :--- |
| **Narration** | The marketing team wants to emit the detected events to the loyalty app. The app will then send a promotion to the customer. They drag and drop an 'Event destination' node onto the canvas. The node is automatically called sink_1. The term 'sink' is used by kafka to refer to a resource, such as a topic that can receive incoming events. |
| **Action** &nbsp; {{ page.outputtomarketing }}.1.1 | Press and hold the mouse button on the **Event destination** (1) node and drag onto the canvas (2).<br/> <img src="../300-integration-event-automation-common/images/2-Flow-DestinationDrag.png" width="800" /> |
| **Narration** | They connect the DetectNewLargeOrder output terminal to the 'Event destination' input terminal.|
| **Action** &nbsp; {{ page.outputtomarketing }}.1.2 | Hover over the DetectNewLargeOrder output terminal and hold the mouse button down.<br/> <img src="../300-integration-event-automation-common/images/2-Flow-DestinationConnect1.png" width="800" /> |
| **Action** &nbsp; {{ page.outputtomarketing }}.1.3 | Drag the connection to the **sink_1** input terminal and release the mouse button.<br/> <img src="../300-integration-event-automation-common/images/2-Flow-DestinationConnect2.png" width="800" /> |
| **Narration** | The marketing team edits the node configuration to specify the name and network address of the output stream.|
| **Action** &nbsp; {{ page.outputtomarketing }}.1.4 | Hover over the sink_1 node and select the **edit** icon.<br/> <img src="../300-integration-event-automation-common/images/2-Flow-DestinationEdit.png" width="800" /> |
| **Action** &nbsp; {{ page.outputtomarketing }}.1.5 | Enter **OutputToMarketingApp** (1) for the node name, **ademo-es-kafka-bootstrap.cp4i.svc:9095** (2) in the server field and click **Next** (3).<br/> <img src="../300-integration-event-automation-common/images/2-Flow-DestinationName.png" width="800" /> |
| **Narration** | They configure the security details, accepting the certificates being used by the event stream. They specify the username / password credentials to access the event stream.|
| **Action** &nbsp; {{ page.outputtomarketing }}.1.6 | Check **Accept certificates** (1) and click **Next** (2).<br/> <img src="../300-integration-event-automation-common/images/2-Flow-DestinationAcceptCert.png" width="800" /> |
| **Action** &nbsp; {{ page.outputtomarketing }}.1.7 | Specify **es-admin** (1) for the username, the password (2) value was outputted in the preparation section and click **Next** (3). <br/> <img src="../300-integration-event-automation-common/images/2-Flow-DestinationCredentials.png" width="800" /> |
| **Narration** | The system connects to the event stream and queries the available topics for the provided credentials. The marketing team selects the LOYALTY.APP event stream.|
| **Action** &nbsp; {{ page.outputtomarketing }}.1.8 | Select **LOYALTY.APP** (1) and click **Configure** (2).<br/> <img src="../300-integration-event-automation-common/images/2-Flow-DestinationSelectTopic.png" width="800" /> |

  
<br/>

| **{{ page.outputtomarketing }}.2** | **Testing the flow with historical events** |
| :--- | :--- |
| **Narration** | The team are able to test the flow with historical data in the event streams. They immediately see the flow working as expected and several new customers who are eligible for the discount detected. |
| **Action** &nbsp; {{ page.outputtomarketing }}.2.1 | Select the **Run** (1) pull down and click **Include historical**.<br/> <img src="../300-integration-event-automation-common/images/3-Flow-RunHistorical.png" width="800" /> |
| **Action** &nbsp; {{ page.outputtomarketing }}.2.2 | View the detected events.<br/> <img src="../300-integration-event-automation-common/images/3-Flow-OutputEvents.png" width="800" /> |


| **{{ page.outputtomarketing }}.3** | **Sending the output stream to the marketing application** |
| :--- | :--- |
| **Narration** | The team verify the detected events and stop the flow. They are now ready to reconfigure the event destination for the production environment. They follow the same process as before to configure the event destination to the production output event stream. This time they run the flow without historical data to process new events in real-time. |
| **Action** &nbsp; {{ page.outputtomarketing }}.3.1 | Select **Stop**.<br/> <img src="../300-integration-event-automation-common/images/3-Flow-StopFlow.png" width="800" /> |
| **Action** &nbsp; {{ page.outputtomarketing }}.3.2 | We are not re-showing how to configure the event destination as it is the same process as previously demonstrated. Select the **Run** (1) pull down and click **Events from now** (2).<br/> <img src="../300-integration-event-automation-common/images/3-Flow-ProductionStart.png" width="800" /> |



<br/>

**[Go to top](#place1)**

<br/><br/>

</details>

<p/>
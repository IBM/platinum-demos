<details markdown="1">

<summary>{{ page.browsingselfservice }} - Browsing the self-service event stream catalog</summary>

Focus Corp’s marketing team wants to use the two streams to offer a high-value promotion to specific first-time customers immediately after those customers place their initial order. The team browses the self-service catalog to find the event streams they need.  
<br/>

| **{{ page.browsingselfservice }}.1** | **Subscribe to the customer and order topics** |
| :--- | :--- |
| **Narration** | TEXT |
| **Action** &nbsp; {{ page.browsingselfservice }}.1.1 | Open the IBM Event Endpoint Management console. Select the **catalog** (1) icon and click on **CUSTOMERS** (2).<br/> <img src="../300-integration-event-automation-common/images/1-Catalog-SelectCustomer.png" width="800" /> |
| **Action** &nbsp; {{ page.browsingselfservice }}.1.2 | Show the description, sample message and connection details. Click on the **Generate access credentials**.<br/> <img src="../300-integration-event-automation-common/images/1-Catalog-GenerateCustomerCred.png" width="800" /> |
| **Action** &nbsp; {{ page.browsingselfservice }}.1.3 | Fill in **marketing@focus.corp** (1) as the contact details, and click **Generate**.<br/> <img src="../300-integration-event-automation-common/images/1-Catalog-ContactDetailsCustomer.png" width="800" /> |
| **Action** &nbsp; {{ page.browsingselfservice }}.1.4 | Save the **Username** (1) and **Password** (2) to a safe location before clicking on **Close** (3).<br/> <img src="../300-integration-event-automation-common/images/1-Catalog-CopyCustomerCred.png" width="800" /> |
| **Action** &nbsp; {{ page.browsingselfservice }}.1.5 | Complete the same process for the order topic. Select the **catalog** (1) icon and click on **ORDERS** (2).<br/> <img src="../300-integration-event-automation-common/images/1-Catalog-SelectOrder.png" width="800" /> |
| **Action** &nbsp; {{ page.browsingselfservice }}.1.6 | Show the description, sample message and connection details. Click on the **Generate access credentials**.<br/> <img src="../300-integration-event-automation-common/images/1-Catalog-GenerateOrderCred.png" width="800" /> |
| **Action** &nbsp; {{ page.browsingselfservice }}.1.7 | Fill in **marketing@focus.corp** (1) as the contact details, and click **Generate**.<br/> <img src="../300-integration-event-automation-common/images/1-Catalog-ContactDetailsOrder.png" width="800" /> |
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

| **{{ page.nocodeeditor }}.1** | **Configure an event source for the order events** |
| :--- | :--- |
| **Narration** | TEXT |
| **Action** &nbsp; {{ page.nocodeeditor }}.1.1 | Open the IBM Event Processing console and click **Create** (1) to start authoring a new flow.<br/> <img src="../300-integration-event-automation-common/images/2-Flow-CreateFlow.png" width="800" /> |
| **Action** &nbsp; {{ page.nocodeeditor }}.1.2 | Specify **NewCustomerLargeOrder** (1) for the flow name and click **Create** (2).<br/> <img src="../300-integration-event-automation-common/images/2-Flow-FlowName.png" width="800" /> |
| **Action** &nbsp; {{ page.nocodeeditor }}.1.3 | Press and hold the mouse button on the **Event source** node.<br/> <img src="../300-integration-event-automation-common/images/2-Flow-1stEventSourceSelect.png" width="800" /> |
| **Action** &nbsp; {{ page.nocodeeditor }}.1.4 | Drag onto the canvase and release the mouse button.<br/> <img src="../300-integration-event-automation-common/images/2-Flow-1stEventSourceDrag.png" width="800" /> |
| **Action** &nbsp; {{ page.nocodeeditor }}.1.5 | Click on the added node and select the **edit** icon.<br/> <img src="../300-integration-event-automation-common/images/2-Flow-1stEventSourceEdit.png" width="800" /> |
| **Action** &nbsp; {{ page.nocodeeditor }}.1.6 | Select the **Add event source** (1) tile and click on **Next** (2).<br/> <img src="../300-integration-event-automation-common/images/2-Flow-1stEventSourceAdd.png" width="800" /> |
| **Action** &nbsp; {{ page.nocodeeditor }}.1.7 | Return to the Event Endpoint Management console and scroll down to the Access information. Copy the server address details.<br/> <img src="../300-integration-event-automation-common/images/2-Flow-EEMAddress.png" width="800" /> |
| **Action** &nbsp; {{ page.nocodeeditor }}.1.8 | Type **Orders** (1) for the node name, paste the server address into the **Server** (2) field, and click **Next** (3).<br/> <img src="../300-integration-event-automation-common/images/2-Flow-1stEventSourceServerDetails.png" width="800" /> |
| **Action** &nbsp; {{ page.nocodeeditor }}.1.9 | Check the **Accept certificates** (1) box and select **Next** (2).<br/> <img src="../300-integration-event-automation-common/images/2-Flow-1stEventSourceAcceptCerts.png" width="800" /> |
| **Action** &nbsp; {{ page.nocodeeditor }}.1.10 | Copy the username (1) and password (2) from step {{ page.browsingselfservice }}.1.8, and click **Next** (3).<br/> <img src="../300-integration-event-automation-common/images/2-Flow-1stEventSourceCredentials.png" width="800" /> |
| **Action** &nbsp; {{ page.nocodeeditor }}.1.11 | Check **ORDERS** (1) and click **Next** (3).<br/> <img src="../300-integration-event-automation-common/images/2-Flow-1stEventSourceSelectTopic.png" width="800" /> |
| **Action** &nbsp; {{ page.nocodeeditor }}.1.12 | Click on **Upload a schema or sample message** (1).<br/> <img src="../300-integration-event-automation-common/images/2-Flow-1stEventSourceUploadSample.png" width="800" /> |
| **Action** &nbsp; {{ page.nocodeeditor }}.1.13 | Select the **Sample message** (1) tab, copy the text below into the **Enter sample message** (2) box, and click **Close** (3).<br/> <br/><inline-code code="{<br/>&nbsp;&nbsp;&quot;quantity&quot;: 9,<br/>&nbsp;&nbsp;&quot;price&quot;: 197.09,<br/>&nbsp;&nbsp;&quot;customerid&quot;: &quot;a7d1586b-ced1-462f-9e44-14e9e5013540&quot;,<br/>&nbsp;&nbsp;&quot;description&quot;: &quot;Composite Oversize 28in Tennis Racket&quot;,<br/>&nbsp;&nbsp;&quot;id&quot;: &quot;1eba7af9-b748-4754-b750-3459e589dccf&quot;,<br/>&nbsp;&nbsp;&quot;region&quot;: &quot;EMEA&quot;,<br/>&nbsp;&nbsp;&quot;ordertime&quot;: &quot;2023-10-24 19:26:04.839&quot;,<br/>&nbsp;&nbsp;&quot;customer&quot;: &quot;Reed McKenzie DDS&quot;<br/>}"></inline-code><img src="../300-integration-event-automation-common/images/2-Flow-1stEventSourceSample.png" width="800" /> |
| **Action** &nbsp; {{ page.nocodeeditor }}.1.14 | Click on **Configure**.<br/> <img src="../300-integration-event-automation-common/images/2-Flow-1stEventSourceComplete.png" width="800" /> |

<br/>

| **{{ page.nocodeeditor }}.2** | **Configure an event source for the customer events** |
| :--- | :--- |
| **Narration** | TEXT |
| **Action** &nbsp; {{ page.nocodeeditor }}.2.1 | Press and hold the mouse button on the **Event source** (1) node, and drag onto the canvase (2).<br/> <img src="../300-integration-event-automation-common/images/2-Flow-2ndEventSourceDrag.png" width="800" /> |
| **Action** &nbsp; {{ page.nocodeeditor }}.2.2 | Click on the added node and select the **edit** icon.<br/> <img src="../300-integration-event-automation-common/images/2-Flow-2ndEventSourceEdit.png" width="800" /> |
| **Action** &nbsp; {{ page.nocodeeditor }}.2.3 | Select the **Add event source** (1) tile and click on **Next** (2).<br/> <img src="../300-integration-event-automation-common/images/2-Flow-2ndEventSourceAdd.png" width="800" /> |
| **Action** &nbsp; {{ page.nocodeeditor }}.2.4 | Return to the Event Endpoint Management console and scroll down to the Access information. Copy the server address details.<br/> <img src="../300-integration-event-automation-common/images/2-Flow-EEMAddress.png" width="800" /> |
| **Action** &nbsp; {{ page.nocodeeditor }}.2.5 | Type **Customers** (1) for the node name, paste the server address into the **Server** (2) field, and click **Next** (3).<br/> <img src="../300-integration-event-automation-common/images/2-Flow-2ndEventSourceServerDetails.png" width="800" /> |
| **Action** &nbsp; {{ page.nocodeeditor }}.2.6 | Check the **Accept certificates** (1) box and select **Next** (2).<br/> <img src="../300-integration-event-automation-common/images/2-Flow-2ndEventSourceAcceptCerts.png" width="800" /> |
| **Action** &nbsp; {{ page.nocodeeditor }}.2.7 | Copy the username (1) and password (2) from step {{ page.browsingselfservice }}.1.4, and click **Next** (3).<br/> <img src="../300-integration-event-automation-common/images/2-Flow-2ndEventSourceCredentials.png" width="800" /> |
| **Action** &nbsp; {{ page.nocodeeditor }}.2.8 | Check **CUSTOMERS** (1) and click **Next** (3).<br/> <img src="../300-integration-event-automation-common/images/2-Flow-2ndEventSourceSelectTopic.png" width="800" /> |
| **Action** &nbsp; {{ page.nocodeeditor }}.2.9 | Click on **Upload a schema or sample message** (1).<br/> <img src="../300-integration-event-automation-common/images/2-Flow-2ndEventSourceUploadSample.png" width="800" /> |
| **Action** &nbsp; {{ page.nocodeeditor }}.2.10 | Select the **Sample message** (1) tab, copy the text below into the **Enter sample message** (2) box, and click **Close** (3).<br/> <br/><inline-code code="{<br/>&nbsp;&nbsp;&quot;customerid&quot;: &quot;acb3eb65-98a1-45c2-84d4-f5df157862b4&quot;,<br/>&nbsp;&nbsp;&quot;customername&quot;: &quot;Emilio Quitzon&quot;,<br/>&nbsp;&nbsp;&quot;registered&quot;: &quot;2023-10-24 19:20:35.638&quot;<br/>}"></inline-code><img src="../300-integration-event-automation-common/images/2-Flow-2ndEventSourceSample.png" width="800" /> |
| **Action** &nbsp; {{ page.nocodeeditor }}.2.11 | Click on **Configure**.<br/> <img src="../300-integration-event-automation-common/images/2-Flow-2ndEventSourceComplete.png" width="800" /> |

<br/>

| **{{ page.nocodeeditor }}.3** | **Filter orders over 100 dollars** |
| :--- | :--- |
| **Narration** | TEXT |
| **Action** &nbsp; {{ page.nocodeeditor }}.3.1 | Press and hold the mouse button on the **Filter** (1) node and drag onto the canvase (2).<br/> <img src="../300-integration-event-automation-common/images/2-Flow-FilterDrag.png" width="800" /> |
| **Action** &nbsp; {{ page.nocodeeditor }}.3.2 | Hover over the Order output terminal and hold the mouse button down.<br/> <img src="../300-integration-event-automation-common/images/2-Flow-FilterConnectSource1.png" width="800" /> |
| **Action** &nbsp; {{ page.nocodeeditor }}.3.3 | Drag the connection to the filter's input terminal and release the mouse button.<br/> <img src="../300-integration-event-automation-common/images/2-Flow-FilterConnectTarget.png" width="800" /> |
| **Action** &nbsp; {{ page.nocodeeditor }}.3.4 | Click on the Filter node and select the **edit** icon.<br/> <img src="../300-integration-event-automation-common/images/2-Flow-FilterEdit.png" width="800" /> |
| **Action** &nbsp; {{ page.nocodeeditor }}.3.5 | Enter **FilterLargeOrders** (1) for the node name and click **Next** (2).<br/> <img src="../300-integration-event-automation-common/images/2-Flow-FilterName.png" width="800" /> |
| **Action** &nbsp; {{ page.nocodeeditor }}.3.6 | Click on the **Assistance** pull down.<br/> <img src="../300-integration-event-automation-common/images/2-Flow-FilterAssistance.png" width="800" /> |
| **Action** &nbsp; {{ page.nocodeeditor }}.3.7 | Select **price** (1) for the property, **> Is greater than** (2) for the condition and enter **100** (3) for the value. Click on **Add to expression** (4) to complete the input. <br/> <img src="../300-integration-event-automation-common/images/2-Flow-FilterCondition.png" width="800" /> |
| **Action** &nbsp; {{ page.nocodeeditor }}.3.8 | The completed conditional will be shown (1), click on **Configure** (2). <br/> <img src="../300-integration-event-automation-common/images/2-Flow-FilterComplete.png" width="800" /> |

<br/>

| **{{ page.nocodeeditor }}.4** | **Identify new customer orders over 100 dollars** |
| :--- | :--- |
| **Narration** | TEXT |
| **Action** &nbsp; {{ page.nocodeeditor }}.4.1 | Press and hold the mouse button on the **Interval join** node and drag onto the canvase.<br/> <img src="../300-integration-event-automation-common/images/2-Flow-JoinDrag.png" width="800" /> |
| **Action** &nbsp; {{ page.nocodeeditor }}.4.2 | Hover over the New Customer output terminal and hold the mouse button down.<br/> <img src="../300-integration-event-automation-common/images/2-Flow-JoinSourceConnect1.png" width="800" /> |
| **Action** &nbsp; {{ page.nocodeeditor }}.4.3 | Drag the connection to the intervalJoin_1 input terminal and release the mouse button.<br/> <img src="../300-integration-event-automation-common/images/2-Flow-JoinSourceConnect2.png" width="800" /> |
| **Action** &nbsp; {{ page.nocodeeditor }}.4.4 | Complete the same process to connect the FilterLargeOrders output terminal.<br/> <img src="../300-integration-event-automation-common/images/2-Flow-JoinSourceConnect4.png" width="800" /> |
| **Action** &nbsp; {{ page.nocodeeditor }}.4.5 | Click on the intervalJoin_1 node and select the **edit** icon.<br/> <img src="../300-integration-event-automation-common/images/2-Flow-JoinEdit.png" width="800" /> |
| **Action** &nbsp; {{ page.nocodeeditor }}.4.6 | Enter **DetectNewCustomerLargeOrder** (1) for the node name and click **Next** (2).<br/> <img src="../300-integration-event-automation-common/images/2-Flow-JoinName.png" width="800" /> |
| **Action** &nbsp; {{ page.nocodeeditor }}.4.7 | Click on the **Assistance** (1) pull down. Select **customerId** (2) (3) from both pull downs and click **Add to expression** (4) to complete the input. <br/> <img src="../300-integration-event-automation-common/images/2-Flow-JoinCondition.png" width="800" /> |
| **Action** &nbsp; {{ page.nocodeeditor }}.4.8 | The completed conditional will be shown, click on **Next**. <br/> <img src="../300-integration-event-automation-common/images/2-Flow-JoinConditionComplete.png" width="800" /> |
| **Action** &nbsp; {{ page.nocodeeditor }}.4.9 | Select **FilterLargeOrders (event_time)** for the event to detect.<br/> <img src="../300-integration-event-automation-common/images/2-Flow-JoinTimeWindow1.png" width="800" /> |
| **Action** &nbsp; {{ page.nocodeeditor }}.4.10 | Select **New Customers (event_time)** (1) for the event to set the time window, change the metric to **hours** (2), number of hours to **24** (3), and click **Next** (4).<br/> <img src="../300-integration-event-automation-common/images/2-Flow-JoinTimeWindow2.png" width="800" /> |
| **Action** &nbsp; {{ page.nocodeeditor }}.4.11 | Remove the duplicate fields: customerid (1), event_time (2).<br/> <img src="../300-integration-event-automation-common/images/2-Flow-JoinRemoveDuplicates.png" width="800" /> |
| **Action** &nbsp; {{ page.nocodeeditor }}.4.12 | Click **Configure**.<br/> <img src="../300-integration-event-automation-common/images/2-Flow-JoinConfigComplete.png" width="800" /> |

<br/>


**[Go to top](#place1)**

<br/><br/>

</details>

<p/>

<details markdown="1">

<summary>{{ page.outputtomarketing }} - Sending the output to the marketing application </summary>

<br/>

| **{{ page.outputtomarketing }}.1** | **Configure an event destination for the customer events** |
| :--- | :--- |
| **Narration** | TEXT |
| **Action** &nbsp; {{ page.outputtomarketing }}.1.1 | Press and hold the mouse button on the **Event destination** (1) node and drag onto the canvase (2).<br/> <img src="../300-integration-event-automation-common/images/2-Flow-DestinationDrag.png" width="800" /> |
| **Action** &nbsp; {{ page.outputtomarketing }}.1.2 | Hover over the DetectNewLargeOrder output terminal and hold the mouse button down.<br/> <img src="../300-integration-event-automation-common/images/2-Flow-DestinationConnect1.png" width="800" /> |
| **Action** &nbsp; {{ page.outputtomarketing }}.1.3 | Drag the connection to the sink_1 input terminal and release the mouse button.<br/> <img src="../300-integration-event-automation-common/images/2-Flow-DestinationConnect2.png" width="800" /> |
| **Action** &nbsp; {{ page.outputtomarketing }}.1.4 | Click on the sink_1 node and select the **edit** icon.<br/> <img src="../300-integration-event-automation-common/images/2-Flow-DestinationEdit.png" width="800" /> |
| **Action** &nbsp; {{ page.outputtomarketing }}.1.5 | Enter **OutputToMarketingApp** (1) for the node name, **ademo-es-kafka-bootstrap.cp4i.svc:9095** (2) in the server field and click **Next** (3).<br/> <img src="../300-integration-event-automation-common/images/2-Flow-DestinationName.png" width="800" /> |
| **Action** &nbsp; {{ page.outputtomarketing }}.1.6 | Check **Accept certificates** (1) and click **Next** (2).<br/> <img src="../300-integration-event-automation-common/images/2-Flow-DestinationAcceptCert.png" width="800" /> |
| **Action** &nbsp; {{ page.outputtomarketing }}.1.7 | Specify **es-admin** (1) for the username, the password (2) value was outputted in the preparation section, and click **Next** (3). <br/> <img src="../300-integration-event-automation-common/images/2-Flow-DestinationCredentials.png" width="800" /> |
| **Action** &nbsp; {{ page.outputtomarketing }}.1.8 | Select **LOYALTY.APP** (1) and click **Configure** (2).<br/> <img src="../300-integration-event-automation-common/images/2-Flow-DestinationSelectTopic.png" width="800" /> |

  
<br/>

| **{{ page.outputtomarketing }}.2** | **Running the flow with historical events** |
| :--- | :--- |
| **Narration** | TEXT |
| **Action** &nbsp; {{ page.outputtomarketing }}.2.1 | Click on **Save**.<br/> <img src="../300-integration-event-automation-common/images/3-Flow-SaveFlow.png" width="800" /> |
| **Action** &nbsp; {{ page.outputtomarketing }}.2.2 | Select the **Run** (1) pull down and click **Include historical**.<br/> <img src="../300-integration-event-automation-common/images/3-Flow-RunHistorical.png" width="800" /> |
| **Action** &nbsp; {{ page.outputtomarketing }}.2.3 | View the detected events.<br/> <img src="../300-integration-event-automation-common/images/3-Flow-OutputEvents.png" width="800" /> |


<br/>

**[Go to top](#place1)**

<br/><br/>

</details>

<p/>
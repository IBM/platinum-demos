---
title: Using Instana to observe Cloud Pak for Integration <br/>300-level live demo
layout: demoscript
banner: images/using-instana-to-observe-CP4I-300-script-github-banner.jpg
---

<span id="top"></span>

<details markdown="1">

<summary>Introduction</summary>

Today we will see how a bank uses IBM Instana to monitor the IBM Cloud Pak for Integration. The bank's mobile application is based on a microservices architecture, with independently developed components working together to provide customers access to their accounts. The application uses a collection of technologies, including MQ, App Connect Enterprise, API Connect, Node.js, WebSphere Liberty and DB2.

Instana is able to automatically discover the relationships between these components by tracking every message as it passes through the system. This tracking is based on Open Telemetry and is designed to minimize the performance impact of collecting this data. 

We will start by seeing how Instana examines the activity and health
of these components, using MQ as an example. We'll then see how the bank is alerted to a live production issue. The team will visualize the banking application that is experiencing the issue, with auto-correlated events highlighted within the context of that application. The team will then drill down into the root cause to understand how to resolve the issue and prevent it from happening in the future.

Let’s get started!

(Demo intro slides <a href="https://ibm.box.com/s/c7h0gc1wy16yyhiy7ygrxad4vj5wl1km" target="_blank" rel="noreferrer">here</a>)

(Printer-ready PDF of demo script <a href="https://ibm.box.com/s/fd0ceiezrh9hjg2fe3gea2ge15y6zwt3" target="_blank" rel="noreferrer">here</a>)

**[Go to top](#top)**

<br/><br/>
</details>

<span id="ViewingIntegration"></span>
<details markdown="1">

<summary>1 - Viewing your integration deployments</summary>

<br/> 

| **1.1** | **Understand the Instana platform** |
| :--- | :--- |
| **Narration** | Focus Bank uses a microservices architecture for their application development. IBM API Connect exposes REST APIs to the application, IBM MQ provides the reliable communication, and IBM App Connect Enterprise the glue between microservices. The integration and application teams and the SRE (Site Reliability Engineer) need to be able to observe the environment and be alerted to issues that occur. They need to work together, collaboratively, to assure the bank’s applications are available.<br/><br/>IBM Instana provides a full-stack observability platform. The home screen shows five categories, which act as launch points based on your role:<br/><br/>1. 'Website & Mobile Apps' shows the end-user interaction and their experiences.<br/><br/>2. 'Applications' focuses on the server-side of the application, such as the number of calls, latency, and error call rate. <br/><br/>3. 'Platform' shows the target deployment environments that are used for the applications, such as Kubernetes, Cloud Foundry and vSphere.<br/><br/>4.	'Infrastructure' shows with the physical and virtualized servers underpinning the applications.<br/><br/>5. 'Events' highlights the incidents that the operational team should be reviewing. <br/><br/>These views are built by Instana agents that are installed on each of the monitored hosts. The agents automatically capture every service invocation, which are sent to the Instana back-end server for aggregation and analytics. Each agent has several technology sensors that understand how to collect the data - for instance there are MQ, App Connect Enterprise, DataPower and DB2 sensors. |
| **Action** &nbsp; 1.1.1 | Show the Instana home screen and explain each category.<br><img src="images/1-1-1-instana-home-screen.png" width="800" /> |

| **1.2** | **View the entire network** |
| :--- | :--- |
| **Narration** | Let’s look at Focus Bank’s infrastructure.<br/><br/>Instana provides an infrastructure map across the entire estate. This is automatically discovered by the Instana agents, with additional user categorization possible. <br/><br/>In Instana, servers are referred to as hosts. These hosts include those used for the integration technology as well as the microservices that make up the application. This view is not limited to a single data center - it is a global hybrid multi-cloud view where hosts are on-premises and in public cloud environments.<br/><br/>If we click one of the hosts, this will show the hardware specification and immediately highlight any issues with the infrastructure. In this case, there are no issues. Scrolling down, we can see the components installed: IBM MQ, IBM App Connect Enterprise and several others. <br/><br/>Let’s click into the host dashboard to take a deeper look. |
| **Action** &nbsp; 1.2.1 | Click the **infrastructure** icon.<br><img src="images/1-2-1-infrastructure-icon.png" width="800" /> |
| **Action** &nbsp; 1.2.2 | Point out that the servers are configured for this Instana instance. The servers are distributed across the globe: a server in **us-central** (1), while another is in **westeurope** (2).<br><img src="images/1-2-2-servers.png" width="800" /> |
| **Action** &nbsp; 1.2.3 | Zoom into the **america-cp4i** category and hover your mouse over each server to show the components. <br><img src="images/1-2-3-cp4i-category.png" width="800" /> |
| **Action** &nbsp; 1.2.4 | As you hover over each server, stop when you see **IBM MQ Queue Manager** within the list.<br><img src="images/1-2-4-mq-dashboard.png" width="800" /> |
| **Action** &nbsp; 1.2.5 | Click the server with IBM MQ and scroll down to view the components installed on the server. <br><img src="images/1-2-5-components.png" width="800" /> |
| **Action** &nbsp; 1.2.6 | Click **Open Dashboard**. <br><img src="images/1-2-6-open-dashboard.png" width="800" /> |

| **1.3** | **Examine IBM MQ’s metrics** |
| :--- | :--- |
| **Narration** | Instana displays details such as the operating system and hostname. Live and historical charts are available for various metrics such as CPU, memory, network and disk utilization. The software components running on the host can also be seen. <br/><br/>Let’s take a closer look at the MQ component. |
| **Action** &nbsp; 1.3.1 | Expand the **IBM MQ Queue Manager** section (1) and click the link (2).<br><img src="images/1-3-1-link.png" width="800" /> |
| **Narration** | Here we can see the details for the IBM MQ Queue Manager. This is the default view that Instana provides automatically. <br/><br/>The MQ agent understands how to collect the metrics. The live and historical metrics show the number of connections into the queue manager, the number of messages, and the configured MQ objects. If we look at the queues table, we can quickly filter and see the current state, such as the number of messages on the queue, and the time of the last put and get. We can dig deeper into all the queues, topics and applications associated with the queue manager, and see the details. |
| **Action** &nbsp; 1.3.2 | <inline-notification text="Two queue managers are used for the banking application. You could be in either queue manager at this point, depending on which machine and queue manager you selected previously. If the IBM MQ instance starts with **corebanking** (1), search for the BALANCE queue in the next step. Otherwise, search for AUDIT."></inline-notification> <br/>Scroll down to the **Queues** table (2), and type either **balance** or **audit** into the **Search bar** (3). (As explained in the note above, you might have either choice.) <br><img src="images/1-3-2-search.png" width="800" /> |
| **Action** &nbsp; 1.3.3 | Click the top queue.<br><img src="images/1-3-3-click-queue.png" width="800" /> |
| **Action** &nbsp; 1.3.4 | Point out the **queue attributes** (1), **number of messages processed** (2) and **old message on the queue** (3). <br><img src="images/1-3-4-details.png" width="800" /> |

**[Go to top](#top)**
<br/><br/>
</details>
<span id="Observe"></span>
<details markdown="1">

<summary>2 - Observing an application issue</summary>

<br/>

| **2.1** | **Review the application** |
| :--- | :--- |
| **Narration** | Instana has just sent Focus Bank’s SRE team an alert about a sudden increase in errors on their Banking application.<br/><br/>The alert shows up in the team's Slack channel, but it can also be configured to show up in PagerDuty, Microsoft Teams, and <a href="https://www.ibm.com/docs/en/instana-observability/current?topic=apis-alerting" target="_blank" rel="noreferrer">many others</a>.<br/><br/>Instana only sends alerts when end users are impacted, so the SREs know this is an issue that needs their attention.<br/><br/>The SRE team clicks on the Banking App summary tab and immediately sees that the erroneous call rate and latency has increased. Clearly something has suddenly started to go wrong. <br/><br/>The SRE team arranges a call with the application and integration teams so they can investigate together. Everyone on the call has a different level of knowledge of the application, so the team looks at the component topology. <br/><br/>They see the 'bankUI' microservice is where the communication starts. Requests from the ‘bankui’ pass through the API gateway (DataPower) to protect the downstream APIs from unauthorized access. There are six separate request flows:<br/><br/>• Transfer – implemented using App Connect<br/>• Balance – implemented using App Connect<br/>• Audit – implemented using App Connect<br/>• Notification – implemented using Node.js<br/>• Fraud – implemented using Java in Open Liberty<br/>• Authentication – implemented using Java in Open Liberty<br/><br/>Some of these depend on further downstream components such as IBM MQ and DB2. All of these components and their relationships are automatically discovered and visually displayed. <br/><br/>They can see there are problems with the application because several services are highlighted in yellow. |
| **Action** &nbsp; 2.1.1 | Change the time period Instana is showing to 45 minutes past the hour, for a 15 minute window (1). Click **Set Time** (2).<br><img src="images/2-1-1-set-time.png" width="800" /> |
| **Action** &nbsp; 2.1.2 | Click the **Application** icon (1), and select **Banking App** (2) from the table.<br><img src="images/2-1-2-banking-app.png" width="800" /> |
| **Action** &nbsp; 2.1.3 | Show the **Erroneous Call Rate** (1) and **Latency** (2) graphs. Click the **Dependencies** (3) tab.<br><img src="images/2-1-3-graphs-dependencies.png" width="800" /> |
| **Action** &nbsp; 2.1.4 | Click through the components connected to the right of DataPower, pausing to show the technology being used and the summarized view. <br><img src="images/2-1-4-summarized-view.png" width="800" /> |
 
**[Go to top](#top)**
<br/><br/>
</details> 
<span id="Inspect"></span>
<details markdown="1">

<summary>3 - Inspecting auto-correlated incidents</summary>

<br/>

| **3.1** | **Examine the issue** |
| :--- | :--- |
| **Narration** | The SRE team clicks on the issue to inspect in more detail.<br/><br/>They see all the issues correlated together for the current incident on the events page. Instana classifies events into three categories:<br/><br/>1. Changes, for example a configuration change that may have occurred in the environment.<br/>2. Issues, that are identified within an individual component.<br/>3. Incidents, which correlate issues and changes automatically together.<br/><br/>The teams can see that the incident is still active, and the triggering event is still highlighted. A graphical view of the error is shown, explaining when the error started and the rate of failure. |
| **Action** &nbsp; 3.1.1 | Click the **Issues** button (1) and select **Sudden increase in the number of erroneous calls** (2). <br><img src="images/3-1-1-sudden-increase.png" width="800" /> |
| **Action** &nbsp; 3.1.2 | Show the issue is still open (1). Click the **Analyze Calls** button (2).   <br><img src="images/3-1-2-analyze-calls-button.png" width="800" /> |
 
**[Go to top](#top)**
<br/><br/>
</details>
<span id="DrillingDown"></span>
<details markdown="1">

<summary>4 - Drilling down into the root cause</summary>

<br/>

| **4.1** | **View the calls via the dashboard** |
| :--- | :--- |
| **Narration** | The team navigates into the affected API invocations to investigate. Instana traces every step of an invocation, without sampling, assuring all components are traced and allowing each technology area to be investigated. The team selects one of the invocations for further analysis. |
| **Action** &nbsp; 4.1.1 | Expand the **GET /api/balance** row, showing all the affected calls. <br><img src="images/4-1-1-affected-calls.png" width="800" /> |
| **Action** &nbsp; 4.1.2 | Click the invocation at the top of the list. <br><img src="images/4-1-2-click-call.png" width="800" /> |

| **4.2** | **Understand the impact and source of the incident** |
| :--- | :--- |
| **Narration** | The teams see a hierarchical view of the invocation, all the way from the end-user's web browser to the backend system. There are a number of sub-calls traced, and several are experiencing an undesirable delay and/or error. The timeline plots the duration of each sub-call, immediately highlighting where the issue may be located. |
| **Action** &nbsp; 4.2.1 | Highlight the **Sub Calls** (1), **Timeline** (2) and **Details** (3) section. <br><img src="images/4-2-1-highlight.png" width="800" /> |
| **Narration** | The team expands the call, allowing them to drill down and look at each step of the invocation. Within some components they can see sub-calls in an individual component, for instance individual input / output nodes in App Connect Enterprise. <br/><br/>The calls are automatically color labeled - one each for HTTP, MQ and JDBC traffic. As the team looks closer, they can identify the components that are bridging multiple protocols, as they have multiple colored bars. <br/><br/>At the top of the stack, they see that 503 – Service Unavailable is being returned to the calling application, with an approximate one second latency. They initially focus on the App Connect Enterprise calls and see the message put quickly onto the IBM MQ BALANCE.IN queue, to retrieve the balance. ACE then immediately waits for a response message on the BALANCE.OUT queue. This call fails after one second. The team suspects it may be an App Connect issue, but continues to look deeper. <br/><br/>They look at the emitted event and the MQ return code of 2033, which means ‘no message available’. App Connect tried to retrieve a response message for one second, and an error is returned when none were available. The teams agree that this suggests the issue is deeper into the call. They continue to dig into the call stack. <br/><br/>At the bottom of the call stack they can see an error connecting to the database from the Open Liberty Java application. The application team immediately investigates the issue, and are able to quickly resolve it. An issue that initially appeared to be a high latency in App Connect turned out to be an underlying database out-of-memory issue. All of this was discovered automatically by Instana. |
| **Action** &nbsp; 4.2.2 | <inline-notification text="As this is a live system, the number of sub-steps and the exact error message reported by the database may be different."></inline-notification> Expand the call stack (1). Highlight the **transport coloring** (2) and the high level errors (3).<br><img src="images/4-2-2-scroll-down.png" width="800" /> |
| **Action** &nbsp; 4.2.3 | Collapse and click the **Balance.get... MESSAGING** call. As highlighted in the narration, explain how App Connect successfully places the message on IBM MQ. <br><img src="images/4-2-3-balance-get.png" width="800" /> |
| **Action** &nbsp; 4.2.4 | Click the **! Balance.gen** call (1). On the right hand side, scroll down (2) and show the **messaging.ibmmq.return_code** value (3). As highlighted in the narration, explain how MQ did not receive a response message within a second, which caused it to time out. <br><img src="images/4-2-4-click-call.png" width="800" /> |
| **Action** &nbsp; 4.2.5 | Expand the call stack and click the **!** (1) call immediately below the JmsBytesMessage entry. As highlighted in the narration, explain how the database is unavailable (2), and this causes no response message being returned to App Connect. <br><img src="images/4-2-5-connect-call.png" width="800" /> |
 
| **4.3** | **See that the issue is resolved** |
| :--- | :--- |
| **Narration** | Now that Instana has identified the root cause, the application team resolves the issue and views the live transactions flowing through the application.<br/><br/>As the team sees, API calls are now taking tens of milliseconds and completing successfully. |
| **Action** &nbsp; 4.3.1 | Expand the **Time Range** section (1), then change the time period Instana is showing to 'on the hour', for a 30 minute window (2). Click **Set Time** (3). <br><img src="images/4-3-1-change-time.png" width="800" /> |
| **Action** &nbsp; 4.3.2 | Click the **Application** icon (1) and select the **Banking App** row (2).  <br><img src="images/4-3-2-banking-app.png" width="800" /> |(
| **Action** &nbsp; 4.3.3 | Point out that the **Calls** (1), **Erroneous Call Rate** (2) and **Latency** (3) have returned back to normal. <br><img src="images/4-3-3-normal.png" width="800" /> |
 
**[Go to top](#top)**
<br/><br/>

</details>
<span id="Summary"></span>
<details markdown="1">

<summary>Summary</summary>

You’ve seen how Instana can help make the process of identifying problems and finding their root cause frictionless across technology stacks. Since Instana automates so many of the manual and labor-intensive aspects of the process, you do not need to worry about instrumenting applications or constantly monitoring for problems. And when problems do arise, you'll have all the trace data is at your fingertips – assuring issues are resolved swiftly to minimize the impact to end-users.

Thank you for attending today’s demonstration.

**[Go to top](#top)**

</details>
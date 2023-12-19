---
title: Automating incident resolution in Instana using Ansible <br/>300-level live demo
layout: demoscript
banner: images/instana-ansible-banner-script.jpg
---

<span id="top"></span>

<details markdown="1">

<summary>Introduction</summary>

In this demo, we’ll see how we can analyze an incoming event in Instana and leverage the new Automation Framework (in Open Beta) to automatically remediate the issue using Red Hat Ansible. 

Our application is a content management app called Quote of the Day (QotD) that delivers personalized content via a mobile and web channel.  Due to a recent sales promotion the application has been receiving an exponential increase in user traffic. A notification has just been received indicating users are beginning to experience slow response times. We need to investigate and resolve the remediation found before additional users are impacted and to avoid a possible outage.

We will demonstrate how Instana integrates seamlessly with the Ansible Automation platform to identify potential playbooks that are good candidates to resolve an incident. We will then show how the playbook can be executed natively from Instana, eliminating the need to jump across tools to resolve an incident.

Let’s get started


<br/>

</details>

<p/>

<details markdown="1">

<summary>1 - Observing application health and the service interactions</summary>

<br/>

| **1.1** | **View golden signals of the Quote of the Day application** |
| :--- | :--- |
| **Narration** | Let’s first observe the golden signals of the Quote of the Day application. The golden signals consist of a set of four metrics that offer a wide view of the health of a service from the perspective of the end-user or consumer. The four metrics or signals are: Latency, Traffic, Errors and Saturation.|
| **Action** &nbsp; 1.1.1 | On the Instana navigation bar, click the **Applications** perspective icon <br/> <img src="images/1-1-1.png" width="800" /> |
| **Narration** | An Application Perspective (AP) is a power tool for monitoring, alerting, and analysis of a microservice environment. Each Application Perspective auto-generates a feature rich monitoring dashboard for the golden signals. It helps organize teams to stay focused on the services they are interested in. Let’s now drill into the Quote of the Day cloud-native application. |
| **Action** &nbsp; 1.1.2 | Click the **Quote of the Day** application. <br/> <img src="images/1-1-2.png" width="800" /> |
| **Action** &nbsp; 1.1.3 | Click the **Summary** tab (1). Set the time period to **Last 10 minutes** (2). Click **Live** (3). <br/> <img src="images/1-1-3.png" width="800" /> |
| **Narration** | By examining the golden signals we can quickly detect any potential problems that might be directly affecting the behavior of the Quote of the Day (QotD) application.<br/><br/> Observe the increase in both the erroneous call rate (1) and the mean service latency (2). Also notice that in the 'Top Services' chart, the 'qotd-rating' service is now at the top of the list (3) |
| **Action** &nbsp; 1.1.4 | Ensure you are on the **Summary** tab. If not, click the **Summary** tab. <br/> <img src="images/1-1-4.png" width="800" /> |

<br/>

| **1.2** | **Assess service dependencies** |
| :--- | :--- |
| **Narration** | The golden signals provide an aggregate view of all the services in the application. To drill down into more granular detail we should first understand how the services are interconnected. Instana automatically discovers the relationships between the services and correlates them into a application dependency graph. |
| **Action** &nbsp; 1.2.1 | Click the **Dependencies** tab. <br/> <img src="images/1-2-1.png" width="800" /> |
| **Narration** | We can see how the requests are moving through the application in real time. Instana captures 100% of all traces that flow through the application and is able to automatically analyze this information to pin-point hot spots in the request flows.<br/><br/> We can quickly tell that there are some problems with the application because several services are highlighted in yellow and red. From the service dependency graph we can see that the Rating service is having a performance issue. |

**[Go to top](#place1)**

<br/><br/>

</details>

<p/>

<details markdown="1">

<summary>2 - Inspecting the incoming event</summary>

<br/>

| **2.1** | **Examine the event details** |
| :--- | :--- |
| **Narration** | Instana determines how the events are related and only generates an alert if the underlying event or group of events could potentially impact end-users. Let’s examine the critical events detected by Instana. |
| **Action** &nbsp; 2.1.1 | Click the **Issues** tab on the Event page. <br/> <img src="images/2-1-1.png" width="800" /> |
| **Action** &nbsp; 2.1.2 | Click on **Pod containers not ready** event <br/> <img src="images/2-1-2.png" width="800" /> |
| **Narration** | Each Instana issue contains three components: severity, start times and end times. The chart plots metric values relevant to the problem. The performance issue is still active and needs to be resolved to address the current end-user experience problems. |

**[Go to top](#place1)**

<br/><br/>

</details>

<p/>

<details markdown="1">

<summary>3 - Reviewing the event remediation recommendations</summary>

<br/>

| **3.1** | **Review the recommendations** |
| :--- | :--- |
| **Narration** | Before we take a look at the specific event remediations, let’s first understand how Instana goes beyond pure observability to enable you take remedial action on an incoming event without ever leaving the Instana environment. <br/><br/> This new incident remediation feature is referred to as the Action Framework. The Action Framework is a collection of capabilities that allow you to define and manage a remediation. The Action Catalog is a central component of the Action Framework that allows you to manage the lifecycle of the remediations. The Action Framework can also interoperate with and leverage external automation platforms like Ansible.<br/>The event page lists the details behind the underlying cause of the event. By leveraging the Action Framework, Instana can automatically fix the issue. The Event Details page is now enriched with a list of potential remedial actions that can be executed directly within Instana to resolve this issue. |
| **Action** &nbsp; 3.1.1 | Review the **Recommended Actions** section. <br/> <img src="images/3-1-1.png" width="800" /> |
| **Narration** | The 'Recommended Actions' section enumerates an AI-derived list of recommendations, sorted by a confidence score. You can associate any or all of these recommendations to this event by clicking the “+” icon. <inline-notification text="Since this is a read-only environment we will not be adding this recommendation to the list of actions in the event. "></inline-notification> The Action Type indicates that the remediation is contained in an Ansible playbook. The confidence score is derived based on several factors, such as the action definitions, action tags, and the meta data from the event. The confidence score attempts to approximate the likelihood that the action will fix this event. The confidence scores are sorted in decreasing order of confidence.<br/>We will next select a remediation to resolve the current active event.|
<br/>

| **3.2** | **Choose a remediation to execute** |
| :--- | :--- |
| **Narration** | The 'Associated Actions' section is new and provided by the Automation Framework. When an event is raised, the AI-derived list of recommended remediations is also attached and available for convenience. This significantly reduces the mean time to fix the incident. We have the option to add additional actions and recommendations if they are no longer relevant to the event. These actions and recommendations will be persisted with this event. Any future occurrence of this event will then carry these newly added remediations.  |
| **Action** &nbsp; 3.2.1 | View the **Associated Actions** tab (1). Select **Get pod events**. Click **Run** (2). <br/> <img src="images/3-2-1.png" width="800" /> |
| **Narration** | Actions are executed on target nodes or agents. Let’s specify the Instana agent and host on which this action should be executed. |
| **Action** &nbsp; 3.2.2 | Set **Hosts** (1) and **Target Agent** (2) with the values shown. Then click **Run action** (3). <br/> <img src="images/3-2-2.png" width="800" /> |
| **Action** &nbsp; 3.2.3 | Click **OK** <br/> <img src="images/3-2-3.png" width="800" /> |
| **Narration** | The remediation is now kicked off. Instana will connect with Ansible to initiate the execution of the Ansible playbook. While the playbook is executing, let’s dive deeper into the Instana-Ansible integration. |

**[Go to top](#place1)**

<br/><br/>

</details>

<p/>

<details markdown="1">

<summary>4 - Understanding the execution steps of the remediation</summary>

<br/>

| **4.1** | **Explore the Instana Action Framework** |
| :--- | :--- |
| **Narration** | The Instana Action Framework bridges the integration between Instana and the Ansible automation platform. You can use this framework to create and manage user-defined automation actions natively in Instana, or leverage any automations already defined in Ansible to automatically remediate incoming events. |
| **Action** &nbsp; 4.1.1 | Click **Automation** in the navigation menu. <br/> <img src="images/4-1-1.png" width="600" /> |
| **Narration** | The Action Catalog is a key component of the Action Framework. It serves as a repository of all the known remediations, also called Actions. You can use the Action Catalog to create new Actions or view existing remediations from third party automation providers such as Ansible.<br/> Let’s browse the remediations currently configured in the Action Catalog. |
| **Action** &nbsp; 4.1.2 | On the **Automation** page, click the **Action Catalog**. <br/> <img src="images/4-1-2.png" width="800" /> |
| **Narration** | Notice the action framework supports three types of actions: a Documentation Link action, a Script action and an HTTP action.
 <br/><br/> Let’s understand each of these actions: <br/><br/> • The 'Documentation Link' action: Provides access to the relevant documentation to diagnose or remediate a known issue directly from the event context. <br/> • The 'Script' action: Is an automation script that can run on your agent using a Script Action Sensor that is part of the Automation Framework <br/> • The 'HTTP' action: Specifies HTTP calls to invoke webhooks or other REST APIs on your agent by using the new HTTP action sensor. <br/><br/> The Instana-Action Framework synchronizes with the Red Hat Ansible Automation Platform (RHAAP) and imports the pre-defined Ansible playbooks. The ingested Ansible playbooks are categorized in the Instana Action Catalog as Ansible actions. <br/> Let’s examine a sample remediation. |
| **Action** &nbsp; 4.1.3 | Select the **Resolve Rating Latency** action <br/> <img src="images/4-1-3.png" width="800" /> |
| **Narration** | Ansible playbooks are configured in the enterprise-wide Red Hat Ansible Automation Platform. Automation Controller is the command-and-control center for RHAAP. It serves as a central location to configure and manage how automations run across your enterprise infrastructure. In this demo you may optionally explore all the Ansible playbooks in RHAAP. |

**[Go to top](#place1)**

<br/><br/>

</details>

<p/>

<details markdown="1">

<summary>5 - Validating the proper execution of the remediation action</summary>

<br/>

| **5.1** | **Check the execution status of the remediation flow** |
| :--- | :--- |
| **Narration** | Now that we have a better idea about how the Instana-Ansible integration works, let’s go back and check the execution status of the remediation we ran earlier. We need to remediate the active event that was generated by the health issue of the Rating service. |
| **Action** &nbsp; 5.1.1 | On the **Action History** page, select the **Get Pod events** remediation. <br/> <img src="images/5-1-1.png" width="600" /> |
| **Narration** | Notice the 'Start Time' and 'End Time' indicating that the remediation has completed. The 'Status' field on the far left validates the successful completion of the remediation.  |
| **Action** &nbsp; 5.1.2 | Click the **View Log** link. <br/> <img src="images/5-1-2.png" width="600" /> |
| **Narration** | Each action has at least two log entries: the 'Start' and 'Stop' entries. The log output displays the steps of the script execution to help track the execution progress of the remediation. |
| **Action** &nbsp; 5.1.3 | Click the **End running action** log entry (1).<br/> <img src="images/5-1-3.png" width="600" /><br/> Ensure that the overall status of the Ansible playbook was successful. Also verify the Host it was executed on and the underlying reason of the failure. |
| **Narration** | The logs displayed reflect the output of the Ansible playbook. It is generated on the host that executed it. It is captured and piped back to Instana by the agent running on the executing host. There are four key pieces of information to look for in the log output:<br/>1. The event name (verify that you are looking at the right event) – ‘Get pod events’.<br/>2. The underlying reason causing the event.<br/> 3. The status of the execution of the action. In this case 'Success'indicates that the playbook executed all steps without any failures.<br/>4. The host on which the action was executed. |

<br/>

| **5.2** | **Monitor the status of the Ansible playbook execution** |
| :--- | :--- |
| **Narration** | To end the demo, we will check the status of the playbook execution in Ansible. Note that the SRE does not need to go to Ansible at all. They can stay within Instana to perform all the remediation work. However, if there are failures it helps to understand the state of Ansible and ensure that the connectivity between Instana and Ansible is functioning and that the two platforms are properly synchronized. |
| **Action** &nbsp; 5.2.1 | On the Ansible console, select **Jobs** and look for **Get pod events** (2). <br/> <img src="images/5-2-1.png" width="800" />|
| **Narration** | A job is an instance of an Anisble playbook against an inventory of hosts. |
| **Action** &nbsp; 5.2.1 | On the Ansible console under **Resources**, select **Templates**.<br/> <img src="images/5-2-2.png" width="800" /> |
| **Narration** | A job template is a definition and set of parameters for running an Ansible playbook. Review the list of playbooks that are currently available, in addition to our 'Get pod events'. Job templates encourage the reuse of Ansible playbook content and collaboration between teams. |


**[Go to top](#place1)**

<br/><br/>

</details>

<p/>

<details markdown="1">

<summary>Summary</summary>

In this demo we demonstrated how the Automation Framework elevates Instana beyond just an observability tool that does rapid root cause analysis, to also include incident resolution. The Instana-Ansible integration enables IT Ops teams to automatically execute remedial actions in a timely manner, right from within Instana without having to hop across other automation tools. This feature accelerates the time to fix an incident and drastically reduces down time.

Thank you for attending today’s presentation.

**[Go to top](#place1)**

<br/><br/>

</details>
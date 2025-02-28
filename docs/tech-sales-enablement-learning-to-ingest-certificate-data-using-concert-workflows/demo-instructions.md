---
title: Using a Concert Workflow to automate certificate discovery and ingestion into IBM Concert <br/> <small> <i> Tech Sales enablement </i> </small>
layout: demo-instructions
---

<span id="top"></span>

<br/>

Click the [**Pre-requisites**](pre-requisites) tab for setup instructions.

<details markdown="1">

<summary>Introduction</summary>

In this demo, we will build and run a Concert Workflow to understand how a customer will automate the certificate discovery and ingestion process. This method can then be used for building workflows and ingesting certificates during a proof of value with a customer.

<br/>

</details>

<p/>

<details markdown="1">

<summary>Creating a Concert Workflow</summary>

| **1.1** | **Placeholder** |
| :--- | :--- |
| **Narration** | Navigate to **Workflows** within Concert, then click **Manage** |
| **Action** &nbsp; 1.1 | <br/> <img src="images/1-1.png" width="800" /> |
| **Narration** | Click **Create Workflow**, fill in the workflow information giving the workflow a name and description. |
| **Action** &nbsp; 1.2 | <br/> <img src="images/1-2.png" width="800" /> |
| **Narration** | Using the search bar, find the openshift integration |
| **Action** &nbsp; 1.3 | <img src="images/1-3.png" width="800" /> |
| **Narration** | Within the Openshift integration, find the **List Certificates Signing Request** action, then drag and drop it onto the flow underneath start. |
| **Action** &nbsp; 1.4 | <img src="images/1-4.png" width="800" /> |
| **Narration** | Next search for IBM. |
| **Action** &nbsp; 1.5 | <br/> <img src="images/1-5.png" width="800" /> |
| **Narration** | Within the IBM integration, navigate to **Concert**, then **Import Data**. Then drag and drop the **Upload Certificate Details** action. |
| **Action** &nbsp; 1.6 | <br/> <img src="images/1-6.png" width="800" /> |

<br/>

</details>

<p/>

<details markdown="1">

<summary>Creating a Workflow Authentication</summary>

| **1.1** | **Placeholder** |
| :--- | :--- |
| **Narration** | Navigate to **Workflows** within Concert, then click **Authentications** |
| **Action** &nbsp; 2.1 | <br/> <img src="images/2-1.png" width="800" /> |
| **Narration** | Click **Create Authenitcation**, fill in the authentication information giving it a name and description. Then select **Openshift** as the Service. Next fill in the Host, Port and API Token for the Openshift Cluster. |
| **Action** &nbsp; 2.2 | <br/> <img src="images/1-2.png" width="800" /> |
| **Narration** | Click **Create**. Then navigate back to the Certificate Discovery Workflow. |
| **Narration** | Within the Workflow, click on the **Openshift_1** action. Then change the **authKey** dropdown to the authentication which was just created. |
| **Action** &nbsp; 2.3 | <img src="images/2-3.png" width="800" /> |
| **Narration** | Save the workflow, and click **Run** |
| **Action** &nbsp; 2.4 | <br/> <img src="images/2-4.png" width="800" /> |
| **Narration** | Certificates have now been discovered from the customers cluster and ingested |
| **Action** &nbsp; 2.5 | <br/> <img src="images/2-5.png" width="800" /> |

<br/>

</details>

<p/>

<details markdown="1">

<summary>Summary</summary>

In this demo, we saw how to create a workflow to discover and ingest certificate details from an openshift cluster, and how to create the authentication with that cluster. 

Once Certificate data is ingested successfully into Concert, operations teams can review the Certificate expiration dates and automate the rotation of those certificates.

**[Go to top](#top)**

<br/><br/>

</details>
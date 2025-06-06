---
title: Using a Concert Workflow to automate certificate discovery and ingestion into IBM Concert <br/> <small> <i> Tech Sales enablement </i> </small>
layout: resources
---

<span id="top"></span>

### Introduction

In this demo, we will build and run a Concert Workflow to understand how a customer will automate the certificate discovery and ingestion process. This method can then be used for building workflows and ingesting certificates during a Proof of Value with a customer.

### Pre-requisites

Below is a list of pre-requisites that need to be set up prior to beginning this PoV.

* <a href="https://techzone.ibm.com/collection/tech-zone-certified-base-images/journey-vmware-on-ibm-cloud-environments" target="_blank" rel="noreferrer">OpenShift cluster</a> with public ingress<br/>
* IBM Concert <a href="https://techzone.ibm.com/collection/tech-zone-certified-base-images/journey-watsonx" target="_blank" rel="noreferrer">(VM or OCP)</a> <br/>

### 1 - Creating a Concert Workflow

**1.1:** Navigate to **Workflows** within Concert, and click **Manage**. <br/> <img src="images/1-1.png" width="800" />

**1.2:** Click **Create Workflow**. Fill in the workflow information, giving the workflow a **Name** and **Description**. <br/> <img src="images/1-2.png" width="800" />

**1.3:** Using the search bar, find the **OpenShift** integration. <br/> <img src="images/1-3.png" width="400" />

**1.4:** Within the OpenShift integration, find the **List Certificates Signing Request** action. Drag and drop it onto the flow underneath **Start**. <br/> <img src="images/1-4.png" width="800" />

**1.5:** Search for '**IBM**' using the search bar. <br/> <img src="images/1-5.png" width="400" />

**1.6:** Within the IBM integration, navigate to **Concert** and then **Import Data**. Drag and drop the **Upload Certificate Details** action onto the flow. <br/> <img src="images/1-6.png" width="800" />

<br/>

### 2 - Creating a workflow authentication

**2.1:** Navigate to **Workflows** within Concert, and click **Authentications**. <br/> <img src="images/2-1.png" width="800" />

**2.2:** Click **Create Authentication**. Fill in the authentication information, giving it a **Name** and **Description**. Select **OpenShift** as the **Service**. Fill in the **Host**, **Port** and **API Token** for the OpenShift cluster. Click **Create**. Then navigate back to the **Certificate Discovery Workflow**. <br/> <img src="images/2-2.png" width="500" />

**2.3:** Within the workflow, click the **OpenShift_1** action. Then change the **authKey** dropdown to the authentication that was just created. <br/> <img src="images/2-3.png" width="800" />

**2.4:** Save the workflow and click **Run**. <br/> <img src="images/2-4.png" width="500" />

**2.5:** Certificates have now been discovered from the customer's cluster and ingested. <br/> <img src="images/2-5.png" width="1100" />

<br/>

### Summary

In this demo, we saw how to create a workflow to discover and ingest certificate details from an OpenShift cluster, as well as how to create the authentication with that cluster. 

Once certificate data is ingested successfully into Concert, the operations teams can review the certificate expiration dates and automate the rotation of those certificates.

**[Go to top](#top)**
---
title: Compliance Proof of Value <br/> <small> <i> Tech Sales enablement </i> </small>
layout: resources
---

<span id="top"></span>

### Introduction

In this demo, we will prepare a customer's environment for a Compliance PoV and start the ingestion of regular compliance assessments.

For our demo, we will create an environment within Concert to assign the Compliance assessments too. Then, we will create a CIS catalog and profile. 
Finally we will configure a workflow to run a compliance assessment against an Openshift environment.

### **Pre-requisites**

Below is a list of pre-requisites that need to be setup prior to beginning this PoV.

* One of the following runtime environments:
    * Redhat Openshift
    * Redhat Enterprise Linux
* Compliance catalog which the customer is using: 
    * CIS Controls
* Concert Workflows installed

### 1 - Defining an environment within Concert

The first step is to define an environment within Concert. When a Compliance assessment is ingested into Concert, it will be assigned to this environment.

**1.1:** Navigate to the **Arena view** within Concert <br/> <img src="images/1-1.png" width="600" />

**1.2:** Click **Define and upload**, then **Define environment**, then **From resources** <br/> <img src="images/1-2.png" width="600" />

**1.3:** Define the environment

Assign the following for the environment: 
- Name - ocp4-cis-api-checks-pod
- Type - Redhat Openshift Container Platform
- Purpose - Staging

<img src="images/1-3.png" width="600" />

**1.4:** Click **Create** <br/> <img src="images/1-4.png" width="600" />

<br/>

### 2 - Create a compliance catalog

**2.1:** Navigate to the **Compliance** dimension within Concert <br/> <img src="images/2-1.png" width="400" />

**2.2:** Click the **Catalogs** tab <br/> <img src="images/2-2.png" width="400" />

**2.3:** Click **Add catalog** and then **From standards library** <br/> <img src="images/2-3.png" width="400" />

**2.4:** Select the CIS Controls catalog<br/> <img src="images/2-4.png" width="800" />

**2.5:** Click Add <br/> <img src="images/2-4.png" width="800" />


<br/>

### 3 - Create a compliance profile

**3.1:** Navigate to the **Profiles** tab within Concert <br/> <img src="images/3-1.png" width="400" />

**3.2:** Click **Create profile** <br/> <img src="images/3-2.png" width="400" />

**3.3:** Fill in the profile details:

- Define a **Name** for the profile as profile_cis
- Select the CIS catalog
- Select the following controls:

<img src="images/3-3.png" width="800" /> <br/>

<br/>

### 4 - Configuring the Concert Workflow

**4.1:** Navigate to the Concert Workflows <br/>

**4.2:** Download the CIS OCP4 OSCO Compliance Scan Workflow

 - https://automation-library.ibm.com/workflows/CIS%20OCP4%20OSCO%20Compliance%20Scan

**4.2** Drag the downloaded zip file onto the Workflows screen to upload it

**4.3** Navigate to the Authentications page within Workflows

**4.4** Create an authentication with type Ansible authentication in the following format: <br/> <img src="images/4-1.png" width="400" />

**4.5** Create another authentication using Concert API type

**4.6** Copy the names of these authentications into the uploaded workflow from step 4.2 <br/> <img src="images/4-2.png" width="400" />

**4.7** Run the workflow, this will perform a CIS compliance scan against the customers instance

### 4 - Review

**4.1:** Navigate to the Concert Workflows <br/>

**4.2:** Download the CIS OCP4 OSCO Compliance Scan Workflow

 - https://automation-library.ibm.com/workflows/CIS%20OCP4%20OSCO%20Compliance%20Scan

**4.2** Drag the downloaded zip file onto the Workflows screen to upload it

**4.3** Navigate to the Authentications page within Workflows

**4.4** Create an authentication with type Ansible authentication in the following format: <br/> <img src="images/4-1.png" width="400" />

**4.5** Create another authentication using Concert API type

**4.6** Copy the names of these authentications into the uploaded workflow from step 4.2 <br/> <img src="images/4-2.png" width="400" />

**4.7** Run the workflow, this will perform a CIS compliance scan against the customers instance

**[Go to top](#top)**
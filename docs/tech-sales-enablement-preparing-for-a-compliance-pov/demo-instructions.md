---
title: Compliance proof of value <br/> <small> <i> Tech Sales enablement </i> </small>
layout: demo-instructions
---

<span id="top"></span>

<br/>

Click **<a href="https://ibm.ent.box.com/s/afax8p4hdkbjajutfn744tsyfjg8fyvv" target="_blank" rel="noreferrer">here</a>** to access the v1.0.4 compliance demo video.

Click the [**Pre-requisites**](pre-requisites) tab for setup instructions.

<details markdown="1">

<summary>Introduction</summary>

In this demo, we will prepare a customers environment for a Compliance PoV and start the ingestion of regular compliance assessments.

For our demo, we will create an environment within Concert to assign the Compliance assessments too. Then we will use the Concert Toolkit to create a compliance catalog, add that catalog to Concert, and create a profile based on that catalog.

<br/>

</details>

<p/>

<details markdown="1">

<summary>1 - Defining an environment within Concert</summary>

The first step is to define an environment within Concert, when a Compliance assessment is ingested into Concert it will be assigned to this environment.

| **Action** 1.1 | Navigate to the Arena view within Concert. |
| :--- | :--- |
|  | <img src="images/1-1.png" width="600" /> <br/>  |

| **Action** 1.2 | Click **Define and upload**, then **Define environment**, then **From resources**. |
| :--- | :--- |
|  | <br/> <img src="images/1-2.png" width="600" /> |

| **Action** 1.3 | Define the environment|
| :--- | :--- |
|  | Assign the following for the environment: <br/> **Name** <br/> **Type** <br/> **Purpose** <br/>  <img src="images/1-3.png" width="600" /> |

| **Action** 1.4 | Click **Create**. |
| :--- | :--- |
|  | <br/> <img src="images/1-4.png" width="600" /> |

**[Go to top](#top)**

<br/><br/>

</details>

<p/>

<details markdown="1">

<summary>2 - Creating a compliance catalog</summary>

<br/>

| **Action** 2.1 | Navigate to the compliance dimension within Concert |
| :--- | :--- |
|  | <img src="images/2-1.png" width="400" /> |
| **Action** 2.2 | Click on the Catalogs tab |
| :--- | :--- |
|  | <img src="images/2-2.png" width="400" /> |
| **Action** 2.3 | Click **Add catalog**, then **From standards library** |
| :--- | :--- |
|  | <img src="images/2-3.png" width="400" /> |
| **Action** 2.4 | If the customer needs a pre-defined compliance catalog from Concert, select one from this list |
| :--- | :--- |
|  | <img src="images/2-4.png" width="800" /> |
| **Action** 2.5 | If the customers compliance catalog is not listed, create one with the Concert toolkit |
| :--- | :--- |
|  | 1. Define a CSV to Excel file with the following format <br/> <img src="images/2-5-1.png" width="800" /> <br/> Click **<a href="./images/DORA_Compliance_Controls.csv" target="_blank" rel="noreferrer">here</a>** for an example CSV from DORA Compliance. <br/> <br/> 2. Define a config file for the Concert toolkit in the following format.  <br/> <img src="images/2-5-2.png" width="800" /> <br/> <br/> Click **<a href="./images/config.yaml" target="_blank" rel="noreferrer">here</a>** for an example YAML file. <br/> <br/> 3. Run the Concert toolkit with the following command: <br/> <br/> <code>docker run -v .:/data/src -v ./toolkit-data:/toolkit-data icr.io/cpopen/ibm-concert-toolkit:latest /bin/bash -c "compliance-catalog" --input-file ./toolkit-data/DORA_Compliance_Controls.csv --config-file /toolkit-data/config.yaml"</code> <br/> <br/> The output will be a compliance catalog OSCAL json: <br/> <img src="images/2-5-3.png" width="800" /> | 
| **Action** 2.6 | In the Concert UI, click **Add catalog**, then **From file** and upload the json file which was created |
| :--- | :--- |
|  | <img src="images/2-6.png" width="800" /> |

**[Go to top](#top)**

<br/><br/>

</details>

<p/>

<details markdown="1">

<summary>3 - Creating a compliance profile</summary>

| **Action** 3.1 | Navigate to the Profiles tab within Concert |
| :--- | :--- |
|  | <img src="images/3-1.png" width="400" /> |
| **Action** 3.2 | Click **Create profile** |
| :--- | :--- |
|  | <img src="images/3-2.png" width="400" /> |
| **Action** 3.3 | Fill in the profile details |
| :--- | :--- |
|  | 1. Define a **Name** for the profile. <br/> 2. Select the catalog which was uploaded. <br/> 3. Select the controls which the customer wants to be assessed against. <br/> <img src="images/3-3.png" width="800" /> <br/> |

**[Go to top](#top)**

<br/><br/>

</details>

<p/>

<details markdown="1">

<summary>4 - Uploading a compliance assessment</summary>

| **Action** 4.1 | Navigate to the **Assessments** tab within Concert |
| :--- | :--- |
|  | <img src="images/4-1.png" width="400" /> |
| **Action** 4.2 | Click **Upload compliance scan** |
| :--- | :--- |
|  | Select the file format the assessment was completed in: <br/> 1. Use XCCDF for Openshift Operator compliance assessments. <br/> 2. Use OSCAL for any other compliance assessments. <br/> Upload the assessment created by the continuous compliance scanner here. <br/> <img src="images/4-2.png" width="400" /> |

**[Go to top](#top)**

<br/><br/>

</details>


<p/>
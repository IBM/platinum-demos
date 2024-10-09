---
title: Part 3 - Customizing customers' CI/CD pipeline for IBM Concert <br/> <small> <i> Tech Sales enablement </i> </small>
layout: pre-requisites
---

<span id="top"></span>

<br/>

This is a platform-independent, high-level guide for customizing customers' CI/CD pipelines to integrate with IBM Concert. The intent of this is to enable Tech Sellers to adapt customers’ existing CI/CD workflows with IBM Concert.

### **PREPARING FOR THE DEMO**

<details markdown="1">

This document outlines the preparation and execution requirements for the Proof of Value (PoV). It provides step-by-step instructions to ensure the PoV is successfully implemented, with all necessary components in place before starting.

<summary>General tasks</summary>

To ensure the smooth execution of the PoV, the account team must gather essential information and prepare the customer environment ahead of time:

1. Designate a DevOps Engineer:
The customer must designate a DevOps engineer familiar with both the DevOps toolchain and the target applications. This engineer will collaborate closely with the IBM Tech Seller during the PoV execution.

2. Prepare a Non-Production Environment:
Before the PoV begins, the customer must provision a non-production environment to host the PoV applications. This environment should be a simplified replica of the production CI/CD pipeline to ensure smooth testing and validation.

***

<summary>Preparing the environment</summary>
Several key pieces of information must be collected well in advance of the PoV start date. These include:

1. Select 3-5 Target Applications for the PoV:
Identify 3-5 representative applications that will provide a broad evaluation across key areas, such as:

    1.1. Business Impact: Select applications supporting critical business functions with measurable outcomes.
    1.2. Technical Complexity: Choose a mix of simple and complex applications to demonstrate flexibility across different architectures.
    1.3. Usage Volume: Include high-traffic or high-usage applications to validate scalability and performance.
    1.4. Risk or Vulnerability: Target applications with known security or operational risks to demonstrate the solution's ability to address vulnerabilities effectively.

2. Assign Application Criticality:
Each selected application should be rated on a criticality scale from 1 (lowest) to 5 (highest) based on its business importance. Applications with a high criticality rating should be prioritized for evaluation.

3. Gather detailed information about each microservices:
For each microservice included in the PoV, gather the following information:

3.1. List of Access Points:
Document all access points (APIs, endpoints, etc.) associated with each microservice. Include details on how these access points are exposed:

Private: Internal-only access, restricted to internal environments.
Public: Externally accessible, posing additional security considerations.

3.2. List of Environments:
Identify the environments in which each microservice operates (development, testing, staging, production).

3.3. List of Source Code Repositories:
For each microservice, identify the source code repository, including the branch and version of the code. Additionally, document the business owner responsible for the repository to facilitate permissions or security inquiries.

***

<summary>Security and compliance considerations</summary>
Security is a critical component of the PoV. Make sure the following steps are completed:

1. Identify CVE Scanning Tools:
Confirm the tools that will be used for CVE (Common Vulnerabilities and Exposures) scanning within the PoV (e.g., Twistlock, Grype, Trivy, Fortify, Tenable). These tools should integrate into the customer's CI/CD pipeline to ensure continuous security and compliance checks. Send the corresponding CSV files to the product management team for vulnerability mapping.


<summary>Final considerations</summary>
Before starting the PoV, the following preparations must be in place:

1. Ensure that all collected application information is validated and documented.
2. Confirm that the non-production environment is provisioned and fully configured, replicating the production CI/CD pipeline.
3. Verify that the DevOps engineer is ready to support the PoV process and collaborate with the IBM Tech Seller.
4. Confirm that all required software components (including the CVE scanning tools) are installed in the non-production environment.



</details>

***

For further information, please click on the resources below:

<a href="https://ibm.box.com/s/v5y7fu0v4lfqufuf1h60qd97bt9x6wsi" target="_blank" rel="noreferrer">Proof of Value guide</a>.



Click [here](demo-instructions) to go to the **Demo instructions** on the next tab.
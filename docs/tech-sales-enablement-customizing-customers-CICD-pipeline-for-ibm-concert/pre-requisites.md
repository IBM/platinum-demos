---
title: Part 3 - Customizing customers' CI/CD pipeline for IBM Concert <br/> <small> <i> Tech Sales enablement </i> </small>
layout: pre-requisites
---

<span id="top"></span>

<br/>

This is a platform-independent, high-level guide for customizing customers' CI/CD pipelines to integrate with IBM Concert. The intent of this is to enable Tech Sellers to adapt customers’ existing CI/CD workflows with IBM Concert.

### **PREPARING FOR THE DEMO**

<details markdown="1">

<summary>Prepare your environment</summary>

The account team should plan to request the following information for each target application several days or weeks prior to the start of the Proof of Value (PoV):

1. Application criticality
2. List of access points for each microservice in scope, along with their exposure level (private or public)
3. List of environments for each microservice in scope
4. List of repositories for each microservice in scope

Additionally, the customer should designate a DevOps engineer familiar with both the DevOps toolchain in use and the applications under the scope of the PoV to collaborate closely with the IBM Tech Seller. 

As part of the preparation, prior to the first day of the PoV, reinforce that the customer must provision and prepare a non-production environment to host the PoV and the applications in scope. This environment should be a simplified replica of the production CI/CD pipeline to ensure the smooth execution of the PoV.

Several essential software components must be installed and configured in this environment prior to the start date. The following instructions assume a Linux-based environment for the PoV.

| **Software** | **Owner** |
| :--- | :--- |
| **IBM Concert (SaaS, <a href="https://techzone.ibm.com/collection/tech-zone-certified-base-images/journey-ibm-concert" target="_blank" rel="noreferrer">VM</a> or OCP)** <br/><br/> You will need: <br/> • IP address <br/> • Credentials <br/> • API key | Tech Seller |
| **<a href="https://code.visualstudio.com/Download" target="_blank" rel="noreferrer">Visual Studio Code</a> or other code editor** | Customer |

</details>

***

Click [here](demo-instructions) to go to the **Demo instructions** on the next tab.
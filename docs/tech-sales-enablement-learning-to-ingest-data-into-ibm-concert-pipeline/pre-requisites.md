---
title: Part 2 - Using a pipeline to automate data ingestion into IBM Concert <br/> <small> <i> Tech Sales enablement </i> </small>
layout: pre-requisites
---

<span id="top"></span>

<br/>

### **PREPARING FOR THE DEMO**

<details markdown="1">

<summary>Prepare your environment</summary>

<!--Before we begin, here is a list of pre-requisites that need to be setup prior to beginning this demo

Number one, you should have an Openshift Cluster with public ingress reserved on techzone. This is where our Tekton pipeline will be installed.

The second thing you will need is an instance of IBM Concert deployed on either SaaS, a VM, or Redhat Openshift. (In our demo, we will be using IBM Concert v1.0.1 on a SaaS instance).

Third, we will need access to an image registry. Microservices and cloud-native applications are often containeraized and CI/CD pipelines handle the building, pushing, and pulling of images by storing them in a private or public registry. In our demo we will be using Jfrog for our registry, however there are many options available.

Fourth, you’ll need an account on IBM Github. Most IBMers already have one, however a personal access token needs to be generated so we can clone source code repositories to our local machines.

Fifth, we will be using a sample application called Quote of the Day. This application’s source code  consists of 10 microservices and all 10 source code repositories for this application are available for download on our IBM Github organization called quote-of-the-day.

Finally, number 6, there are command line clients that need to be downloaded on the local machine of the techseller who will be running this demo. Specifically, we will need to install openshift, git, and tekton desktop clients. Each of these clients have download instructions that are operating-system-specific and installing them will allow us to interact with these tools via our command line. For step-by-step instructions on installing these clients, please follow this link.

Once we have all the pre-requisites completed, we can now get started on building our pipeline.-->

• OpenShift cluster <br/>
• IBM Concert (SaaS, VM or OCP) <br/>
• Image registry access <br/>
• Quote of the Day (QotD) sample application <br/>
• Command-line clients (OS dependent): <a href="https://pages.github.ibm.com/cs-tel-ibm-concert/training/module2/tekton-prereqs/" target="_blank" rel="noreferrer">https://pages.github.ibm.com/cs-tel-ibm-concert/training/module2/tekton-prereqs/</a>

</details>

***

Click [here](demo-instructions) to go to the **Demo instructions** on the next tab.
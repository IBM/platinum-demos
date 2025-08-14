---
title: Using a Concert Workflow to automate certificate discovery and ingestion into IBM Concert <br/> <small> <i> Tech Sales enablement </i> </small>
layout: resources
---

<span id="top"></span>

### Introduction

In this demo, we will build and run a Concert Workflow to understand how a customer will automate the certificate discovery and ingestion process directly from a runtime environment. This method can then be used for ingesting certificates during a Proof of Value with a customer.

### Pre-requisites

Below is a list of pre-requisites that need to be set up prior to beginning this PoV.

One of the following runtime environments:

* Kubernetes
* Redhat OpenShift
* IBM Cloud IKS
* IBM Cloud ROKS
* AWS EKS
* AWS ROSA

### 1 - Creating an auto-discovery integration

**1.1:** On the homepage select "Discover your data". <br/> <img src="images/1-1.png" width="200" />

**1.2:** Choose an integration type. <br/> <img src="images/1-2.png" width="800" />

**1.3:** Enter details for the Endpoint, Token, and Cluster name. <br/> <img src="images/1-3.png" width="400" />

**1.4:** On the Inventory page, select the applications you want to discover from the environment <br/> <img src="images/1-4.png" width="400" />

**1.5:** Click next. Certificates have now been discovered from the customer's cluster and ingested.

<br/>

### Summary

In this demo, we saw how to create a direct integration to discover and ingest certificate details from a kubernetes cluster. 

Once the discovery process is running, Concert checks all namespaces across the environment for a kubernetes.io/tls secret type. If this secret is discovered, Concert will ingest the secrets details as a certificate in Concert. Once the certificate is ingested successfully into Concert, the operations teams can review the certificate expiration dates and automate the rotation of those certificates.

**[Go to top](#top)**
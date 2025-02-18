---
title: Installing the Concert Workflows add-on <br/> <small> <i> Tech Sales enablement </i> </small>
layout: resources
---

<span id="top"></span>

This document is intended to provide guidance on the Concert Workflow add-on install, click <a href="https://www.ibm.com/docs/en/concert?topic=workflows-installing-concert-vm" target="_blank" rel="noreferrer">here</a> for the official install steps.

Click <a href="https://techzone.ibm.com/collection/tech-zone-certified-base-images/journey-watsonx" target="_blank" rel="noreferrer">here</a> to access the IBM Concert 1.0.4 Techzone VM.<br/>

### Introduction

In this demo, we’ll learn how to install the Concert Workflows add-on within an IBM Concert 1.0.4.1 TechZone VM.

Concert Workflows is available as an add-on service for on-premises deployments of Concert to an OCP cluster or virtual machine (VM). The add-on embeds workflow definition and automation capabilities so you can define, manage and automate workflows within the Concert UI.

### 1 - Install pre-requisite software

**1.1: ssh to the Concert VM on TechZone**

When we reserved the TechZone instance, we received an ITZuser login and ssh key. <br/> <img src="images/1-1-a.png" width="600" /> 

Download the ssh key and change its permissions using the command line. <br/> <code class="code-block"> chmod 600 pem_ibmcloudvsi_download.pem </code>
<img src="images/1-1-b.png" width="600" /> 

We will use this to log in to the virtual machine. <br/> <code class="code-block"> ssh -i pem_ibmcloudvsi_download.pem -p 2223 itzuser@IP_ADDRESS </code>
<img src="images/1-1-c.png" width="600" />

Change to the root user. <br/> <code class="code-block"> sudo su </code> <br/>

Change to the workflow directory <br/> <code class="code-block"> cd workflows/ </code> 

Open a port in the firewall on which Concert Workflows will run. <br/> <code class="code-block"> sudo iptables -A INPUT -p tcp --dport 3000 -j ACCEPT </code>

**1.2: Download and extract the Concert git repository**

<code class="code-block"> wget https://github.com/IBM/Concert/releases/download/v1.0.4/ibm-concert-std-workflows.tgz </code>
<code class="code-block"> tar xfz ibm-concert-std-workflows.tgz </code>
<img src="images/1-2.png" width="600" />

**1.3: Log in to the Concert registry on podman**

Navigate <a href="https://myibm.ibm.com/products-services/containerlibrary" target="_blank" rel="noreferrer">here</a> to get the IBM_ENTITLEMENT_KEY.

Set the variables needed to log in.
<code class="code-block"> export IBM_ICR_IO=cp.icr.io/cp/concert </code>
<code class="code-block"> export PROD_USER=cp </code>
<code class="code-block"> export IBM_ENTITLEMENT_KEY=KEY_FROM_START_OF_1.3 </code>

Then log in to the image registry.
<code class="code-block"> podman login ${IBM_ICR_IO} --username=${PROD_USER} --password=${IBM_ENTITLEMENT_KEY} </code>

**1.4: Install k3s**

<code class="code-block"> curl -sfL https://get.k3s.io | sudo INSTALL_K3S_VERSION=v1.29.2+k3s1 sh -s - --write-kubeconfig-mode 644 --disable traefik </code>
<code class="code-block"> export PATH="/usr/local/bin:$PATH" </code>
<code class="code-block"> mkdir -p ~/.kube </code>
<code class="code-block"> sudo cp /etc/rancher/k3s/k3s.yaml ~/.kube/config </code>
<code class="code-block"> sudo chown $(id -u):$(id -g) ~/.kube/config </code>

**1.5: Install helm**

<code class="code-block"> curl -fsSL -o get_helm.sh https://raw.githubusercontent.com/helm/helm/main/scripts/get-helm-3 </code>
<code class="code-block"> chmod 700 get_helm.sh </code>
<code class="code-block"> ./get_helm.sh </code>

**1.6: Install kubectl**

<code class="code-block"> curl -LO "https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl" </code>
<code class="code-block"> chmod +x kubectl </code>
<code class="code-block"> sudo mv kubectl /usr/bin/ </code>

### 2 - Configure Concert Workflow values

**2.1: Run the get concert info script**

This script requires a Concert URL and API key. If you don't have an API key, you can follow <a href="https://www.ibm.com/docs/en/concert?topic=api-generating-key" target="_blank" rel="noreferrer">these steps</a> to create one.

Run the script using this command, replacing 'concert-url' and 'concert-api' with your own. <br/> <code class="code-block"> ./bin/tethering/get_concert_info.sh --concert-url=https://concert-url:12443 --c-api-key=concert-api </code>

This will output a CONCERT_HUB_KEY value. Take note of this.

**2.2: Edit the Concert Workflows values file**

Open the 'values' file for editing.  <br/> <code class="code-block"> vi bin/concert-workflows-values.yaml </code>

Replace 'icr.io/cp/concert' with 'cp.icr.io/cp/concert' on the 'imageRegistry' line.

On the 'address' line, replace the address with the URL of your concert instance, without the port (e.g., the url https://9.30.214.214:12443/ without the port is https://9.30.214.214).

On the 'CONCERT_HUB_URL' line, add the full Concert URL (e.g., https://9.30.214.214:12443).

On the 'CONCERT_HUB_KEY' line, enter the key obtained from the Concert info script in 2.1.

To save and exit the 'values' file, press 'esc', then ':', then 'wq'.

<br/>

### 3 - Install Concert Workflows

**3.1: Create a namespace in kubernetes for Concert Workflows**

<code class="code-block"> CW_NAMESPACE=concert-workflows </code>
<code class="code-block"> kubectl create namespace concert-workflows </code>
<code class="code-block"> kubectl config set-context --current --namespace=concert-workflows </code>

**3.2: Create a docker registry secret**

Note: The docker password used in this command is the same IBM entitlement key used in 1.3. <br/> <code class="code-block"> kubectl create secret docker-registry ibm-entitlement-key --docker-server=cp.icr.io --docker-username=cp --docker-password=IBM-ENTITLEMENT-KEY --namespace="${CW_NAMESPACE}" </code>

**3.3: Run the Concert Workflows install script**

This script takes on average 20 minutes to run. <br/> <code class="code-block"> ./bin/setup --namespace="concert-workflows" </code>

**3.4: Tether Concert Workflows to the Concert instance**

Set the following vars on the command line. <br/> <code class="code-block"> export CONCERT_HUB_URL=URL of Concert instance including port </code>
<code class="code-block"> export CONCERT_HUB_KEY=CONCERT_HUB_KEY from get_concert_info.sh </code>
<code class="code-block"> export EXTNS_DIR=full path to extns folder within workflows directory </code>
<code class="code-block"> export ADDON_NAME=concert_workflows </code>
<code class="code-block"> export EXT_URL=URL of Concert instance instance WITHOUT port </code>

Run the tether to hub script. <br/> <code class="code-block"> ./bin/tethering/tether-to-hub.sh --concert-hub-url="$CONCERT_HUB_URL" --concert-hub-key="$CONCERT_HUB_KEY" --extn-dir="$EXTNS_DIR" --provider="$ADDON_NAME" --external-url="$EXT_URL" </code>

<br/>

### View updates in Concert UI

Log in to the Concert instance to ensure all data was uploaded successfully.

<inline-notification text="If you were already logged in to Concert, doing a refresh in the browser."></inline-notification>

<img src="images/confirm.png" width="800" />

On the top menu, a Workflows option should now appear.

**[Go to top](#top)**
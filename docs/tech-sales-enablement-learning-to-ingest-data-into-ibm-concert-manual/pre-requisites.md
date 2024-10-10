---
title: Part 1 - Ingesting data manually into IBM Concert <br/> <small> <i> Tech Sales enablement </i> </small>
layout: pre-requisites
---

<span id="top"></span>

<br/>

### **PREPARING FOR THE DEMO**

<details markdown="1">

<summary>Prepare your environment</summary>

<p>• IBM Concert (<a href="https://techzone.ibm.com/collection/tech-zone-certified-base-images/journey-ibm-concert" target="_blank" rel="noreferrer">VM or OCP </a>). You will need:</p>
<p style="text-indent: 30px;">- IP address</p>
<p style="text-indent: 30px;">- Credentials</p>
<p style="text-indent: 60px;">○ Option 1: API key/token (preferred)</p>
<p style="text-indent: 60px;">○ Option 2: Username/password</p>
<p>• <a href="https://code.visualstudio.com/Download" target="_blank" rel="noreferrer">Visual Studio Code</a> (recommended) or other code editor</p>
<p>• <a href="https://github.ibm.com/ibm-concert-platinum-demos/concert-pm-utils" target="_blank" rel="noreferrer">Custom helper scripts</a> for this demo, downloaded (cloned) from IBM GitHub</p>
<p style="text-indent: 30px;">- Option 1: Log in to IBM GitHub in Visual Studio Code to download without SSH key</p>
<p style="text-indent: 30px;">- Option 2: Set up SSH key and download on your terminal or Visual Studio Code</p>

</details>

<p/>

<details markdown="1">

<summary>Set up IBM Github to download helper scripts</summary>

To manually ingest data into Concert, you will need a set of helper scripts. We’ve created these helper scripts to help train you on how to use the Concert Toolkit.

<inline-notification text="This demo uses Concert Toolkit V1.0.1."></inline-notification>

Before downloading the helper scripts, you’ll need to set up Github access.

<inline-notification text="If you’re logged into your IBM GitHub account in Visual Studio Code, you can download the code without a key. If you are not logged in or prefer to use a different IDE, then an SSH key pair is required to download the code."></inline-notification>

1. Generate an SSH Key Pair. <br/><br/> <code class="code-block"> cd .ssh <br/> ssh-keygen -t rsa -b 4096 -C "your_email@ibm.com" -f mycorporate_key </code>

2. Add your SSH Key to the SSH agent. <br/><br/> <code class="code-block"> eval "$(ssh-agent -s)" && ssh-add mycorporate_key </code> 

3. Copy the SSH public key. <br/><br/> <code class="code-block"> cat mycorporate_key.pub </code>

4. Add the SSH key to your GitHub Enterprise account: <br/> • Go to your <a href="https://github.ibm.com/" target="_blank" rel="noreferrer">IBM GitHub account</a>. <br/> • Navigate to <strong>Savings</strong> (found under your profile picture). <br/> • Click <strong>SSH and GPG keys</strong>. <br/> • Click <strong>New SSH key</strong> <br/> • Paste the copied SSH key into the <strong>Key</strong> field and give it a title. <br/> • Save the key.

5. Verify the SSH connection. <br/><br/> <code class="code-block"> ssh -T git@github.ibm.com </code>

6. Clone the concert-pm-utils repository. <br/><br/> <code class="code-block"> git clone git@github.ibm.com:ibm-concert-platinum-demos/concert-pm-utils.git </code>

7. Navigate to the directory where the helper scripts are located. Choose between macOS and Linux according to your local configuration.

8. Change execute permissions for all the downloaded shell scripts in order to make them executable (otherwise default permissions will prevent you from executing them). <br/><br/> <code class="code-block"> chmod +x *.sh </code>

**[Go to top](#top)**

<br/><br/>

</details>

***

Click [here](demo-instructions) to go to the **Demo instructions** on the next tab.
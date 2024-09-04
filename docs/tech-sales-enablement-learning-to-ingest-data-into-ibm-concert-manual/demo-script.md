---
title: Tech Sales enablement <br/> Learning to ingest data into IBM Concert <br/> <small> <i> Manual data ingestion </i> </small>
layout: demoscript
banner: images/banner.jpg
---

<span id="top"></span>

Click the [**Demo preparation**](demo-preparation) tab for setup instructions.

<details markdown="1">

<summary>Introduction</summary>

In this video, we’ll show you how to ingest data into IBM Concert. 

The first part of the video will walk you through the manual process to help you understand the details of how Concert works. 

Let’s start with ingesting data manually into Concert. This is important for your understanding the different types of data and formats that Concert supports. 

For our demo, we’ll use the Quote of the Day application, which consists of 10 microservices. The final result will showcase a populated Concert Arena View with all the underlying components of the application and the prioritized CVEs.

Let’s get started.

<br/>

</details>

<p/>

<details markdown="1">

<summary>Pre-req: Set up IBM GitHub</summary>

<br/>

To manually ingest data into Concert, you will need 1) The Concert Toolkit and 2) a set of helper scripts. We’ve created these helper scripts to help train you on how to use the Concert Toolkit.

In order to download the helper scripts, you’ll need to set up Github access.

<inline-notification text="If you’re logged into your IBM GitHub account in Visual Studio Code, you can download the code without a key. If you are not logged in or prefer to use a different IDE, then an SSH key pair is required to download the code."></inline-notification>

1. Generate an SSH Key Pair. <br/><br/> <code> cd .ssh <br/> ssh-keygen -t rsa -b 4096 -C "your_email@ibm.com" -f mycorporate_key </code>

2. Add your SSH Key to the SSH agent. <br/><br/> <code> eval "$(ssh-agent -s)" && ssh-add mycorporate_key </code>

3. Copy the SSH public key. <br/><br/> <code> cat mycorporate_key.pub </code>

4. Add the SSH key to your GitHub Enterprise account:
<p style="text-indent: 50px;">• Go to your <a href="https://github.ibm.com/" target="_blank" rel="noreferrer">IBM GitHub account</a>.</p>
<p style="text-indent: 50px;">• Navigate to <strong>Savings</strong> (found under your profile picture).</p>
<p style="text-indent: 50px;">• Click <strong>SSH and GPG keys</strong>.</p>
<p style="text-indent: 50px;">• Click <strong>New SSH key</strong>.</p>
<p style="text-indent: 50px;">• Paste the copied SSH key into the <strong>Key</strong> field and give it a title.</p>
<p style="text-indent: 50px;">• Save the key.</p>

5. Verify the SSH connection. <br/><br/> <code> ssh -T git@github.ibm.com </code>

6. Clone the concert-pm-utils repository. <br/><br/> <code> git clone git@github.ibm.com:ibm-concert-platinum-demos/concert-pm-utils.git </code>

7. Navigate to the directory where the helper scripts are located. Choose between macOS and Linux according to your local configuration.

8. Change execute permissions for all the downloaded shell scripts in order to make them executable (otherwise default permissions will prevent you from executing them). <br/><br/> <code> chmod +x *.sh </code>

**[Go to top](#top)**

<br/><br/>

</details>

<p/>

<details markdown="1">

<summary>1 - Populate global variables</summary>

<br/>

Placeholder

**[Go to top](#top)**

<br/><br/>

</details>

<p/>

<details markdown="1">

<summary>Summary</summary>

Placeholder

**[Go to top](#top)**

<br/><br/>

</details>
---
title: Part 1 - Ingesting data manually into IBM Concert <br/> <small> <i> Tech Sales enablement </i> </small>
layout: prereqs
---

<span id="top"></span>

<br/>

### **PREPARING FOR THE DEMO**

<details markdown="1">

<summary>Prerequisites</summary>

<!--On this slide are the prerequisites you will need before starting this demo.

First, you should have an instance of IBM Concert deployed on either SaaS, VM or OpenShift. For this instance, you will need the IP address, username and password credentials, or an API key/token for authentication.

Second, you will need an IDE or code editor. For this demo, we will use Visual Studio Code.

Third, you will need to download the helper scripts provided for running this demo from IBM GitHub. There are two options for downloading the code. First, you can download the code in Visual Studio Code using the 'git clone' command without needing an SSH key. Second, you can set up an SSH key for your IBM GitHub account and use that to download the code to your machine.-->

<p>• IBM Concert (SaaS, VM or OCP). You will need:</p>
<p style="text-indent: 30px;">- IP address</p>
<p style="text-indent: 30px;">- Credentials</p>
<p style="text-indent: 60px;">○ Option 1: API key/token (preferred)</p>
<p style="text-indent: 60px;">○ Option 2: Username/password</p>
<p>• Visual Studio Code (recommended) or other code editor</p>
<p>• Custom utility scripts for this demo, downloaded from IBM GitHub</p>
<p style="text-indent: 30px;">- Option 1: Log in to IBM GitHub in Visual Studio Code to download without SSH key</p>
<p style="text-indent: 30px;">- Option 2: Set up SSH key and download on your terminal or Visual Studio Code</p>

</details>

<p/>

<details markdown="1">

<summary>Set up IBM GitHub</summary>

To manually ingest data into Concert, you will need 1) The Concert Toolkit and 2) a set of helper scripts. We’ve created these helper scripts to help train you on how to use the Concert Toolkit.

In order to download the helper scripts, you’ll need to set up Github access.

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

<p/>

<details markdown="1">

<summary>Set up system paths</summary>

1. Update the system path and configure Git. Homebrew usually adds itself to the PATH automatically. However, if it doesn’t, you can add it manually: <br/><br/> <code class="code-block"> nano ~/.zshrc  # For zsh <br/> # or <br/> nano ~/.bash_profile  # For bash </code>

2. For users running macOS versions prior to Big Sur, you can set the Homebrew installation directory with the following command. Please add this line to your .zshrc or .bash_profile: <br/><br/> <code class="code-block"> export PATH="/usr/local/bin:/usr/local/sbin:$PATH" </code>

3. For users running macOS macOS versions Big Sur and later, the Homebrew installation directory is /opt/homebrew: <br/><br/> <code class="code-block"> export PATH="/opt/homebrew/bin:/opt/homebrew/sbin:$PATH" </code>

4. Homebrew usually handles this automatically, but to ensure Gradle is included in your PATH. For users running macOS versions prior to Big Sur, this can be done by adding the command below to your .zshrc or .bash_profile: <br/><br/> <code class="code-block"> export PATH="/usr/local/opt/gradle/bin:$PATH" </code>

5. For users running macOS versions Big Sur and later, use the command below: <br/><br/> <code class="code-block"> export PATH="/opt/homebrew/opt/gradle/bin:$PATH" </code>

6. Homebrew usually handles this automatically, but to ensure Bazel is included in your PATH. For users running macOS versions prior to Big Sur, this can be done by adding the command below to your .zshrc or .bash_profile: <br/><br/> <code class="code-block"> export PATH="/usr/local/bin:$PATH" </code>

7. For users running macOS versions Big Sur and later, use the command below: <br/><br/> <code class="code-block"> export PATH="/opt/homebrew/bin:$PATH" </code>

8. Apply changes: <br/><br/> <code class="code-block"> source ~/.zshrc  # For zsh <br/> # or <br/> source ~/.bash_profile  # For bash </code>

9. Configure Git: <br/><br/> <code class="code-block"> git config --global user.name "Your Name" <br/> git config --global user.email "your.email@ibm.com" </code>

**[Go to top](#top)**

<br/><br/>

</details>

***

Click [here](tutorial) to go to the **Tutorial** on the next tab.
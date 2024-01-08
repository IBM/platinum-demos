---
title: API-enabled application integration <br/>300-level live demo
layout: demoscript
banner: images/300-int-API-enabled-script-temp.jpg
---

<span id="top"></span>

<details markdown="1">

<summary>Introduction</summary>

Today we will see how Focus Corp adopt API management. Focus Corp are a regional bank with aspirations to grow across the country. Their business processes are automated but tightly coupled to the applications using them, leading to delays when new applications need access. Business Partners can be onboarded to access a catalogue of the products available, however it takes months to complete the process. Focus Corp realize they need to transform their technology and processes if they wish to grow. The bank decided to phase the adoption of API Management to avoid a long project with the benefits only seen at the end. They plan a three phased adoption: 1.) internal API reuse, 2.) exposing non-sensitive APIs outside the enterprise, 3.) exposing core banking services to accredited business partners.

Let’s get started!


(Demo intro slides <a href="https://ibm.box.com/s/quzwd2gvn7zbo9oo19xi1o05gtdlvmwj" target="_blank" rel="noreferrer">here</a>)

(Printer-ready PDF of demo script <a href="https://ibm.box.com/s/jsz9v4mva1jdz7gg1fls3xk4rhgiezvh" target="_blank" rel="noreferrer">here</a>)

<br/><br/>

</details>

<p/>

<details markdown="1">

<summary>1 - Expose core services as APIs, allowing internal self-service consumption</summary>
Focus Corp’s mobile application will allow customers to view their account balance. The account balance service has a HTTP interface, but the data format is complex and unless the user understands the underlying implementation it’s difficult to use. Focus Corp will design a new consumable interface which is intuitive for new users, and use API Connect to transform the data hiding the complexity. An enterprise-wide API developer portal will be created, allowing the mobile application development team to browse, subscribe, and test the API. 
<br/>

| **1.1** | **Show the existing API** |
| :--- | :--- |
| **Narration** | ABC |
| **Action** &nbsp; 1.1.1 | Show the application dashboard, and walk through as outlined in the narration above. <br/> <img src="images/1-1-1-applications-dashboard.png" width="800" /> |

| **1.2** | **Create a new consumer friendly API** |
| :--- | :--- |
| **Narration** | ABC |
| **Action** &nbsp; 1.1.1 | Show the application dashboard, and walk through as outlined in the narration above. <br/> <img src="images/1-1-1-applications-dashboard.png" width="800" /> |

| **1.3** | **Show the publishing of the API** |
| :--- | :--- |
| **Narration** | ABC |
| **Action** &nbsp; 1.1.1 | Show the application dashboard, and walk through as outlined in the narration above. <br/> <img src="images/1-1-1-applications-dashboard.png" width="800" /> |

| **1.4** | **Show the consumption using the developer portal** |
| :--- | :--- |
| **Narration** | ABC |
| **Action** &nbsp; 1.1.1 | Show the application dashboard, and walk through as outlined in the narration above. <br/> <img src="images/1-1-1-applications-dashboard.png" width="800" /> |


<br/>

**[Go to top](#place1)**

<br/><br/>

</details>

<p/>

<details markdown="1">

<summary>2 - Provide Business Partners secure, controlled access to non-sensitive APIs</summary>
Today the Business Partners onboarding process is manual and time consuming. Focus Corp have seen the benefits of internal self-service where application development teams are able to discover, subscribe and test APIs without any manual process. They want to pilot this for Business Partners initially where the APIs do not contain sensitive information. Focus Corp have been approached by a new partner wanting to provide users with a single view of products and services across banks. Focus Corp have already exposed an API for internal consumers and want to create a new developer portal for business partner access. 
<br/>

| **2.1** | **Show publishing of an API to a Partner Developer Portal** |
| :--- | :--- |
| **Narration** | ABC |
| **Action** &nbsp; 2.1.1 | In a new browser tab, open the <a href="https://github.com/IBM/platinum-demo-code-cloud-native-integration/blob/notification/mq/uniformcluster/deploy/uniformclusterQMConfig.yaml_template" target="_blank" rel="noreferrer">code repository</a>. Show the **alter** line (1) that configures messages to be streamed from the existing response queue.<br/> <img src="images/2-1-1-alter-line.png" width="800" /> |

| **2.2** | **Show analytics in the Developer Portal and API Manager** |
| :--- | :--- |
| **Narration** | ABC |
| **Action** &nbsp; 2.1.1 | In a new browser tab, open the <a href="https://github.com/IBM/platinum-demo-code-cloud-native-integration/blob/notification/mq/uniformcluster/deploy/uniformclusterQMConfig.yaml_template" target="_blank" rel="noreferrer">code repository</a>. Show the **alter** line (1) that configures messages to be streamed from the existing response queue.<br/> <img src="images/2-1-1-alter-line.png" width="800" /> |

<br/>

**[Go to top](#place1)**

<br/><br/>

</details>

<p/>

<details markdown="1">

<summary>3 - Expose securely the core banking services to Business Partners </summary>
Focus Corp have seen significant growth in partner referrals since exposing an API of their products and services. They would like to grow the partner ecosystem by allowing selected partners to show users their account balance. Focus Corp were initially unsure how to correctly secure their APIs, but recently learnt about Open Banking (called UK - [Open Banking](https://www.openbanking.org.uk/), EU – [Berlin Group](https://www.berlin-group.org/), USA - [Personal Financial Data Rights](https://files.consumerfinance.gov/f/documents/cfpb-1033-nprm-fr-notice_2023-10.pdf)) and the industry agreed approach to securing sensitive APIs. Onboarding of partners will be automated but require approval due to the sensitivity of the data. The APIs will be secured using OpenID Connect, assuring the end user authorizes the partners to retrieve their data.
<br/>

| **3.1** | **Explain API security** |
| :--- | :--- |
| **Narration** | ABC |
| **Action** &nbsp; 3.1.1 | Click the **Scale** button associated with the Mobile App section.<br/> <img src="images/3-1-1-click-scale.png" width="800" /> |

| **3.2** | **Apply security to API** |
| :--- | :--- |
| **Narration** | ABC |
| **Action** &nbsp; 3.1.1 | Click the **Scale** button associated with the Mobile App section.<br/> <img src="images/3-1-1-click-scale.png" width="800" /> |

| **3.3** | **Show approval of API subscription** |
| :--- | :--- |
| **Narration** | ABC |
| **Action** &nbsp; 3.1.1 | Click the **Scale** button associated with the Mobile App section.<br/> <img src="images/3-1-1-click-scale.png" width="800" /> |

| **3.4** | **Show usage using analytics** |
| :--- | :--- |
| **Narration** | ABC |
| **Action** &nbsp; 3.1.1 | Click the **Scale** button associated with the Mobile App section.<br/> <img src="images/3-1-1-click-scale.png" width="800" /> |

<br/>

**[Go to top](#place1)**

<br/><br/>

</details>

<p/>

<details markdown="1">

<summary>Summary</summary>

<br/>

In this demo we showed how Focus Corps u


Thank you for attending today’s presentation.


**[Go to top](#place1)**

<br/><br/>

</details>
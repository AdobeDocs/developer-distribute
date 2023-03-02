---
keywords:
  - Creative Cloud
  - Marketplace
  - Exchange
  - Distribution
  - Extensibility
  - SDK
  - Developer Tooling
  - UXP
  - Photoshop
  - XD
  - Plugin
  - JavaScript
  - Developer Console
  - Creative Cloud Desktop
  - FastSpring
title: FAQ - Frequently Asked Questions
description: This is the FAQ page
---

# Frequently Asked Questions

This document provides answers to frequently asked questions about Adobe Developer Distribution. This is a great place to start when troubleshooting a problem with distributing your plugin.

## Questions

<br/>

- [How do I set up an account with FastSpring to collect revenue for my first paid listing?](#how-do-i-set-up-an-account-with-fastspring-to-collect-revenue-for-my-first-paid-listing)
- [What do I do when I get “Access Denied” upon login?](#what-do-i-do-when-i-get-access-denied-upon-login)
- [When will ZXPs be supported by this portal?](#when-will-zxps-be-supported-by-this-portal)
- [What is the revenue share for paid products?](#what-is-the-revenue-share-for-paid-products)
- [What should I do to get support with development?](#what-should-i-do-to-get-support-with-development)
- [How do Categories and Tags work?](#how-do-categories-and-tags-work)
- [How can I fix a server error encountered while using the portal?](#how-can-i-fix-a-server-error-encountered-while-using-the-portal)
- [When do I have to complete my public profile?](#when-do-i-have-to-complete-my-public-profile)
- [How can I troubleshoot the following errors on package upload?](#how-can-i-troubleshoot-the-following-errors-on-package-upload)
- [I’m stuck! Can you help me?](#im-stuck-can-you-help-me)

## Answers

### How do I set up an account with FastSpring to collect revenue for my first paid listing?

Use [this link](https://fastspring.com/sign-up/payee-adobe/) to create an account with our third-party payment provider FastSpring in order to sell paid plugins.

Once you have your account you can [login to FastSpring](https://springboard.fastspring.com/email.xml) and set your payment method. After you obtain your key, set it in the Commerce section of your public profile under the "Account and Profile".

Please contact [CC Integrations Review](https://partners.adobe.com/exchangeprogram/creativecloud/support/faq.html#Tabs_contentbody_section_par_tabs_tab3:~:text=CC%20Integrations%20Review) if you need help entering your FastSpring key.

### What do I do when I get “Access Denied” upon login?

First, if you have both an Enterprise and Personal account, you can try to login with the other. Next, if you are in an Enterprise, you should contact your Adobe Admin to get access. If you are not aware of who it is, see [this link](https://helpx.adobe.com/enterprise/kb/contact-administrator.html). Your Admin should consult the Admin Console Guide [here](https://helpx.adobe.com/enterprise/admin-guide.html/enterprise/using/users.ug.html). Adobe Employees may use this slack channel to get help: [#adobe-admin-console](https://adobe-torq.slack.com/archives/C20KF6FAP). If you work for an Enterprise we recommend that you do not use your Personal account to develop any shared plugins.

### When will ZXPs be supported by this portal?

Support for ZXPs is planned for June 2023.

### What is the revenue share for paid products?

For any paid product you offer for sale you will take 90% of the sales revenue. Further details are covered here. You will need to register with our payment provider FastSpring. After you have registered, you will receive a special FastSpring key and a small text reference you need to add to your profile page, so we can ensure all sales are applied to your account.

### What should I do to get support with development?

Please refer to this page for development support. The developer support annual case bundles are priced as follows:

- [Three cases for US$ 750](https://adobedeveloper-production.onfastspring.com/annual-developer-support-plan)
- [Seven cases for US$ 1,600](https://adobedeveloper-production.onfastspring.com/annual-developer-support-plan-7-cases)

### How do Categories and Tags work?

#### Categories:

When creating or editing a listing, you can choose from five categories:

1. Collaboration
2. Tools & Automation
3. Usability & Testing
4. Publish & Handoff
5. Design Assets

**Note:** Developers can select up to two categories at a time.

#### Tags:

In addition to the pre-defined categories, you can also add custom tags to your listing. To create a new tag:

- Type at least two characters for your tag.
- Use up to 100 characters to describe your tag.
- Hit "Enter" to create the tag.

<!-- You can select up to two categories out of five available for creating custom tags for your UXP listing, and each custom tag you define will apply to both. The five categories are currently "Collaboration". "Tools & Automation", "Usability & Testing", "Publish & Handoff" and "Design Assets". -->

### Do I need to use the Adobe Developer Console at all in the process of distributing my plugin?

No, the Adobe Developer Console is no longer required in the process of distributing a plugin since you can simply [get a plugin ID](./plugin_id.md) from the Developer Distribution portal itself. However, the option to create a plugin on a project still exists in the Adobe Developer Console, but it will simply route you to the Adobe Developer Distribution portal to actually create and manage your listing.

### How can I fix a server error encountered while using the portal?

Kindly clear the cache and cookies (at least the adobe.com cookies) before logging in to the Developer Distribution portal. If the issue persists, then please follow these steps:

1. Clear the browser cache and cookies.

2. Log out from the Developer Distribution portal and log in again.

3. Use the steps below to collect the browser network and console logs as you try to publish your listing.

How to capture browser network and console logs:

- Open the Chrome browser and reproduce the error.
- Open the Chrome Developer Tools by typing Cmd+Option+I on Mac or F12 on Windows.
- Please keep the Developer Tools open to see the error.
- Select the Network tab and in the Name column, click on the Name for which you are getting server errors.
- Share all the details that appear in the Headers tab (Request URL, Response Header, Request Headers etc.)
- Next, select the Console tab and share the logs if you see any errors there.

Create a HAR file by following the steps in this article: https://support.zendesk.com/hc/en-us/articles/204410413-Generating-a-HAR-file-for-troubleshooting

Kindly share both the network logs and the HAR file through Google Drive or Dropbox.

If possible, record a video and share it as well, via link or in the same Google Drive or Dropbox folder.

Share the logs described above with us (share the logs in the HAR file along with screenshot of network/console logs with ccintrev@adobe.com. Providing logs (and optionally video) will help the Adobe Engineering team in fixing the problem expeditiously.

### When do I have to complete my public profile?

The public profile _must_ be submitted with at least the minimum required fields before, or simultaneously with your first listing submission.

### How can I troubleshoot the following errors on package upload?

- Plugin manifest has an invalid host app min version
- Ensure that the Adobe product minimum version is in valid x.y format.
- Ensure that the Adobe product maximum version is in valid x.y format.

##### UXP Manifest Notes

Due to an issue with the Exchange portal, the `host.minVersion` and `host.maxVersion` in your UXP plugin manifest must be specified in a.b format. We will soon support the a.b.c format (later in 2023, the date is unconfirmed at this time). For example, if your `manifest.json` contains:

```
    "host": {
        "app": "PS",
        "minVersion": "22.5.7"
    },
```

Before submitting to the Marketplace, please edit your `manifest.json` to an a.b. `minVersion` format:

```
    "host": {
        "app": "PS",
        "minVersion": "22.5"
    },
```

### I’m stuck! Can you help me?

It’s all going to be OK. [Email us](mailto:ccintrev@adobe.com) and we’ll help you.

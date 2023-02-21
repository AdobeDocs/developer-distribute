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
title: Submission and Review - Overview
description: This is the submission and review overview page
---

# Submission and Review

Congratulations! You've built a great plugin and you're ready to release it to your customers.

To publish on our Marketplaces, your plugin must first go through a review process.
By reviewing every plugin, Adobe aims to help developers get ready for prime time and ensure that users have great experiences with the plugins they consume. Our goal is to balance providing you with the best developer experience during the review process as possible, while also ensuring the approved plugins offer a great user experience for our mutual customers.

<InlineAlert slots="text" variant="info"/>

This set of guides is meant to provide you with an idea of what types of information you will need for the submission process and how to best prepare for review. Working through the guides provided in this section will help you make sure you’ve accounted for all of the requirements so you can avoid having to fix things and resubmit before being published.

## Submission Data Requirements

Below is the list of data you will be asked to provide during the submission process.

### Publisher profile

Your publisher profile is about you as a company or developer as whole. Once you've submitted this information and it has been approved by Adobe, it is shown for all plugins and integrations you publish with Adobe.

Your publisher profile includes required details like:

1. Your publisher public name (often company name or, for individuals, your own name)

2. Your publisher marketing website (again, because this is part of the publisher profile, this website shows for all things you publish with Adobe and should be scoped to you as the publisher, not scoped to any single plugin or integration you submit)

3. A description of you, the publisher

4. Your logo

<InlineAlert slots="text" variant="info"/>

You must complete and submit your publisher profile in order to submit your first plugin, however this is only a one time thing, unless you decide you need to update for your own reasons.

**Note:** Any changes to your publisher profile will need to be submitted for approval again.
Frequently changing your publisher profile will confuse users and erode trust. Please be sure you're ready before entering this information.

#### Commerce

For paid plugin listings, you’ll need to register with Adobe’s third-party payment provider, [FastSpring](https://fastspring.com/sign-up/payee-adobe/), and enter your FastSpring key into your publisher profile. Please note that it may take up to 24 hours for FastSpring to create your key.

### Listing Details

Your listing metadata provides Adobe and users with details about the plugin you are currently submitting. See the [plugin version details below](#plugin-version-details) for the metadata that is submitted for each plugin version.

The information you add in the following tabs will be made public to users via Adobe's Marketplace surfaces once your listing is published.

#### General Tab

- Public plugin name
- Subtitle
- Support email
- Help URL
- Description

#### Localizations Tab

Localized versions of:

- Public plugin name
- Subtitle
- Description

#### Media Tab

- 3 plugin icon sizes

#### Tags Tab

- Categories
- Custom Tags

#### Services Tab

- Privacy policy
- Terms of service
- Commerce: purchase method (paid or free)

### Plugin Version Details

Here you will provide plugin level details for each plugin version submitted.

The information you add in the following tabs will be made public to users via Adobe's Marketplace surfaces once your version is published.

#### General Tab

- Plugin package file (see the [section below](#plugin-package))
- If your plugin requires another application
- If your plugin requires a 3rd party service
- Plugin UI supported languages
- Release notes

#### Localizations Tab

Localized versions of:

- Release notes

#### Media Tab

- Screenshots
- Videos

#### Plugin package

As part of your submission, you will upload your plugin package. Take the following steps to create your plugin package.

1. Compress your plugin files as a **.zip** file

   - Select all files within your plugin's parent folder. On both macOS and Windows you can right-click to compress:

     **macOS**:
     Right-click > Compress items

     **Windows**:
     Right-click > Send to > Compressed (zipped) folder

     **Note:** You should _not_ compress the plugin's parent folder. Instead, compress the contents of the parent folder. Failure to do so will likely cause a rejection when submitting.

2. Rename the **.zip** extension to **.xdx** or **.ccx** depending on the target host app.

   - Adobe XD recognizes the **.xdx** file extension as an **XD** plugin and Photoshop recognizes the **.ccx** as a **Photoshop** plugin.

   - By using this file extension, your plugin automatically gets the "double-click to install" feature, meaning that if you share your plugin directly to users, all they have to do is double-click to install the plugin.

3. Verify the packaging worked:

   - Double-click your final plugin package file. When your OS prompts you to install the plugin, click "Install".

   - Verify you see a success message upon installation and your plugin available in the host app.

<!-- **Note:** If you plan to distribute via the XD plugin manager, your .zip file must be less than 25MB in size and contain fewer than 3,000 files. You'll only be able to submit for review if your file is under these limits. -->

<!-- <InlineAlert slots="text" variant="warning"/> -->

<!-- The package extension will differ depending on which host platform you're building for:

- **Photoshop**: requires a plugin package with an **.ccx** extension
- **XD**: requires a plugin package with an **.xdx** extension -->

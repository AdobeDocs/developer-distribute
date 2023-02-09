# Submission and Review

Congratulations! You've built a great plugin and you're ready to release it to your customers.

To be able to publish on our marketplace, your plugin must first go through a review process.
By reviewing every plugin, Adobe aims to help developers get ready for prime time and ensure that users have great experiences with the plugins they consume. Our goal is to balance providing you the best developer experience during review that we can, while helping ensure that approved plugins offer a great user experience for our mutual customers.

This document will give you an idea of how to prepare for and submit to the review process, as well as details on what we’re checking for. While lengthy, working through the points below will help you make sure you’ve accounted for all of the requirements, and avoid having to fix things and resubmit before being published. Please note that this list is intended as a helpful overview; it will change over time, and cannot cover absolutely everything we look at.

## Pre-submission Checklist

**\_NEEDS UPDATE**\_

As part of submission, you will provide Adobe with 3 types of data via the Adobe Developer Console:

1. A publisher profile about you, the developer

2. Listing information about the specific plugin you are submitting

3. Your plugin package

In this section, we will take a look at each of these types of data. For specifics regarding character lengths, image dimensions, and required fields, always refer to the Adobe Developer Distribution submission portal for the latest requirements.

We recommend that you draft this metadata in a text editor, and not directly in the Adobe Developer Distribution portal. This will help you avoid losing your writing if your browser refreshes before submission.

### Publisher profile

Your publisher profile is about you as a company or developer as whole. Once you've submitted this information and it has been approved by Adobe, it is shown for all plugins and integrations you publish with Adobe.

Your publisher profile includes required details like:

1. Your publisher public name (often company name or, for individuals, your own name)

2. Your publisher marketing website (again, because this is part of the publisher profile, this website shows for all things you publish with Adobe and should be scoped to you as the publisher, not scoped to any single plugin or integration you submit)

3. A description of you, the publisher

4. Your logo

<!-- **_Your publisher profile is an important thing to get right the first time!_**  -->
<InlineAlert slots="text" variant="warning"/>
Your publisher profile is an important thing to get right the first time!

After it is approved, changing it is not easy or fast; you will have to email us via the "View public profile" link on your Adobe Developer Console project. Doing so will trigger a new review of your publisher details, and possibly of your plugin as well.

Frequently changing your publisher profile will confuse users and erode trust. Please be sure you're ready before entering this information.

<!-- **_You must complete your publisher profile in order to submit your first plugin or integration._**  -->

<InlineAlert slots="text" variant="info"/>
You must complete your publisher profile in order to submit your first plugin or integration.

Next time you submit something, your publisher profile will already be set, so you won't need to do this again.

### Listing information

Your listing information provides Adobe and users with details about the specific plugin you are currently submitting. Each plugin you submit will have its own listing information that you provide.

Always check the Adobe Developer Console for the latest list of required details. At the time of writing, those details include the following lists.

### Plugin information

The information you add here will be made public to users via Adobe's marketplace surfaces once your plugin is approved. An list of some of the types of metadata entered here is below:

- Public plugin name
- Subtitle
- Support URL or email
- Description
- Tags
- Categories
- Languages supported

### Commerce

### Connection to other applications and services

### Privacy policy and terms

### Plugin icon

### Screenshots

### Plugin package

As part of your submission, you will upload your plugin package. This section covers details on how to create your plugin package.

**Note:** The package extension will different depending on which host platform you're building for:
**Photoshop**: requires a plugin package with an .ccx extension
**XD**: requires a plugin package with an .xdx extension

1. Compress your files as a .zip file

   Select all files within your plugin's parent folder. On both macOS and Windows you can right-click to compress:

   - macOS
     Right-click > Compress items

   - Windows
     Right-click > Send to > Compressed (zipped) folder

   **Note:** If you plan to distribute via the XD plugin manager, your .ZIP file must be less than 25MB in size and contain fewer than 3,000 files. You'll only be able to submit for review if your file is under these limits.

   <InlineAlert slots="text" variant="warning"/>
   **Danger:** You should not compress the plugin's parent folder. Instead, compress the contents of the parent folder. Failure to do so will likely cause a rejection when submitting to the Adobe Developer Console.

2. Rename the .zip extension to .xdx

   Adobe XD recognizes the .xdx file extension as an XD plugin.

   By using this file extension, your plugin automatically gets the "double-click to install" feature, meaning that if you share your plugin directly to users, all they have to do is double-click to install the plugin to Adobe XD.

   If you plan to submit your plugin for distribution via the XD plugin manager, renaming your .zip to .xdx is required.

3. Verify the packaging worked

   Try double-clicking your .xdx file. When your OS prompts you to install the plugin, click "Install".

   You'll get a success message upon installation, after which the plugin will show up in XD.

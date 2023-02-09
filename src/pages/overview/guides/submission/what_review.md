# What We Review

In this section, we will show many of our review test cases and criteria. Each review test case is cause for rejection if not adhered to.

This is not meant to be an exhaustive list of what we review for, and our test cases will change and evolve over time. However, checking through each of these test cases will improve your chances of being approved the first time.

## Publisher Profile

All data in your publisher profile will be reviewed, including your _public name_, _website_, and _logo_. Make sure that your publisher profile is [Adobe Branding Guidelines](../branding_guidelines.md) compliant.

## Listing Details

Users will see your plugin listing and version details when browsing the Creative Cloud Plugin Marketplace.

In this section, we’ll go over what we’re checking for to ensure that your plugin listing details are complete, correct, and in line with Adobe’s standards.

### Plugin Metadata

- A plugin name should be unique and not identical to existing third party plugin name.

- A plugin name can only include the host app name (e.g. “Photoshop” or “XD”) if it fits the pattern `“{Plugin Name} for XD”. Refer to the [Adobe Branding section](#adobe-branding)for further information.

  - **Acceptable:** “Rectangulator”, or “Rectangulator for Photoshop”

  - **NOT Acceptable:** “Photoshop Rectangulator”, or “Rectangulator Photoshop.

- The plugin description must be relevant and self-explanatory.

- Regardless of supported languages, an English description must be provided.

- All listing content, including author name, email address, and website must comply with Adobe Branding Guidelines.

- Any plugin website must provide an email address or contact form so that users can contact the plugin developer easily.

- The listing may not link to websites that are in development (i.e. “under construction”, “coming soon”, etc). Your website will be reviewed, and it must be live at the time of review.

### Manifest Minimum Versions

You will need to set your plugin manifest's minimum version depending on the host app and API features you are using.

#### Photoshop

For all UXP plugins, the manifest `minVersion` must be set to 22.0 or above.

#### XD

For panel plugins, the manifest `minVersion` must be set to 21.0 or above.

For modal or headless plugins, the manifest minVersion must be set to 13.0 or above, although 21.0 or above is recommended to take advantage of newer improvements in UXP.

### Icons

- Placeholder icons will not be accepted. Icons must be unique and must be property of the plugin author. Submissions that contain icons from sample projects (or variations thereof) will be rejected.

- Plugin icons may not contain Adobe product assets or icons.

- Plugin icons must be clear and free of distortion.

- All required plugin icons must be provided at the appropriate dimensions and file sizes. See the manifest documentation for your host app and "Pre-submission checklist" in this guide to learn more about which icons to include in your plugin package versus which to upload via the Adobe Developer Console.

- Plugin icon should be visible properly when the Creative Cloud Desktop Color theme is set to Dark mode.

### Adobe Branding

- Make sure to review and adhere to the [Adobe Branding Guidelines](../branding_guidelines.md).

- Avoid using publisher names, domain names, email addresses, and other such property names that are confusingly similar to existing Adobe brand, product, or service names.

- Using Adobe assets and icons in your plugin or your plugin marketing material requires explicit permission from Adobe (see Adobe Branding Guidelines for details). Note that getting permission to use Adobe branding assets can add to the time it takes to get your plugin approved and published.

### External Services

If your plugin requires paid credentials, when you submit your plugin to Adobe, you must provide test account login credentials, license number, or anything else that would be required to ensure that we can fully review your plugin.

**Note:** All plugin functionality must be accessible, either openly or through the credentials that you provide Adobe, for Adobe's reviewers.

### Third Party Companion Apps

- When a companion app is required, your plugin's description must indicate where the user can download the companion app.

- The companion app must successfully install on platforms it claims to support.

- The companion app must be able to successfully communicate with the plugin.

- The companion app must not cause abnormal resource usage (e.g., CPU, RAM, storage).

## User Experience

Checking the plugin's user experience is the core of our review process. Once users install your plugin, we want to make sure they have a great experience with their newfound addition to the host app's core product. In this section, we’ll go over what we’re reviewing in terms of your plugin’s functionality, UI, and more.

Since all plugins are different, it isn't possible to provide a permanent and exhaustive list of what we look at. However, we are generally looking at these three areas: functionality, user interface, and performance.

### Functionality

Does the plugin do what is suggested by the associated content and the user interface?

### User interface

Is the user able to complete tasks? Is the UI broken or distorted in any way? Is the user made aware of what is (or isn't) happening?

### Performance

Are system or account resources misused or overused? Is the user left waiting for an abnormal amount of time?

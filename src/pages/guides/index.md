<Hero slots="heading, text" background="rgb(141, 52, 78)" hideBreadcrumbNav={false} width="100%"/>

# Adobe Developer Distribution

A self-service submission portal for Creative Cloud UXP plugin developers to publish listings on the Adobe Exchange and Creative Cloud Marketplaces.

## Overview

[Adobe Developer Distribution](/distribute/home) is a portal with the sole purpose of distributing plugins. Previously, developers used the [Adobe Developer Console](/developer-console) to associate a project with a plugin ID for distributing UXP plugins. The new [Adobe Developer Distribution](/distribute/home) allows developers to skip the step of visiting the Adobe Developer Console and instead provides a one-stop place to do everything needed for distributing their UXP plugins. This documentation provides guidance on how to use the new portal and details on all of the new developer features it unlocks. Future releases of the portal will support ZXP plugin support, as well as additional UXP plugins for more Creative Cloud apps and integrations for other Adobe Clouds.

**Note:** Developers can still choose to start in the Adobe Developer Console to create or manage a listing for their plugins if desired, but they will now simply be routed to the [Adobe Developer Distribution portal](/distribute/home) to complete the rest of the steps.

## Developer Distribution New Listing Use Cases

![Diagram outlining the Use Cases of Developer Distribution. Text description in collapsible element below.](../images/use-cases.drawio.svg)

<details>
    <summary>Text Description of Diagram</summary>

Diagram listing common use cases:
- Developer Distribution (Start with the listing metadata):
  1. Create new listing
  2. Download starter package with plugin ID
  3. Upload plugin & enter version details
  4. Submit for review.
- Developer's own sandbox (Develop new plugin):
  1. Create new listing
  2. download starter package with plugin ID
  3. upload plugin & enter version details
  4. complete listings & submit for review.
- UXP Development Tool (UDT) (Develop plugin using temporary plugin ID):
  1. Create new listing
  2. obtain plugin ID and add to manifest
  3. upload plugin & enter version details
  4. complete listing & submit for review.
- Adobe Developer Console (Create plugin project and get plugin ID):
  1. Create new listing
  2. upload plugin & enter verison details
  3. complete listing details
  4. submit for review

</details>

## Access the Developer Distribution Portal

For individual users who do not belong to an Adobe Enterprise or Team organization, we will automatically create your own personal Developer organization during sign-up. This is a common scenario for UXP Plugin Developers. Please see this [guide to identity types for more information](https://helpx.adobe.com/enterprise/using/identity.html).

Note that if multiple people need to manage a plugin, they will have to share the same Adobe ID credential used.

Users who already belong to an Adobe Enterprise or Team organization require either System Administrator or Developer permissions to access the Adobe Developer Console. If you are denied access to Developer Distribution when logging in with a “Company” Adobe ID, [contact your system administrator](https://helpx.adobe.com/enterprise/kb/contact-administrator.html) about getting Developer permissions assigned. More information about user management can be found in [the Adobe Admin Console guide](https://helpx.adobe.com/enterprise/using/setup-enterprise-id.html).

<br/>

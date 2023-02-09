# Glossary

## App

A 3rd-party distributable item. It could be a UXP/ZXP plugin, a DX Application, an Adobe Sign Integration etc. and may or may not be associated with an API. To unlock future features, all Apps will have a project assigned to them.

## Listing 

How an _App_ is published on the marketplace. A _Listing_ contains metadata and at least one plugin _Version_.

## Version

The downloadable portion of an _App_. A UXP listing can have multiple _Versions_ available to users simultaneously, while ZXP listings only offer the latest _Version_.

## Console Project

Every _Listing_ is associated with a _Console Project_, which serves as a container created in the Adobe Developer Console to enable a future feature of bundling of plugins, APIs and other Console services.

## Product

A Creative Cloud host app associated with a particular _Listing_. UXP plugins can only be associated with one _Product_ (currently Photoshop or XD).

## Platform

The platform being extended. Currently only UXP and ZXP will be introduced by June 2023.

## Listing Status

The lifecycle of a _Listing_ can be tracked by status on the “Your Listings” and "Listings details" pages. The lifecycle of multiple _Versions_ within a _Listing_ (i.e., _Version Status_) is displayed on the left rail of the "Listing details" page.

- **Draft** – A _Listing_ that does not have complete metadata or has not been reviewed.

- **In Review** – A _Listing_ that has been submitted but is waiting for reviewer approval

- **Approved** – A _Listing_ that has been reviewed but not yet published. A developer has chosen to “publish later” and can do so by clicking the “Publish” CTA.

- **Published** – A reviewed _Listing_ that can be searched and browsed on a marketplace if public. DP deep-link is enabled to allow users to acquire public or limited apps.

- **Retracted** – A reviewed published _Listing_ whose Details Page deep-link is disabled and no longer discoverable.

- **Rejected** – A submission that was rejected by reviewers. Reviewer notes are displayed on the listing page until the first edit is saved whereby the status goes back to Draft.

## Version Status

Follows the same lifecycle milestones as _Listing Status_. The status of each _Version_ within a _Listing_ is tracked independently since it is possible to publish or retract a _Version_ without affecting the status of a _Listing_. Conversely if a _Listing_ is retracted, all _Versions_ within that _Listing_ are automatically retracted. _Version Status_ can be found on the left side of "Listing detail" pages.

## Status Headlight Colors

The colored circle next to the status that acts as a visual representation of the status.

- **Grey** – Draft, In Review and Rejected listings with unapproved content.

- **Blue** - Published, Approved, Retracted listings with “reviewed” content.

- **Orange** – draft listing edits, in review or rejected.

## Listing edits

Enables the modification of _Listing_ metadata for **Published**, **Approved** or **Retracted** _Listings_. _Listing edits_ are ideal for a developer to make a quick metadata update as reviewers require minimal turnaround time. _Listing edits_ are applied immediately upon approval. _Listing Status_ suffixes highlight the pending edit status until approved.

- **editing** – Draft edits in place

- **edits in review** - Edits were submitted for approval

- **edits rejected** - Edits were rejected

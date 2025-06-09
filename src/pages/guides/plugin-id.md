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
title: Get a Plugin ID
description: This is the get a plugin ID page
---

# Get a Plugin ID

Each Marketplace listing should have a unique Plugin ID. The plugin package manifest should use the same ID that is associated with the listing. You can obtain a unique plugin ID in any of the following three ways:

## Starting from the Adobe UXP Developer Tool (UDT)

Build your plugin using UDT, and once you are ready to publish click on ‘Share on marketplace’. From the Developer Distribution home page, create a new listing and simply copy the unique plugin ID generated. Replace the ID in your plugin package manifest with the copied plugin ID.

## Starting from Adobe Developer Distribution

Create a new listing from the [Developer Distribution home page](https://developer.adobe.com/distribute/home) and download a starter package from the "Listing Overview" page, which will automatically contain the new plugin ID.

## Starting from Adobe Developer Console

Add a plugin to a project in Developer Console and download a starter package. Click on "Distribute" and you will be redirected to the Developer Distribution "Listing Overview" page.

<InlineAlert slots="text"/>

This is considered a legacy option with the introduction of the new Developer Distribution portal.

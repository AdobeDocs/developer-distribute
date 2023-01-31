/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

module.exports = {
  // pathPrefix: process.env.PATH_PREFIX || "/creative-cloud/distribution/",
  // The /developer-distribution will go to the helix landing page
  pathPrefix: process.env.PATH_PREFIX || "/developer-distribution/overview",
  siteMetadata: {
    pages: [
      {
        path: "/developer-distribution",
        title: "Developer Distribution",
      },
      {
        path: "overview/guides",
        title: "Documentation",
      },
      {
        title: "Support",
        path: "overview/support/",
      },
    ],
    subPages: [
      {
        path: "overview/guides/index.md",
        title: "Developer Distribution",
        pages: [
          {
            path: "overview/guides/getting_started.md",
            title: "Getting Started",
          },
          {
            title: "Reference",
            path: "overview/guides/reference/index.md",
            pages: [
              {
                path: "overview/guides/reference/listing/overview.md",
                title: "Home",
              },
              {
                title: "List of Listings",
                path: "overview/guides/reference/listings.md",
              },
              {
                title: "Listing",
                path: "overview/guides/reference/listing/index.md",
                pages: [
                  {
                    path: "overview/guides/reference/listing/overview.md",
                    title: "Overview",
                  },
                  {
                    path: "overview/guides/reference/listing/details.md",
                    title: "Details",
                  },
                  {
                    path: "overview/guides/reference/listing/versions.md",
                    title: "Versions",
                  },
                  {
                    path: "overview/guides/reference/listing/insights.md",
                    title: "Insights",
                  },

                  {
                    title: "Preview and Submit",
                    path: "overview/guides/reference/listing/preview_submit.md",
                  },
                ],
              },
            ],
          },
          {
            title: "Submission Guidelines",
            path: "overview/guides/submission_guidelines.md",
          },
          {
            title: "Glossary",
            path: "overview/guides/glossary.md",
          },
        ],
      },
      {
        path: "support/index.md",
        title: "Support",
        pages: [
          {
            path: "support/faq.md",
            title: "FAQ",
          },
        ],
      },
    ],
  },
  plugins: [`@adobe/gatsby-theme-aio`],
};

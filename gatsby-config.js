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
        path: "overview/guides/index.md",
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
            path: "overview/guides/plugin_id.md",
            title: "Get a Plugin ID",
          },
          {
            title: "Submission and Review",
            path: "overview/guides/submission/overview.md",
            pages: [
              // {
              //   path: "overview/guides/submission/how_submit.md",
              //   title: "How to Submit",
              // },
              {
                path: "overview/guides/submission/what_review.md",
                title: "What We Review",
              },
              {
                path: "overview/guides/submission/timelines_outcomes.md",
                title: "Timelines and Outcomes",
              },
              {
                path: "overview/guides/submission/rejection_reasons.md",
                title: "Top Rejection Reasons",
              },
            ],
          },
          {
            path: "overview/guides/branding_guidelines.md",
            title: "Adobe Branding Guidelines",
          },
          {
            path: "overview/guides/best_practices.md",
            title: "Benefits and Best Practices",
          },
          // {
          //   path: "overview/guides/commerce.md",
          //   title: "Commerce Guidelines ",
          // },
          // {
          //   title: "User Guide",
          //   path: "overview/guides/reference/index.md",
          //   pages: [
          //     {
          //       path: "overview/guides/reference/listing/overview.md",
          //       title: "Home",
          //     },
          //     {
          //       title: "List of Listings",
          //       path: "overview/guides/reference/listings.md",
          //     },
          //     {
          //       title: "Listing",
          //       path: "overview/guides/reference/listing/index.md",
          //       pages: [
          //         {
          //           path: "overview/guides/reference/listing/overview.md",
          //           title: "Overview",
          //         },
          //         {
          //           path: "overview/guides/reference/listing/details.md",
          //           title: "Details",
          //         },
          //         {
          //           path: "overview/guides/reference/listing/versions.md",
          //           title: "Versions",
          //         },
          //         {
          //           path: "overview/guides/reference/listing/insights.md",
          //           title: "Insights",
          //         },
          //         {
          //           title: "Preview and Submit",
          //           path: "overview/guides/reference/listing/preview_submit.md",
          //         },
          //       ],
          //     },
          //   ],
          // },
          {
            title: "FAQ",
            path: "overview/support/faq.md",
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

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
  pathPrefix: process.env.PATH_PREFIX || "/creative-cloud/distribution/",
  siteMetadata: {
    pages: [
      {
        path: "/",
        title: "Developer Distribution",
      },
      {
        path: "guides/index.md",
        title: "Documentation",
      },
      {
        title: "Support",
        path: "/support/",
      },
    ],
    subPages: [
      {
        path: "guides/index.md",
        title: "Developer Distribution",
        pages: [
          {
            path: "guides/getting_started.md",
            title: "Getting Started",
          },
          {
            title: "Developer Distribution App",
            path: "https://developer-stage.adobe.com/distribute/home",
          },
          {
            title: "Listing Details",
            path: "/guides/listing_details/overview.md",
            pages: [
              {
                path: "/guides/listing_details/overview.md",
                title: "Overview",
              },
              {
                path: "/guides/listing_details/listing_details.md",
                title: "Listing Details",
              },
              {
                path: "/guides/listing_details/versions.md",
                title: "Versions",
              },
              {
                path: "/guides/listing_details/review_history.md",
                title: "Review History",
              },
              {
                path: "/guides/listing_details/insights.md",
                title: "Insights",
              },
            ],
          },
          {
            title: "Submission",
            path: "/guides/submission.md",
          },
          {
            title: "Glossary",
            path: "/guides/glossary.md",
          },
          {
            title: "FAQ",
            path: "/guides/faq.md",
          },
        ],
      },
    ],
  },
  plugins: [`@adobe/gatsby-theme-aio`],
};

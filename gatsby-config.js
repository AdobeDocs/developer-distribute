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
  pathPrefix:
    process.env.PATH_PREFIX || "/developer-distribution/creative-cloud/docs/",
  siteMetadata: {
    pages: [
      {
        path: "/developer-distribution/creative-cloud/",
        title: "Developer Distribution",
      },
      {
        path: "guides/index.md",
        title: "Documentation",
      },
      {
        title: "Support",
        path: "support/index.md",
      },
    ],
    subPages: [
      {
        path: "guides/index.md",
        title: "Developer Distribution",
        pages: [
          {
            path: "guides/cep/coming_soon.md",
            title: "Coming soon for CEP",
          },
          {
            path: "guides/getting_started.md",
            title: "Getting Started",
          },          
          // {          
          //   path: "guides/cep/zxp_distribution.md",
          //   title: "What's new with ZXP",
          // },
          {
            path: "guides/cep/troubleshoot_resources",
            title: "Build and Troubleshoot Resources",
          },
          {
            path: "guides/plugin_id.md",
            title: "Get a Plugin ID",
          },
          {
            title: "Submission and Review",
            path: "guides/submission/overview.md",
            pages: [
              {
                path: "guides/submission/what_review.md",
                title: "What We Review",
              },
              {
                path: "guides/submission/timelines_outcomes.md",
                title: "Timelines and Outcomes",
              },
              {
                path: "guides/submission/rejection_reasons.md",
                title: "Top Rejection Reasons",
              },
            ],
          },
          {
            path: "guides/branding_guidelines.md",
            title: "Adobe Branding Guidelines",
          },
          {
            path: "guides/best_practices.md",
            title: "Benefits and Best Practices",
          },
          {
            title: "FAQ",
            path: "guides/faq.md",
          },
          {
            title: "Glossary",
            path: "guides/glossary.md",
          },
        ],
      },
    ],
  },
  plugins: [`@adobe/gatsby-theme-aio`],
};

/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

module.exports = {
  title: 'Reason Native', // Title for your website.
  tagline: 'Libraries for building and testing native Reason programs.',
  // For github.io type URLs, you would set the url and baseUrl like:
  url: 'https://mesaugat.github.io',
  baseUrl: '/reason-native/',

  // Used for publishing and more
  projectName: 'reason-native',
  organizationName: 'mesaugat',
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  themeConfig: {
    disableDarkMode: true,
    navbar: {
      logo: {
        alt: 'Reason Native',
        src: 'img/logo-inverted.svg'
      },
      links: [
        {
          to: 'docs/introduction',
          label: 'Docs',
          position: 'right'
        },
        {
          to: 'help',
          label: 'Help',
          position: 'right'
        },
        {
          href: 'https://github.com/facebookexperimental/reason-native',
          label: 'GitHub',
          position: 'right'
        },
        // { to: 'blog', label: 'Blog', position: 'left' }
      ]
    },
    footer: {
      logo: {
        alt: 'Facebook Open Source',
        src: 'img/oss-logo.png',
        href: 'https://opensource.facebook.com/'
      },
      links: [
        {
          title: 'Projects',
          items: [
            {
              to: 'docs/rely/introduction',
              label: 'Rely'
            },
            {
              to: 'docs/console/introduction',
              label: 'Console'
            },
            {
              to: 'docs/pastel/introduction',
              label: 'Pastel'
            },
            {
              to: 'docs/refmterr/introduction',
              label: 'Refmterr'
            },
            {
              to: 'docs/file-context-printer/introduction',
              label: 'File Context Printer'
             }
          ]
        },
        {
          title: 'More',
          items: [
            {
              href: 'https://github.com/facebookexperimental/reason-native',
              label: 'GitHub'
            },
            {
              html: '<a class="github-button" href="https://github.com/ntkme/github-buttons" data-icon="octicon-star" data-show-count="true" aria-label="Star ntkme/github-buttons on GitHub">Star</a>'
            }
          ]
        }
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Facebook Inc.`,
    },
    image: 'img/logo.png'
  },

  favicon: 'img/logo.png',

  // Add custom scripts here that would be placed in <script> tags.
  scripts: ['/js/ansi-to-html.js', 'https://buttons.github.io/buttons.js', '/js/ansi.js'],

  // preset which bundles most of the essential plugins present in Docusaurus 1
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // docs folder path relative to website dir.
          path: '../docs',
          // sidebars file relative to website dir.
          sidebarPath: require.resolve('./sidebars.json')
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css')
        }
      }
    ]
  ]
};

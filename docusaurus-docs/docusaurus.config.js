// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer').themes.github;
const darkCodeTheme = require('prism-react-renderer/').themes.dracula;

const fs = require('fs');
const path = require('path');

// Function to read package.json and get version
function getVersion() {
  const packagePath = path.join(__dirname, 'package.json');

  try {
    const packageJson = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
    return packageJson.version;
  } catch (err) {
    console.error('Error reading the package.json file:', err);
    return null;
  }
}

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Jens Reiner',
  tagline: 'My personal website with my blog and my so called SE Toolbox',
  favicon: 'img/favicon.ico',
  staticDirectories: ['static'],

  // Set the production url of your site here
  url: 'https://your-docusaurus-test-site.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/software-engineering-toolbox',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'wasdJens', // Usually your GitHub org/user name.
  projectName: 'software-engineering-toolbox', // Usually your repo name.
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        blog: {},
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: undefined,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        pages: {
          path: 'src/pages',
          routeBasePath: '',
          include: ['**/*.{js,jsx,ts,tsx,md,mdx}'],
          exclude: [
            '**/_*.{js,jsx,ts,tsx,md,mdx}',
            '**/_*/**',
            '**/*.test.{js,jsx,ts,tsx}',
            '**/__tests__/**',
          ],
          mdxPageComponent: '@theme/MDXPage',
          remarkPlugins: [],
          rehypePlugins: [],
          beforeDefaultRemarkPlugins: [],
          beforeDefaultRehypePlugins: [],
        }
      },
    ],
  ],

  themeConfig:
    {
      announcementBar: {
        id: 'version',
        content: `🚧 Under Development  - Version: ${getVersion()}`,
        backgroundColor: '#FFFF00',
        textColor: '#091E42',
        isCloseable: true,
      },
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Jens Reiner',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo_fixed.png',
          height: 42,
          width: 42,
        },
        items: [
          {
            type: 'doc',
            // If you change the docId also update the announcementbar isSeToolbox function
            docId: 'software-engineering/intro',
            position: 'left',
            label: '🧰 SE Toolbox',
          },
          {
            type: 'doc',
            docId: 'learning/intro',
            position: 'left',
            label: '💡 Learning',
          },
          {
            to: 'blog',
            label: '📝 Blog',
            position: 'left'
          }
        ],
      },
      footer: {
        style: 'light',
        // logo: {
        //   alt: 'My Site Logo',
        //   src: 'img/logo_fixed.png',
        //   width: 125,
        //   height: 125,
        // },
        links: [
          {
            title: 'Ressources',
            items: [
              {
                label: 'SE Toolbox',
                // If you change the docId also update the announcementbar isSeToolbox function
                to: '/docs/software-engineering/intro',
              },
              {
                label: 'Learning',
                to: '/docs/learning/intro',
              },
            ],
          },
          {
            title: 'Personal',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              }
            ],
          },
          {
            title: 'About',
            items: [
              {
                label: 'Imprint',
                to: '/imprint',
              }
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Jens Reiner Built with Docusaurus 🦖`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    },
};

module.exports = config;

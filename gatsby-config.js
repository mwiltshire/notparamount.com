const {
  NODE_ENV,
  URL: NETLIFY_SITE_URL = 'https://www.notparamount.com',
  DEPLOY_PRIME_URL: NETLIFY_DEPLOY_URL = NETLIFY_SITE_URL,
  CONTEXT: NETLIFY_ENV = NODE_ENV
} = process.env;
const isNetlifyProduction = NETLIFY_ENV === 'production';
const siteUrl = isNetlifyProduction ? NETLIFY_SITE_URL : NETLIFY_DEPLOY_URL;

const siteTitle =
  'Not Paramount - Professional drum recording and production services';
const siteDescription =
  'Not Paramount is a professionally designed studio in Lewes, UK offering a variety of production services including mixing, mastering, podcast editing and more.';

module.exports = {
  siteMetadata: {
    siteUrl,
    title: siteTitle,
    description: siteDescription,
    keywords: [],
    canonicalUrl: siteUrl,
    lang: 'en'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: siteTitle,
        short_name: 'notparamount',
        description: siteDescription,
        start_url: '/',
        lang: 'en',
        background_color: '#fff',
        theme_color: '#fff',
        display: 'minimal-ui',
        icon: 'src/images/not-paramount-icon.png'
      }
    },
    'gatsby-plugin-typescript',
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        resolveEnv: () => NETLIFY_ENV,
        env: {
          production: {
            policy: [{ userAgent: '*' }]
          },
          'branch-deploy': {
            policy: [{ userAgent: '*', disallow: ['/'] }],
            sitemap: null,
            host: null
          },
          'deploy-preview': {
            policy: [{ userAgent: '*', disallow: ['/'] }],
            sitemap: null,
            host: null
          }
        }
      }
    },
    'gatsby-plugin-emotion',
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-52783256-2'
      }
    },
    {
      resolve: 'gatsby-plugin-sentry',
      options: {
        dsn:
          'https://c5421534b9bb42688ec2ed06823f7ae3@o406725.ingest.sentry.io/5274776',
        environment: process.env.NODE_ENV,
        enabled: (() =>
          ['production', 'stage'].indexOf(process.env.NODE_ENV) !== -1)()
      }
    }
  ]
};

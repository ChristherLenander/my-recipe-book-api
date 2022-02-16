module.exports = ({ env }) => [
  "strapi::errors",
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "connect-src": ["'self'", env("MIDDLEWARE_CONNECT_SRC")],
          "img-src": ["'self'", "data:", "blob:", env("MY_HEROKU_URL")],
          "media-src": ["'self'", "data:", "blob:", env("MY_HEROKU_URL")],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  "strapi::cors",
  "strapi::poweredBy",
  "strapi::logger",
  "strapi::query",
  "strapi::body",
  "strapi::favicon",
  "strapi::public",
];

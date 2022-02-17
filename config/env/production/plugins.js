module.exports = ({ env }) => ({
  email: {
    config: {
      provider: "mailgun",
      providerOptions: {
        apiKey: env("MAILGUN_API_KEY"),
        domain: env("MAILGUN_DOMAIN"), //Required if you have an account with multiple domains
        host: env("MAILGUN_HOST"), // we have only 2 options here. api.mailgun.net for US servers, api.eu.mailgun.net for EU Servers.
      },
      settings: {
        defaultFrom: env("EMAIL_DEFAULT_FROM"),
        defaultReplyTo: env("EMAIL_DEFAULT_REPLY_TO"),
        testAddress: env("EMAIL_TEST_ADDRESS"),
      },
    },
  },
  upload: {
    config: {
      provider: "strapi-provider-upload-dos",
      providerOptions: {
        key: process.env.DO_SPACE_ACCESS_KEY,
        secret: process.env.DO_SPACE_SECRET_KEY,
        endpoint: process.env.DO_SPACE_ENDPOINT,
        space: process.env.DO_SPACE_BUCKET,
        directory: process.env.DO_SPACE_DIRECTORY,
        cdn: process.env.DO_SPACE_CDN,
      },
    },
  },
});



module.exports = ({ env }) => ({
  email: {
    config: {
      provider: 'email-sendgrid',
      providerOptions: {
        apiKey: process.env.SENDGRID_API_KEY,
      },
      settings: {
        defaultFrom: 'testdevcroissants@gmail.com',
        defaultReplyTo: 'testdevcroissants@gmail.com',
      },
    },
  },
});
'use strict';

module.exports = {
  register({ strapi }) {
    // Register mail config
    strapi.config.set('plugin.email', {
    provider: 'sendgrid',
    providerOptions: {
    apiKey: process.env.SENDGRID_API_KEY,
    },
    settings: {
    defaultFrom: 'testdevcroissants@gmail.com',
    defaultReplyTo: 'testdevcroissants@gmail.com',
    },
    });
    }
    };
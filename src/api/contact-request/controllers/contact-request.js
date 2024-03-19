'use strict';
const dotenv = require('dotenv');
dotenv.config();
const axios = require('axios');

/**
 * contact-request controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::contact-request.contact-request', ({ strapi }) => ({
  async createMessage(ctx) {
    try {

      const formData = {
        name: ctx.request.body.name,
        email: ctx.request.body.email,
        subject: ctx.request.body.subject,
        message: ctx.request.body.message,
      };

      const token = ctx.request.body.reCaptchaToken;
      const secretKey = process.env.RECAPTCHA_SECRET_KEY;
      const recaptchaResponse = token;
      const url = 'https://www.google.com/recaptcha/api/siteverify';

      const response = await axios.post(url, null, {
        params: {
          secret: secretKey,
          response: recaptchaResponse,
        },
      });

      const { success } = response.data;

      if (!success) {
        return ctx.throw(400, 'Invalid reCAPTCHA token');
      }

      // Sanitize and send email
      await strapi.plugins['email'].services.email.send({
        to: 'testdevcroissants@gmail.com',
        from: 'testdevcroissants@gmail.com',
        replyTo: 'testdevcroissants@gmail.com',
        subject: `${formData.subject}`,
        text: `Hello world`,
        html: `
        <h1>Nouveau message de contact</h1>
        <p>Nom: ${formData.name}</p>
        <p>Email: ${formData.email}</p>
        <p>Objet: ${formData.subject}</p>
        <p>Message: ${formData.message}</p>
        `,
      });

      ctx.body = 'Email sent successfully';
    } catch (err) {
      console.error('erreur!', err);
      ctx.throw(500, 'Failed to send email');
    }
  },

}));
'use strict';

/**
 * secret-page router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::secret-page.secret-page');

'use strict';

/**
 * secret-page service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::secret-page.secret-page');

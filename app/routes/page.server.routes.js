'use strict';

/**
 * Module dependencies.
 */
var users = require('../../app/controllers/users'),
	pages = require('../../app/controllers/page');

module.exports = function(app) {
	// Page Routes
	app.route('/pages')
		.get(pages.list)
		.post(users.requiresLogin, pages.create);

	app.route('/pages/:pageId')
		.get(pages.read)
		.put(users.requiresLogin, pages.hasAuthorization, pages.update)
		.delete(users.requiresLogin, pages.hasAuthorization, pages.delete);

	// Finish by binding the article middleware
	app.param('pageId', pages.pageByID);
};
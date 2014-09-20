'use strict';

// Setting up route
angular.module('pages').config(['$stateProvider',
	function($stateProvider) {
		// Pages state routing
		$stateProvider.
		state('listPages', {
			url: '/pages',
			templateUrl: 'modules/page/views/list-pages.client.view.html'
		}).
		state('createPage', {
			url: '/pages/create',
			templateUrl: 'modules/page/views/create-page.client.view.html'
		}).
		state('viewPage', {
			url: '/pages/:pageId',
			templateUrl: 'modules/page/views/view-page.client.view.html'
		}).
		state('editPage', {
			url: '/pages/:pageId/edit',
			templateUrl: 'modules/page/views/edit-page.client.view.html'
		});
	}
]);
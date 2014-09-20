'use strict';

// Configuring the Articles module
angular.module('pages').run(['Menus',
	function(Menus) {
		// Set top bar menu items
		Menus.addMenuItem('topbar', 'Pages', 'pages', 'dropdown', '/pages(/create)?');
		Menus.addSubMenuItem('topbar', 'pages', 'List Pages', 'pages');
		Menus.addSubMenuItem('topbar', 'pages', 'New Page', 'pages/create');
	}
]);
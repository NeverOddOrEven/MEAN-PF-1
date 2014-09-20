'use strict';

//Pages service used for communicating with the pages REST endpoints
angular.module('core').factory('Pages', ['$resource',
	function($resource) {
		return $resource('pages/:pageId', {
			pageId: '@_id'
		}, {
      // Will not be updating from this page. Just retrieving. 
			/*update: {
				method: 'PUT'
			}*/
		});
	}
]);
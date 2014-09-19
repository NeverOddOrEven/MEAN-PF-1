'use strict';

angular.module('core').directive('currentTopic', [
	function() {
        function link(scope, element, attrs) {

        }
        
		return {
			templateUrl: '/modules/core/views/directives/current-topic.directive.view.html',
            scope: false,
			restrict: 'E',
			link: link
		};
	}
]);
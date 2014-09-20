'use strict';

angular.module('core').directive('topicButton', [
	function() {
        function link(scope, element, attrs) {	
            element.bind('click', function() {
                scope.$apply(function() {
                    scope.fn.loadTopic(scope.topic);
                });
            });
        }
        
		return {
			template: '<a class="topic-button">{{topic.title}}</a>',
            scope: true,
			restrict: 'E',
			link: link
		};
	}
]);
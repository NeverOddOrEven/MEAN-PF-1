'use strict';


angular.module('core').controller('HomeController', ['$scope', 'Authentication', 'SupportedDisplayFormats', 'Pages',
	function($scope, Authentication, SupportedDisplayFormats, Pages) {
        $scope.authentication = Authentication;
		    $scope.title = 'Alexander G. Suttmiller';
        $scope.subtitle = 'Software Engineer';
        $scope.ui = {};
        $scope.fn = {};

        $scope.fn.loadTopic = function(topic) {
            $scope.ui.currentTopic = topic;
        };
        
        $scope.fn.closeTopic = function()
        {
            $scope.ui.currentTopic = null;
        };
      
        $scope.fn.init = function() {
          $scope.ui.content = Pages.query();
          $scope.ui.content.$promise
            .then(function() {
              $scope.fn.loadTopic($scope.ui.content[0]);
            });
        };
	}
]);
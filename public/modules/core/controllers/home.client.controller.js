'use strict';


angular.module('core').controller('HomeController', ['$scope', 'Authentication',
	function($scope, Authentication) {
		$scope.title = 'Alexander G. Suttmiller';
        $scope.subtitle = 'Omniaery, LLC';
        $scope.ui = {};
        
        $scope.content = [
            {
                title: 'About Me',
                subtitle: 'Technology enthusiast with an entrepreneurial bent!',
                body: 'ABC'
            },
            {
                title: 'Technologies',
                subtitle: 'Skills and Experience',
                body: '123'
            },
            {
                title: 'Employment',
                subtitle: 'Previous Jobs',
                body: 'abc'
            },
            {
                title: 'Education',
                subtitle: '',
                body: 'onetwothree'
            },
            {
                title: 'Community',
                subtitle: '',
                body: ''
            },
            
            {
                title: 'More...',
                subtitle: '',
                body: ''
            }
        ];
        
        $scope.loadTopic = function(topic) {
            $scope.ui.currentTopic = topic;
        };
        
        $scope.closeTopic = function()
        {
            $scope.ui.currentTopic = null;
        };
	}
]);
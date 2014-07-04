'use strict';


angular.module('core').controller('HomeController', ['$scope', 'Authentication', 'SupportedDisplayFormats',
	function($scope, Authentication, SupportedDisplayFormats) {
        $scope.authentication = Authentication;
		$scope.title = 'Alexander G. Suttmiller';
        $scope.subtitle = 'Omniaery, LLC';
        $scope.ui = {};
        $scope.fn = {};
        console.info(SupportedDisplayFormats);
        $scope.content = [
            {
                title: 'Home',
                subtitle: 'Software Engineering Tech Geek',
                body: SupportedDisplayFormats.TwoColumnFormat([
                    // Column 1
                    '<p>I base my operations in Columbus, OH though I like to travel!</p><p>I specialize in modern web application programming design and architecture, as well as keeping up with the latest effective trends in the software development space.</p><p>I frequent the Columbus JavaScript usergroup. I also like to publish little code tidbits to my github when I feel inspired to a programming exercise.</p><p>Visit me at <a href="#">LinkedIn</a> for my employment history.</p><p>Visit me at <a href="#">GitHub</a> if you want a taste of what I dabble in...</p>', 
                    // Column 2
                    '<img src="" alt="" title=""></img>'
                ])
            },
            {
                title: 'Technologies',
                subtitle: 'Skills and Experience',
                body: SupportedDisplayFormats.ThreeColumnFormat([
                    '', 
                    '', 
                    ''
                ])
            },
            {
                title: 'Community',
                subtitle: '',
                body: ''
            },
            {
                title: 'Education',
                subtitle: '',
                body: 'onetwothree'
            }
        ];
        
        $scope.fn.loadTopic = function(topic) {
            $scope.ui.currentTopic = topic;
        };
        
        $scope.fn.closeTopic = function()
        {
            $scope.ui.currentTopic = null;
        };
      
        $scope.fn.init = function() {
            $scope.fn.loadTopic($scope.content[0]);
        };
	}
]);
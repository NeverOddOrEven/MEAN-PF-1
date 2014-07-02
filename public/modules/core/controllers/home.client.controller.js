'use strict';


angular.module('core').controller('HomeController', ['$scope', 'Authentication',
	function($scope, Authentication) {
        $scope.authentication = Authentication;
		$scope.title = 'Alexander G. Suttmiller';
        $scope.subtitle = 'Omniaery, LLC';
        $scope.ui = {};
        $scope.fn = {};
        
        $scope.content = [
            {
                title: 'Home',
                subtitle: '',
                body: '<div class="col-4">Blow the man down bilge rat lass lookout grapple coxswain topgallant gaff reef spike. Gally jib topsail barkadeer dance the hempen jig nipper Admiral of the Black heave down interloper weigh anchor. Pillage Corsair grog sloop broadside mutiny heave down Sail ho mizzen bounty.</div><div class="col-4">Lee Brethren of the Coast lugger hang the jib cable walk the plank Jolly Roger gangway shrouds booty. Scallywag Sink me no prey, no pay draught lee plunder main sheet boatswain red ensign pirate. Avast holystone chantey hands overhaul swing the lead barque barkadeer belay weigh anchor.</div><div class="col-4 last-col">Run a shot across the bow weigh anchor chase dead men tell no tales loot nipperkin interloper gangway scurvy heave down. Provost ballast hail-shot yard blow the man down bilge water keel keelhaul scallywag jury mast. Coffer cable Jack Ketch Corsair Arr starboard bring a spring upon her cable nipper schooner bilged on her anchor.</div>'
            },
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
        
        $scope.fn.loadTopic = function(topic) {
            $scope.ui.currentTopic = topic;
        };
        
        $scope.fn.closeTopic = function()
        {
            $scope.ui.currentTopic = null;
        };
	}
]);
'use strict';


angular.module('core').controller('HomeController', ['$scope', 'Authentication', 'SupportedDisplayFormats',
	function($scope, Authentication, SupportedDisplayFormats) {
        $scope.authentication = Authentication;
		    $scope.title = 'Alexander G. Suttmiller';
        $scope.subtitle = 'Software Engineer';
        $scope.ui = {};
        $scope.fn = {};
        $scope.content = [
            {
                title: 'Home',
                subtitle: 'Software Engineering Tech Geek',
                body: SupportedDisplayFormats.TwoColumnFormat([
                    // Column 1
                    '<p>I am currently located in Columbus, OH though I do like to travel!</p><p>I specialize in modern web application programming design and architecture, as well as keeping up with the latest effective trends in the software development space.</p><div class="center"><span class="icon js"></span><span class="icon html5"></span><span class="icon mobile"></span></span></div><p>I frequent the Columbus JavaScript usergroup. I also like to publish little code tidbits to my github when I feel inspired to a programming exercise.</p><p>Visit me at <a href="https://www.linkedin.com/pub/alex-suttmiller/30/3a/a93">LinkedIn</a> for my employment history.</p><p>Check me out on twitter or github to see what I like to dabble in!</p><div class="center"><a class="social-icon"  href="https://twitter.com/asuttmiller"><span class="icon large blue twitter"></span></a><a class="social-icon"  href="https://github.com/neveroddoreven"><span class="icon github large blue"></span></a></div><div class="center"><p>Follow me!</p></div>', 
                    // Column 2
                    '<div class="me"><img class="me" src="http://s3-us-west-2.amazonaws.com/alexsuttmiller.com/images/pages/homepage/me.jpg" alt="Me" title="Me" style="width: 50%; text-align: center;"/></div>' 
                ])
            },
            {
                title: 'Technologies',
                subtitle: 'Skills and Experience',
                body: SupportedDisplayFormats.ThreeColumnFormat([
                    '<div><h6>Server Side</h6></div>', 
                    '<div><h6>Front End</h6></div>', 
                    '<div><h6>Data Management</h6></div>',
                    '<div><h6>Usability</h6></div>',
                    '<div><h6>Tools</h6></div>',
                    '<div><h6>Philosophy</h6></div>'
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
      
        $scope.fn.init = function() {
            $scope.fn.loadTopic($scope.content[0]);
        };
	}
]);
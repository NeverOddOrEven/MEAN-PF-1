'use strict';

angular.module('pages').controller('PagesController', ['$scope', '$stateParams', '$location', 'Authentication', 'Pages',
	function($scope, $stateParams, $location, Authentication, Pages) {
		$scope.authentication = Authentication;

		$scope.create = function() {
			var page = new Pages({
				title: this.title,
        subtitle: this.subtitle,
				body: this.body
			});
			page.$save(function(response) {
				$location.path('pages/' + response._id);

				$scope.title = '';
        $scope.subtitle = '';
				$scope.body = '';
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		$scope.remove = function(page) {
			if (page) {
				page.$remove();

				for (var i in $scope.pages) {
					if ($scope.pages[i] === page) {
						$scope.pages.splice(i, 1);
					}
				}
			} else {
				$scope.page.$remove(function() {
					$location.path('pages');
				});
			}
		};

		$scope.update = function() {
			var page = $scope.page;

			page.$update(function() {
				$location.path('pages/' + page._id);
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		$scope.find = function() {
			$scope.pages = Pages.query();
		};

		$scope.findOne = function() {
			$scope.page = Pages.get({
				pageId: $stateParams.pageId
			});
		};
	}
]);
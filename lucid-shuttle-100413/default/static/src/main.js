angular.module('contrariumApp', []).

config(['$interpolateProvider', function($interpolateProvider) {
    
    // Change AngularJS variable delimiters to play nice with Jinja
    $interpolateProvider.startSymbol('[[');
    $interpolateProvider.endSymbol(']]');
}]).

directive('contrariumSearch', function() {

    return {
        restrict: 'E',
        templateUrl: '/static/directives/contrarium_search/contrarium_search.html',
        
        controller: ['$scope', '$http', function($scope, $http) {
            
            $scope.DoSearch = function() {
                ContrariumSearch($scope, $http, $scope.search_text);
            };
        }]
    };
});


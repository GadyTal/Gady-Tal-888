angular.module('Links')
    .factory('Links', function($http) {
        return $http.get('data/links.json')
    });

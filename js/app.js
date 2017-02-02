angular.module('Links', ['ngRoute', 'ui.bootstrap'])
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/Links.html',
                controller: 'LinksController'
            })
            .otherwise({
                redirectTo: '/'
            });
    })

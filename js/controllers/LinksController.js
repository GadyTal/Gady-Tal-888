angular.module('Links')
    .controller('LinksController', function($scope, $http, Links) {
        Links.then(function(response) {
            $scope.links = response.data;
        })

        $scope.qrCode = "views/qr.html";
    });

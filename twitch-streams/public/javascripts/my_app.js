angular.module('myApp', []).
controller('myController', ['$scope', '$http', '$sce',
    function($scope, $http, $sce) {
        $http.get('/user/profile')
            .success(function(data, status, headers, config) {
                $scope.user = data;
                $scope.error = "";
                $scope.streams = $scope.user.streams;
                $scope.stream_urls = [];
                $scope.streams.forEach(function(stream) {
                    $scope.stream_urls.push($sce.trustAsResourceUrl("https://player.twitch.tv/?channel=" + stream));
                });
            }).
        error(function(data, status, headers, config) {
            $scope.user = {};
            $scope.error = data;
        });

    }
]);

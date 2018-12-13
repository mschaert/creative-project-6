angular.module('myApp', []).
controller('myController', ['$scope', '$http',
    function($scope, $http) {
        $http.get('/user/profile')
            .success(function(data, status, headers, config) {
                $scope.user = data;
                $scope.error = "";
            }).
        error(function(data, status, headers, config) {
            $scope.user = {};
            $scope.error = data;
        });
        
        $scope.getIframeSrc = function(stream) {
            var src = "https://player.twitch.tv/?channel=" + stream;
            console.log(src);
            return src;
        }
    }
]);

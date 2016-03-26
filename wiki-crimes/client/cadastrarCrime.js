angular.module("wiki-crimes",[]).controller('AppController', ['$scope', '$http', function ($scope, $http) {
    $http.get('lib/estados_cidades.json').success(function (data) {
        $scope.estadosCidades = data;
    });
}]);

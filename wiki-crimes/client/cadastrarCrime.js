angular.module("wiki-crimes",[]).controller('AppController', ['$scope', '$http', function ($scope, $http) {

    $scope.estadoSelecionado = {cidades:[]};
    $scope.estadosCidades = estadosCidades;
}]);

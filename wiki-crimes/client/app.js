angular
    .module('wiki-crimes', ['angular-meteor', 'ngMap'])
    .controller('MapaCrimesCadastrados', ['$scope', 'NgMap', function ($scope, NgMap) {

        $scope.helpers({
            crimesCadastrados: function () {
                return Crimes.find({});
            }
        });
    }])
    .controller('AppController', ['$scope', '$http', function ($scope, $http) {

        $scope.estadoSelecionado = {
            cidades: []
        };
        $scope.estadosCidades = estadosCidades;



}]);

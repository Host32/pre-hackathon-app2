angular
    .module('wiki-crimes', ['angular-meteor', 'ngMap'])
    .controller('MapaCrimesCadastrados', ['$scope', 'NgMap', function ($scope, NgMap) {

        $scope.mapLocation = 'Brasil';

        $scope.zoom = 4;

        $scope.helpers({
            crimesCadastrados: function () {
                return Crimes.find({});
            },

            crimesCadastradosFurto: function () {
                return Crimes.find({
                    tipoCrime: 'furto'
                }).fetch().length;
            },

            crimesCadastradosRoubo: function () {
                return Crimes.find({
                    tipoCrime: 'roubo'
                }).fetch().length;
            },

            crimesCadastradosTentativaFurto: function () {
                return Crimes.find({
                    tipoCrime: 'tentativaFurto'
                }).fetch().length;
            },

            crimesCadastradosTentativaRoubo: function () {
                return Crimes.find({
                    tipoCrime: 'TentativaRoubo'
                }).fetch().length;
            },

            crimesCadastradosViolencia: function () {
                return Crimes.find({
                    tipoCrime: 'violencia'
                }).fetch().length;
            },

            crimesCadastradosViolenciaDomestica: function () {
                return Crimes.find({
                    tipoCrime: 'violenciaDomestica'
                }).fetch().length;
            },

            crimesCadastradosAbusoAutoridade: function () {
                return Crimes.find({
                    tipoCrime: 'abusoAutoridade'
                }).fetch().length;
            },

            crimesCadastradosHomicidio: function () {
                return Crimes.find({
                    tipoCrime: 'homicidio'
                }).fetch().length;
            },

            crimesCadastradosLatrocinio: function () {
                return Crimes.find({
                    tipoCrime: 'latrocinio'
                }).fetch().length;
            },

            crimesCadastradosAtentadoPudor: function () {
                return Crimes.find({
                    tipoCrime: 'atentadoPudor'
                }).fetch().length;
            },

        });



        $scope.pesquisaCrime = function () {
            $scope.mapLocation = $scope.locationDigitado;
            $scope.zoom = 19;
        }

    }])
    .controller('AppController', ['$scope', '$http', function ($scope, $http) {

        $scope.estadoSelecionado = {
            cidades: []
        };
        $scope.estadosCidades = estadosCidades;



}]);
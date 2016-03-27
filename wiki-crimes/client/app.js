angular
    .module('wiki-crimes', ['angular-meteor', 'accounts.ui', 'ngMap'])
    .controller('CrimeController', ['$scope', '$http', function ($scope, $http) {
        'use strict';

        $scope.estadoSelecionado = {
            cidades: []
        };

        $scope.estadosCidades = estadosCidades;

        $scope.abreModal = function () {
            $('#myModal').modal();
        };

        $scope.fechaModal = function () {
            $('#myModal').modal('hide');
        };

        $scope.fechaModalErro = function () {
            $('#modalErro').modal('hide');
        };

        $scope.fechaModalSucesso = function () {
            $('#modalSucesso').modal('hide');
        };

        $scope.novoCrime = {};

        $scope.insereNovoCrime = function (novoCrime) {
            $scope.fechaModal();
            Crimes.insert({
                tipoCrime: novoCrime.tipoCrime,
                outrosCrimes: novoCrime.outrosCrimes,
                estado: novoCrime.estadoSelecionado.nome,
                cidade: novoCrime.cidadeSelecionada,
                rua: novoCrime.rua,
                data: novoCrime.data
            }, function (err) {
                if (err) {
                    $('#modalErro').modal();
                } else {
                    $('#modalSucesso').modal();
                }
            });
        };
    }])
    .controller('MapaController', ['$scope', 'NgMap', function ($scope, NgMap) {
        'use strict';

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
            }

        });



        $scope.pesquisaCrime = function () {
            $scope.mapLocation = $scope.locationDigitado;
            $scope.zoom = 19;
        };

    }]);

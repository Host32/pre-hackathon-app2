angular.module("wiki-crimes", []).controller('AppController', ['$scope', '$http', function ($scope, $http) {

    $scope.estadoSelecionado = {
        cidades: []
    };

    $scope.estadosCidades = estadosCidades;

    $scope.abreModal = function () {
        $('#myModal').modal();
    };

    $scope.fechaModal = function () {
        $('#myModal').modal('hide');
    }

    $scope.fechaModalErro = function () {
        $('#modalErro').modal('hide');
    }

    $scope.fechaModalSucesso = function () {
        $('#modalSucesso').modal('hide');
    }

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
            } else $('#modalSucesso').modal();
        });





    }



}]);

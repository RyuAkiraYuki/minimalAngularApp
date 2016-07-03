'use strict';

angular.module('minimalAngualrApp')
    .directive('main',function () {
        return {
            templateUrl: './js/templates/main.html',
            controller: 'mainController',
            link: function (scope, element, attrs) {
                console.log('main directive is loaded');
            }
        }
    });
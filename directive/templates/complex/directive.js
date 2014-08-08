define([], function () {
    'use strict';

    return function () {
        return {
            restrict: 'E',
            scope: {

            },
            templateUrl: '<%= (dir + name + ".html").replace(/\\/g, "/") %>',
            link: function (scope, element, attrs, req, transclude) {
            }
        };
    };
});
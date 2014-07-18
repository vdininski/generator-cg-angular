define([
    'angular',
    'angular-cookies',
    'angular-resource',
    'angular-local-storage',
    'angular-kendo',
    'ui.router',
    'jquery',
    'kendo.core'

    /* Add RequireJs Modules Above*/
], function (angular) {
    'use strict';

    angular.module('Portal', ['ui.router', 'ngResource', 'ngCookies', 'kendo.directives', 'LocalStorageModule']);

    angular.module('Portal').constant('apiServerUrl', 'http://localhost:4080/bs-api');
    angular.module('Portal').constant('httpServerUrl', 'http://localhost:4080/bs');

    return angular.module('Portal');
});

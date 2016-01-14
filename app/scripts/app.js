(function(){

    'use strict';


    var app = angular.module('appName', [
        'ui.router'
    ]);

    app.config(function ($stateProvider, $locationProvider, $urlRouterProvider, $httpProvider) {
        $stateProvider
            .state('app', {
                url: '/',
                // controller: '',
                // controllerAs: 'vm',
                // templateProvider: function($templateCache){
                //     return $templateCache.get('');
                // }
            })

        $locationProvider.html5Mode(true);
        $urlRouterProvider.otherwise('404');
    });

})();

// require('./path/file');

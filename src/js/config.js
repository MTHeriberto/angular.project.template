/**
 * Use AngularUI Router to manage routing and views
 */
function config($stateProvider, $urlRouterProvider, $ocLazyLoadProvider) {
    $urlRouterProvider.otherwise("app/sample");

    $ocLazyLoadProvider.config({ debug: false });

    $stateProvider
        .state('app', {
            abstract: true,
            url: "/app",
            templateUrl: "views/common/content.html",
        })
        .state('app.sample', {
            url: "/sample",
            templateUrl: "views/view-sample.html",
            data: { pageTitle: 'Sample' },
            resolve: {
                // loadPlugin: function ($ocLazyLoad) {
                //     return $ocLazyLoad.load([
                //         {
                //             files: ['jfile,js']
                //         }
                //     ]);
                // }
            }
        });
}

angular
    .module('app')
    .config(config)
    .run(function($rootScope, $state) {
        $rootScope.$state = $state;
    });

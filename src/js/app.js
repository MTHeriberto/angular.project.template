(function () {
    angular.module('app', [
        'ui.router',                    // Routing
        'oc.lazyLoad',                  // ocLazyLoad
        'ui.bootstrap',                 // Ui Bootstrap
        'ngSanitize'                    // ngSanitize
    ])
})();

// Using the library ocLazyLoad to open other libraries
App.config(function ($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
           
            controller: 'ArrangeMeetingController',
            templateUrl: 'apps/arrangeMeeting/arrangeMeeting.view.html',
            config: {
                nome: 'Nova Mensagem',
                selecaoMenu: 'mensagens'
            }
        })
       
        .otherwise({
            redirectTo: '/'
        });

    $locationProvider.html5Mode(true);
    $locationProvider.hashPrefix('#');
});



App.factory('$routesService', function () {
    var urlServer = "http://172.0.0.1:90"

    var routes = {
        SERVICE_ROOT: urlServer,
        SERVICE_MAIN: urlServer,
        SERVICE_EDITAR_DADOS: urlServer + "Administracao/MeusDados/",
        
    };

    return routes;
});
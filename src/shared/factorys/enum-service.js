App.factory('$enum', function () {
    var enums = {
        tipoErro: {
            SESSAO_USUARIO: 1,
            VALIDACAO: 2,
            SISTEMICO: 3,
            NAO_TRATADO: 4,
            NAO_AUTORIZADO: 5,
            EM_MANUTENCAO: 6
        },
        tipoStatus: {
            SERVER_ERROR: 1,
            VALIDATION_ERROR: 2,
            SUCCESS: 3,
            SESSION_ERROR: 4
        },
        statusSolicitacaoCompra: {
            SOLICITADO: 1,
            EMTRATAMENTO: 2,
            DISPONIVELRETIRADA: 3,
            ENTREGUE: 4,
            CANCELADO: 5
        },
        //Utilizado para selecionar área no menu de navegação.
        paginaArea: {
            HOME: 1,
            MENSAGENS: 2,
            DICAS: 3,
            PRODUTOS: 4
        },
        //Utilizado ao gerar inputs dinamicos
        tipoInputs: {
            TEXT: 1,
            NUMBER: 2,
            MESSAGE:3,
            HOUR:4,
            DATE:5,
            CALENDAR:6,
            PASSWORD: 7, 
            CPF: 8,
            MAIL: 9,
            PHONE:10
        }
    }
    return enums;
});
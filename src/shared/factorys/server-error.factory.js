App.factory("$serverError", function($enum) {
    return function(serverData, scope) {

        this.valido = true;
        this.data = {};
        scope.errorList = [];

        if (serverData && serverData.data) {
            this.data = serverData.data;
        } else {
            this.data = serverData;
        }

        this.ocorreuErro = function() {
            return ocorreuErroMicroServicos() || ocorreuErroServiceMain();
        }

        this.exibirMensagensDeErro = function() {

            if (ocorreuErroServiceMain()) {
                exibirMensagensDeErroServiceMain();
            } else if (ocorreuErroMicroServicos()) {
                exibirMensagensDeErroMicroServicos();
            } else {
                console.log(serverData);
                scope.errorList.push({ message: "Ops, algo deu errado. Se o problema persistir favor contatar o administrador do sistema." });
            }
        }

        function ocorreuErroServiceMain() {
            return !!serverData && (!!serverData.Validacao || !!serverData.Exception);
        }

        function ocorreuErroMicroServicos() {
            if (!serverData) {
                return false;
            }
            var possuiErroValidacao = Enumerable.from(serverData.statusLog).any(function(status) {
                return status.type != $enum.tipoStatus.SUCCESS;
            });
            return possuiErroValidacao;
        }

        function ocorreuErroDeValidacao() {
            var possuiErroValidacao = Enumerable.from(serverData.statusLog).any(function(status) {
                return status.type == $enum.tipoStatus.VALIDATION_ERROR;
            });
            return possuiErroValidacao;
        }

        function ocorreuErrosNaoTratado() {
            var possuiErroValidacao = Enumerable.from(serverData.statusLog).any(function(status) {
                return status.type == $enum.tipoStatus.SERVER_ERROR;
            });
            return possuiErroValidacao;
        }

        function exibirMensagensDeErroMicroServicos() {
            if (ocorreuErroDeValidacao()) {
                Enumerable.from(serverData.statusLog).where(function(m) {
                        return m.type == $enum.tipoStatus.VALIDATION_ERROR;
                    })
                    .forEach(function(item) {

                        Enumerable.from(item.messages).forEach(function(message) {
                            scope.errorList.push({ message: message.text });
                        });

                    });
                return;
            }
            scope.errorList.push({ message: "Ops, algo deu errado. Se o problema persistir favor contatar o administrador do sistema." });
        }

        function exibirMensagensDeErroServiceMain() {

            if (serverData.TipoErro == $enum.TipoErro.VALIDACAO) {
                Enumerable.from(serverData.Validacao.ListaMensagens).forEach(function(item) {
                    scope.errorList.push({ message: item.Texto });
                });
                return;
            }
            scope.errorList.push({ message: "Ops, algo deu errado. Se o problema persistir favor contatar o administrador do sistema." });
        }
    };
});
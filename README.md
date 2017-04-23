# Preparação de ambiente #

## Bower ##

Responsável pelos pacotes utilizados no frontend (bootstrap, jquery, angular ...)  
O pacote do deve ser instalado globalmente para ser utilizado.

> sudo npm install __bower -g__

## Gulp ##

Responsável pelas tarefas de gerar build, copiar e organizar a pasta de distribuição.
O pacote deve ser instalado globalmente para ser utilizado.

> sudo npm install __gulp -g__

## Preparar os arquivos ##

Para preparar o ambiente para desenvolvimento há 3 comandos principais de inicialização.

- npm install `(instalação dos pacotes do node)`
- bower install `(instalação dos pacotes de frontend (angular, jquery, bootstap...) )`
- gulp `(gera e copia os arquivos para visualização "distribuição")`

> Estes comandos devem ser executados na respectiva ordem.  
> Utilizar sempre ao alterar arquivos do desenvolvimento ou atualizar o repositório do projeto

# Estrutura de pastas #

- bin
- dist `(distribuição)`
- src `(source do projeto)`
    - assets
        - fonts
        - images
        - styles
    - pages `(controllers e views da aplicação)`
    - shared `(diretivas e servicos compartilhados)`
        - directives
        - services
    - app-module.js `(modulo principal)`
    - app-routes.js `(configuração das rotas)`
    - index.html `(html principal)`


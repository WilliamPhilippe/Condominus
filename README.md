# Condominus

## Instruções
Primeiramente, você precisa de um login para acessar o sistema, um login como **SÍNDICO** já cadastrado é: **WilliamPhilippe**
Como síndico você pode criar seus próprios usuários, seja um funcionário ou um morador e usar o username criado para acessar os
respectivos logins.

Caso não queira criar use: Porteiro: chulapa | Morador: bahia

## Desenvolvimento
Este sistema foi desenvolvido completamente por mim, tanto o backend como o frontend.
##### Backend
O backend foi desenvolvivo em JS usando o framework *Node.js*, alguns outros frameworks como o *express* e o *axios* foram usados para
o protocolo HTTP e agilidade no processo. O backend foi desenvido como uma *API Rest*.
O banco de dados usado foi o MongoDB.
##### Frontend
O frontend foi desenvolvido totalmente em *React.js*, usando o React Hooks. O *axios* foi usado para fazer a conexão com a api do backend. 

## O que é o sistema:
*Condominus* é um gerenciador de condomínios que provê algumas funcionalidades báiscas.
* Cadastrar e editar moradores.
* Cadastrar e editar casas.
* Cadastrar e editar funcionários.
* Cadastrar, editar e verificar se são ou não autorizados os veículos.
* Listar casas à venda.

O link do site está aqui: https://condominusfrontend.herokuapp.com

*Por ser hospedado no Heroku, um servidor gratuito, no primeiro acesso ele pode demorar alguns minutos para carregar. Atualize o site após o primeiro minuto *
*O mesmo acontece na primeira solicitação que fizer ao backend, que também é hospedado no heroku. A primeira solicitação é feita no login.*

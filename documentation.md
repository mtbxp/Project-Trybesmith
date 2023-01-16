Este documento contém as funcionalidades, procedimento realizado para desenvolvimento e outras informações relevantes acerca do projeto.

#
<h3>A- Funcionalidades:</h3>

Neste projeto, goi criada uma loja de itens medievais, no formato de uma API, utilizando Typescript.

Foram desenvolvidas todas as camadas da aplicação (Models, Service e Controllers) e, por meio dessa aplicação, é possível realizar as operações básicas que se pode fazer em um determinado banco de dados: Create, Read, Update e Delete.

Estas operações podem ser realizadas através de alguns endpoints que irão ler e escrever em um banco de dados, utilizando o MySQL, sendo estes:

/products
/users
/orders
.
.

#
<h3>B- Desenvolvimento:</h3>

<h4>00- Adição de Arquivos de desenvolvimento e documentação:</h4>
./help.md
./docs.md
./.env

<!-- Nota: A porta utilizada não foi especificada nas variáveis ambientais, sendo especificada em cada query -->

<h4>01- Criação do modelo de conexão:</h4>
./src/connection.ts

<h4>02- Criação da interface de produtos</h4>
./src/interfaces/ProductInterface.ts

<h4>03- Criação do MSC referente a requisição de um unico produto:</h4>
./src/model/productModel.ts - Linha 6
./src/model/productService.ts - Linha 8
./src/model/productController.ts - Linha 6

<h4>04- Criação do Router para produtos:</h4>
./src/routes/productRouter.ts

<!-- Nota: Todas as rotas devem ser e foram/serão inclusas em ./src/app.ts -->

<h4>05- Import do router e adição da rota /product em app.ts</h4>
./src/app.ts

* linha 9: app.use('/products', router);

<h4>06- Criação do MSC referente a requisição de um todos os produtos:</05>
./src/model/productModel.ts - Linha 26
./src/model/productService.ts - Linha 13
./src/model/productController.ts - Linha 15

<h4>07- Adição da rota /get para produtos</h4>
./src/routes/product.router.ts - Linha 11.

<h4>09- Criação da interface de usuário</h4>
./src/interface/UserInterface.ts

<h4>10- Criação do MSC referente a adição de usuários e sistema de validação com JWT</h4>
./src/model/userModel.ts -
./src/model/userService.ts -
./src/model/userController.ts -

./src/middlewares/tokenValidetion.ts

<h4>11- Criação da interface de pedidos </h4>
./src/interface/OrderInterface.ts

<h4>12- Adição da rota /post para usuários </h4>
./src/routes/user.router.ts

<h4>13- Criação do MSC referente a requisição de pedidos</h4>
./src/model/ordersModel.ts -
./src/model/ordersService.ts -
./src/model/ordersController.ts -


<h4>14- </h4>

<h3>C- Utilização do App</h3>

* npm start - inicializa o app na porta 3000.
* requisições podem ser feitas nas seguintes rotas:
'/products' - Requisição e adição de produtos(get e post)
'/users' - Requisição de pedidos(get)
'/orders' - Adição de usuários(post)

#
<h3>D- Outras Informações</h3>

<h4>1- Sobre o desenvolvedor: </h4>

Luan Filipe Gonçalves
[GitHub](github.com/luanfgoncalves)
[LinkedIn](linkedin.com/luanfgoncalves)
[E-mail](luanfgoncalves@outlook.com)

<h4>2- NPM packages:</h4>

[mysql2](https://www.npmjs.com/package/mysql2)
[dotenv]()
[express]()
[typescript]()
[JsonWebToken]()

<h4>3- Instalação e utilização:</h4>

* A todo o conteúdo da aplicação pode ser adiquirido via GitHub: <b>git clone -Adicionar Informação-</b>
* Após o download do projeto, execute o comando <b>npm install</b>
* Com todos os aquivos devidamente adicionado, você pode executar o servidor via terminal através do comando <b>npm start</b>.
* Arquivos de shell e batch estão disponiveis para realizar a instalção e execução do servidor localmente em linux e windows no diretório <b>./installation<b/>

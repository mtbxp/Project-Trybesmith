Este documento contém as funcionalidades, procedimento realizado para desenvolvimento e outras informações relevantes acerca do projeto.

<h3>A- Funcionalidades:</h3>

Neste projeto, goi criada uma loja de itens medievais, no formato de uma API, utilizando Typescript.

Foram desenvolvidas todas as camadas da aplicação (Models, Service e Controllers) e, por meio dessa aplicação, é possível realizar as operações básicas que se pode fazer em um determinado banco de dados: Create, Read, Update e Delete.

Estas operações podem ser realizadas através de alguns endpoints que irão ler e escrever em um banco de dados, utilizando o MySQL, sendo estes:

/products
.
.
.

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

<h4>02- Criação do MSC referente aos produtos:</h4>
./src/model/productModel.ts
./src/model/productService.ts
./src/model/productController.ts

<h4>03- Criação do Router para produtos:</h4>
./src/productRouter.ts

<!-- Nota: Todas as rotas devem ser e foram/serão inclusas em ./src/app.ts -->


04-
05-
06-
07- 

<h3>C- Utilização do App</h3>

<h3>D- Outras Informações</h3>

1- Sobre o desenvolvedor: 
Nome: Luan Filipe Gonçalves
GitHub: github.com/luanfgoncalves
LinkedIn: linkedin.com/luanfgoncalves
E-mail: luanfgoncalves@outlook.com

2- NPM packages:
mysql2
dotenv
express
typescript

3- Instalação e utilização:

A todo o conteúdo da aplicação pode ser adiquirido via GitHub: <b>git clone -Adicionar Informação-</b>
Após o download do projeto, execute o comando <b>npm install</b>
Com todos os aquivos devidamente adicionado, você pode executar o servidor via terminal através do comando <b>npm start</b>.
Arquivos de shell e batch estão disponiveis para realizar a instalção e execução do servidor localmente em linux e windows no diretório ./installation

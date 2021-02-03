## Observações

Olá, tudo bem? <br><br>
Você pode acessar uma página com o projeto rodando no link abaixo:<br>
<https://transactions.netlify.app/><br><br>
O projeto principal está na pasta frontend, porém também foi criado uma pasta backend para que fosse possível fazer as chamadas de teste de API.

O projeto do frontend está em angular, portanto, se você ainda não tem o angular em seu ambiente basta instalar com:

~~~shell
$ npm install -g @angular/cli
~~~

O backend funciona com o json-server, e é um servidor mock baseado em json. Para rodar o backend você precisa instalar em seu ambiente.

~~~shell
$ npm install -g json-server
~~~

Para rodar o frontend e o backend em um comando só basta rodar o comando:
~~~shell
$ npm i && npm run dev
~~~

Caso queira rodar o frontend e o backend separados, basta seguir os passos abaixo:

1) Para acessar e rodar o backend:
~~~shell
$ cd backend
$ json-server --watch db.json
~~~


2) Para acessar e rodar o frontend:
~~~shell
$ cd frontend
$ npm install
$ ng serve --open
~~~

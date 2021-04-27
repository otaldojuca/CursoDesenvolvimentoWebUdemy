// Instalando Deps & Scripts

// Alteramos o package.json (o descritor) da pasta da aula 132 de

/*
{
  "name": "US9A132",
  "version": "1.0.0",
  "description": "",
  "main": "US9A132.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "axios": "^0.21.1"
  }
}
*/

// para

/*
{
  "name": "US9A132",
  "version": "1.0.0",
  "description": "",
  "main": "funcionarios.js",
  "scripts": {
    "start": "nodemon", 
    "dev": "nodemon",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "axios": "^0.21.1"
  }
}
*/

// Digitando somente "npm i" no terminal dentro da pasta onde o package.json está,
// instalamos na node_modulos dentro dela todos os scripts que estão especificados
// no package.json dele, como Axios, Nodemon, Lodash, etc.

// "start" e "test" (nome de 2 dos 3 scripts) funcionam caso digitassemos "npm [nome]"
// no terminal, pois são nomes padrão que o Node procura por padrão. "dev" não, então
// usamos "npm run dev"

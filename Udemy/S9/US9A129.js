// Usando módulos de terceiros

// Digitei no terminal "npm i lodash" e 
//                     "npm i -g nodemon"

const _ = require("lodash")
setInterval(() => console.log(_.random(1, 1000)), 500)

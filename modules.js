const names = require("./names");
const displayName = require("./utils");
const data = require("./alternative-flavor"); //exportamos multiples variables
require("./mind-grenade"); //exporta el resultado completo del modulo
console.log(names); //exportamos el objeto de nombre
displayName(names.john); //invocamos la funcion con la dara del objeto name
displayName(names.peter);
console.log(data);

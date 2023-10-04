const { readFileSync, writeFileSync } = require("fs"); // rquire fs y destructuramos las funciones a usar
console.log("start");
const first = readFileSync("./content/first.txt", "utf8"); //para leer el archivo  usamos la funcion de
//readFileSync y mandamos el path como primer parametro y y utf8 para el segundo
const second = readFileSync("./content/second.txt", "utf8");

console.log(first, second);
writeFileSync(
  "./content/result-sync.txt",
  `Here is th result${(first, second)}`,
  { flag: "a" } //esto hace qeu escruba de nuevo lo mismo en el archivo
);
console.log("done with the task");
console.log("starting with the next one");

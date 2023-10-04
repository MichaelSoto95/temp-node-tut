const { readFile, writeFile, read } = require("fs"); // require fs y destructuramos las funciones a usar

console.log("start"); // empezamos
readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;
  readFile("./content/second.txt", "utf8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;
    writeFile(
      "./content/result-async.txt",
      `Here is the async result: ${first}, ${second}`,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log("done with this task"); //proceso pending
      }
    );
  });
});
console.log("starting next task"); //empezamos otro task mientras terminamos el otro proceso
// este metod async nos per mite seguir con otra tarea mientras terminamos la primera

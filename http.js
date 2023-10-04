const http = require("http");

const server = http.createServer((req, res) => {
  //console.log(req);
  if (req.url === "/") {
    res.end("Welcome to our home page");
  }

  if (req.url === "/about") {
    res.end("Welcome to our about page");
  }
  res.end(
    `<h1> oppsss</h1>   <p>page not found </p> <a href ='localhost:5000/'>home</a>`
  );
});

server.listen(5000);

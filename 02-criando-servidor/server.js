const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.statusCode = 200;
    res.end("Home page");
  } else if (req.url === "/about") {
    res.statusCode = 200;
    res.end("About page");
  }
});

server.listen(3000, () => {
  console.log("Servidor em execução em http://localhost:3000/");
});

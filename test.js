const http = require("http");
const server = require("./index.js");

const port = 3001 + Math.floor(Math.random() * 1000);

server.close();
const testServer = http.createServer(server.listeners("request")[0]);
testServer.listen(port, () => {
  http.get(`http://localhost:${port}/hello`, (res) => {
    let data = "";
    res.on("data", (chunk) => (data += chunk));
    res.on("end", () => {
      const parsed = JSON.parse(data);
      const pass = res.statusCode === 200 && parsed.msg === "hello";
      console.log(pass ? "PASS" : "FAIL", JSON.stringify(parsed));
      testServer.close(() => process.exit(pass ? 0 : 1));
    });
  });
});

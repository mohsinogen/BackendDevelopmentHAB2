const http = require("http");
const homeController = require("./controllers/homeController.js")
const userController = require("./controllers/userController.js")

const app = http.createServer((req, res) => {

  // frontend connection config
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.url === "/") {
    
    homeController.home(req, res);

  } else if (req.url === "/users") {
    
    if(req.method==="GET"){
        userController.getUsers(req, res)
    } else {

      res.writeHead(405)
      res.end(JSON.stringify({
        code: 405,
        remark: "Method not allowed"
      }))
    }

  } else {
    res.writeHead(404)
    res.end(JSON.stringify({
        code: 404,
        remark: "not found"
    }))
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
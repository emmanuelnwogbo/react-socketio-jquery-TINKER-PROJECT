const express = require("express");
const http = require('http');
const socketIO = require('socket.io');
const path = require("path");

const app = express();

//middleware to define folder for static files
app.use(express.static("public"));

const PORT = process.env.PORT || 3000;

let server = http.createServer(app);
let io = socketIO(server)

io.on('connection', (socket) => {
  console.log('new user connected');
})

app.get("/", function(req, res) {
	res.sendFile(path.resolve(__dirname, "public", "index.html"));
});

server.listen(PORT, function() {
	console.log("app is listening on port 3000");
});

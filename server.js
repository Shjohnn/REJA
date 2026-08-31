const http = require('http');
const mongodb = require('mongodb');
let db;
const connectionString ='mongodb+srv://nematovshukurjon232_db_user:QRnqZQKyjJTGquUh@newmongo.awdvfv5.mongodb.net/NewMONGO';

mongodb.connect(
  connectionString,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err, client) => {
    if (err) {
      console.log("ERROR on connection MongoDB:", err);
    } else {
      console.log("MongoDB connection succeeded !!!");
      module.exports = client;

      const app = require("./app");
      const server = http.createServer(app);
      let PORT = 3000;
      server.listen(PORT, function () {
        console.log(
          `The server is running on port ${PORT}, http://localhost:${PORT}`
        );
      });
    }
  }
);

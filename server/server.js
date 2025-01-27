const express = require("express");
//init app
const app = express();

const bodyParser = require('body-parser');
const cors = require("cors");
const path = require("path");
// require("./db/config");
const mongooseConnection = require("./helpers/mongoose-connection");
const appRoutes = require("./routes");
//Setup server PORT
const port = process.env.PORT || 5000;
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded());
// parse requests of content-type - application/json
app.use(express.json());
/*const corsOptions = {
    origin: 'http://localhost:3000'
}*/
app.use(cors());
app.use(express.static(path.join(__dirname,".","build")))
app.use(express.static("public"));
app.use("/api", appRoutes);
app.use((req, res)=>{
    res.sendFile(path.join(__dirname,".","build","index.html"))
})

// Handle invalid OR 404 request
app.use((_, res) => {
    res.status(404).json({
    success: false,
    message: "Invalid Request",
    });
});

mongooseConnection();

// Launch app to listen to specified port
app.listen(port, () => {
    console.log(`Node is running on Port: ${port}`);
});
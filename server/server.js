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
app.use(bodyParser.urlencoded({ extended: true }));
// parse requests of content-type - application/json
app.use(express.json());
const corsOptions = {
    origin: 'http://localhost:3000'
}
app.use(cors(corsOptions));

app.use("/api", appRoutes);

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
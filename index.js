var express=require("express");
var emprouter = require("./emp");
var app = express();

const port = 2000;


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(express.json());
app.use("/employees",emprouter);

app.listen(port,function()
{
   console.log("server is on.."+port);
   
});








var express = require("express");
var mysql = require("mysql");
var emprouter = express();

const connection=mysql.createConnection({

    host:"192.168.43.64",
    user:"root",
    password:"manager",
    database:"Emp",
    port:"3307"

});

var myData=[];
connection.connect();



     emprouter.post("/",function(request,response){
          

        let eno= parseInt(request.body.no);
        let ename=request.body.name;
        let eaddress=request.body.address;

        let query = `insert into emp values(${eno},'${ename}', '${eaddress}')`;
        console.log(query);

        connection.query(query,function(err,result)
        {
            if(err==null)
            {
              response.contentType("application/json");
              response.send(JSON.stringify(result));
            }
            else
            {

                response.contentType("application/json");
                response.send(err);
            }
        });
        
});

emprouter.put("/:no",function(request,response){
          

    let eno= parseInt(request.params.no);
    let ename=request.body.name;
    let eaddress=request.body.address;

    let query =`update emp set name='${ename}',address='${eaddress}' where no='${eno}'`;
    console.log(query);

    connection.query(query,function(err,result)
    {
        if(err==null)
        {
          response.contentType("application/json");
          response.send(JSON.stringify(result));
        }
        else
        {

            response.contentType("application/json");
            response.send(err);
        }
    });
    
});

emprouter.delete("/:no",function(request,response)
    {
         let eno = parseInt(request.params.no);
         let query = `delete from emp where no = ${eno}`;
         connection.query(query,function(err,result)
        {
            if(err==null)
            {
              response.contentType("application/json");
              response.send(JSON.stringify(result));
            }
            else
            {

                response.contentType("application/json");
                response.send(err);
            }
        });
        
    });


emprouter.get("/", function(request, response)
{
    connection.query("select * from emp", function(err, result)
{
        if(err==null)
        {
           myData =  result;
           response.contentType("application/json");
           response.send(JSON.stringify(myData));
        }
        else
        {
           response.send("Something went wrong!"); 
        }
    });
    
});

emprouter.get("/:no", function(request, response)
{
    let eno=parseInt(request.params.no);
    let query = `select * from emp where no = '${eno}'`;
    console.log(query);

    connection.query(query,function(err,result)
        {
            if(err==null)
            {
              response.contentType("application/json");
              response.send(JSON.stringify(result));
            }
            else
            {

                response.contentType("application/json");
                response.send(err);
            }
        });
});

module.exports = emprouter;







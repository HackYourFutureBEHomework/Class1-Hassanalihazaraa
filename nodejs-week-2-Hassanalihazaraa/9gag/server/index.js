const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { connection } = require("./connection");

const server = express ();
const PORT = 8000;

server.listen(PORT, () => {
    console.log(`server is running on localhost:${PORT}`);
})

server.use(bodyParser.json());
server.use(cors({origon: "http://localhost:3000"}));

server.get("/get/jokes", (request, response) => {
connection.query("select * from joke", (error, results) => {
if(error) {
    console.log(error);
    response.json({status: "error", message: "something went wrong"});
  }
  response.json(results)
  })
})

server.post("/update/joke/upvote", (request, response) => {
    const { body } = request;
    if (body){
        console.log(body);
        const { id } = body;
        if(id) {
            const sql = "update joke set up_votes = up_votes + 1 where id = ?";
            const values = [id];
            
            connection.query(sql, values, (error, results) => {
                if(error){
                    showError(error, response);
                }
                response.json({status: "succes",message: "joke upvoted"})
            })
        }
    } 
    response.send("update joke will come here");
})

function showError(error, response){
    console.log(error);
    response.json({status: "error", message: "something went wrong"});
}

server.post("/post/joke", (Request, response) => {
    const { body } = request;
    if(body) {
        const { title, file } = body;
        console.log({title,file});
        if(file){
            const { base64 } = file;
            fs.writeFile("./images/test.jpeg")
        }
    }
})
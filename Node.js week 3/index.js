const express = require("express");
const server = express ();
const bodyParser = require("body-parser");
const cors = require("cors");
// const { SHA256, AES } = require("crypto-js");
const crypto = require("crypto-js");
const { connection } = require("./connection");
const fs = require ("fs");
const uuidv4 = require("uuid/v4");
const compression = require("compression");
const helmet = require("helmet");
const PORT = process.env.PORT || 8000;



server.listen(PORT, () => {
    console.log(`server is running on localhost:${PORT}`);
})


server.use(express.static('public'));
server.use(bodyParser.json());
server.use(cors({origon: "http://localhost:3000"}));
server.use(compression());
server.use(helmet());



server.get("/registration/:username/:password",(request, response) => {
    const { username, password: stupidpassword } = request.params;
    // const stupidpassword = "password123";
    const hashedpassword = SHA256(stupidpassword).toString();
    const salt = uuidv4();
    const encryptedpassword = AES.encrypt(hashedpassword, key).toString();
    const sql = "insert into user ?";
    const values = {
        username,
        password: encryptedpassword,
        salt
    }
connection.query(sql, values, (error, result) => {
    if(error) showError(error,response);
    else{
        response.json({status: "success", message: "registered"})
       }
    })
})
console.log({encryptedpassword});
response.send(encryptedpassword);
});



// login authentication with nodejs express.
server.get("/login", function (req, res) {
    if (!req.query.username || !req.query.password) {
      res.send("login failed");    
    } else if(req.query.username === "username" || req.query.password === "password") {
      res.send("login successfull!");
    }
});



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



server.post("/post/joke",(request,response)=>{
    const {body}= request;
    if(body){
        const{title,file} = body;
        if(file){
            const {base64}=file;
            const fileName =uuidv4();
            fs.writeFile(`./public/images/${fileName}.jpeg`,base64,'base64',(error)=>{
                if(error){
                    console.log(error);
                }
            })
            const sql = "INSERT into joke set ?";
            const values ={
                image_location:`http://10.20.0.48:8000/images/${fileName}.jpeg`,
                title
            }
        
            connection.query(sql,values,(error,result)=>{
            if(error) showError(error,response);
            response.json({status: "succes",  message: "joke uploaded"})
            })
        }   
    }
})



server.get("/get/joke/:id",(request,response)=>{
    const {id}= request.params;
    const values=[id];
    connection.query(`select * from joke where id =? `,values,(error,results)=>{
    if(error){
        showError(error,response);
    }
    response.json(results[0]);
    })
});




server.get("/get/comments/:jokeId",(request,response)=>{
    const {jokeId} = request.params;
    const values = [jokeId];
    connection.query(`select * from comment where joke_id=?`,values,(error,results)=>{
        if(error)
        showError(error.response);
        response.json(results);
    });
});



server.post("/post/comment",(request,response)=>{
    const {body} = request;
    if(body){
        const{text,username,joke_id} = body;
        const sql ="insert into comment set ?";
        const values = {
            text,
            username,
            joke_id
        }
        connection.query(sql,values,(error,result)=>{
            if(error){
                showError(error,response);
            }
            response.json({status: "succes",  message: "comment posted"})
        });
    }
});

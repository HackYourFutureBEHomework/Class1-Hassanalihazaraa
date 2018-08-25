const mysql = require("mysql");

const databaseConfiguration = {
    host: "sql7.freemysqlhosting.net",
    user: "sql7252233",
    password: "DtwyYW71zK",
    database: "sql7252233"
}

const connection = mysql.createConnection(databaseConfiguration);

connection.connect((err) => {

if (err){ 
    console.error('error connecting: '+ err.stack);
    return;
}

console.log('connectd as id '+ connection.threadId);
});
module.exports = {
    connection
}
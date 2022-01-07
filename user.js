const mysql = require("mysql");
const Promise = require("bluebird");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);

const dbinfo = {
  host: "localhost",
  user: "root",
  password: "cdac",
  database: "react",
};

async function adduser(user) {
  const connection = mysql.createConnection(dbinfo);
  await connection.connectAsync();
  let addquery = `insert into messege (username, messege) values(?,?)`;
  connection.query(addquery, [
    user.username,
    user.messege
    
  ]);
  console.log("Done....");
  await connection.endAsync();
}

module.exports = { adduser };
let user = {
    username: "Mayur",
    messege: "hii......!"
    
}
adduser(user);

require("dotenv").config();
const mysql = require("mysql");

const tables_req = [
    ' CREATE TABLE IF NOT EXISTS roles (id INT AUTO_INCREMENT PRIMARY KEY,libelleRole VARCHAR(255) );',

    'CREATE TABLE IF NOT EXISTS critere (id INT AUTO_INCREMENT PRIMARY KEY,libelleCritere VARCHAR(255), noteMax INT, statut enum("actif", "non actif") );',

    'CREATE TABLE IF NOT EXISTS users(id INT AUTO_INCREMENT PRIMARY KEY,firstName VARCHAR(255),lastName VARCHAR(255), login VARCHAR(255) UNIQUE, password VARCHAR(255), role_id INT, FOREIGN KEY(role_id) references roles(id));',

    'CREATE TABLE IF NOT EXISTS annotation(id INT AUTO_INCREMENT PRIMARY KEY,id_audio VARCHAR(255), duration TIME , user_id INT, FOREIGN KEY(user_id) references users(id));',

    'CREATE TABLE IF NOT EXISTS evaluation(id INT AUTO_INCREMENT PRIMARY KEY,id_annotation INT, FOREIGN KEY(id_annotation) references annotation(id), user_id INT, FOREIGN KEY(user_id) references users(id), critere JSON, score INT );'

]


async function connectToDatabase(){
    // Etablir la connexion à la base de données en renseignant les identifiants de connexion
    const con = mysql.createConnection({host: process.env.BDD_HOST, user: process.env.BDD_USER, password: process.env.BDD_PASSWORD})

    con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
        // Requête pour créer la base de données de l'application
        con.query("CREATE DATABASE IF NOT EXISTS annotations_bdd", function (err, result) {
          if (err) throw err;
          console.log("Database created");
          con.changeUser({database: "annotations_bdd"}, (err) => {
            tables_req.forEach((sql_req) => {
                con.query(sql_req, (err) => {
                    if(err) throw err
                    console.log("Tables créées avec succès");
                })
            })
          })
        });
      });

      return con
}



module.exports = {
    connectToDatabase
}
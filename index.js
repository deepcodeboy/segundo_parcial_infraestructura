const express = require('express');
const app = express();
const port = 3000;
require("dotenv").config()
const conexiones = {}
const mariadb = require("./src/db/dbconnection")

conexiones.toMariaDB = async(req, res) => {
    let dbConnection;
    try {
        dbConnection = await mariadb.getConnection();
        
        return res.json({
            msg: "La conexión a la base de datos de MariaDB está funcionando"
        })
    } catch (err) {
        return res.json({
            msg: 'No se ha podido conectar a la base de datos de MariaDB',
            error: err
        })
    } finally {
        if (dbConnection) dbConnection.end();
    }
}

conexiones.toMongoDB = async(req, res) => {
    try {
        await mongodb.connect('mongodb://localhost:27017')
        return res.json({
            msg: 'La conexión a la base de datos de MongoDB ha sido exitosa!'
        })
    } catch (err) {
        return res.status(400).json({
            msg: 'No se ha podido realizar la conexión a la base de datos de MongoDB',
            error: err
        })
    }
}




app.listen(port, console.log(`servidor escuchando en puerto: ${port}`));
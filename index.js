const express = require('express');
const { dbConnection } = require('./database/config');
require('dotenv').config();
const cors = require('cors');


//crear el servidor de express
const app = express();

//conexion base de datos
dbConnection();

//configurar cors
app.use(cors());

//directorio publico
app.use(express.static('public'));


//lectura y parseo del body
app.use(express.json());


//rutas
app.use('/api/auth', require('./routes/auth'));
app.use('/api/events', require('./routes/events'));

//escuchar peticiones
app.listen(process.env.PORT, () =>
{ console.log(`servidor corriendo ${process.env.PORT}`)});

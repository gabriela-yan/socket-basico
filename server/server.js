//Cargando librerías
const express = require('express');
const socketIO = require('socket.io');
const http = require('http');

const path = require('path');

//Inicializando express
const app = express();

//Definir servidor para correr la aplicación
let server = http.createServer(app);

//Creando la ruta publicPath para compartir la carpeta publica
const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

//Middleware para habilitar la carpeta publica
app.use(express.static(publicPath));

//Inicializar socketIO ( IO = Comunicacion del backend )
module.exports.io = socketIO(server);
require('./sockets/socket');

//Escuchando el puerto
server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});
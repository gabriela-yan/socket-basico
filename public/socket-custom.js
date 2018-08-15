//Función que aparece gracias a la libreria importada <script src="socket.io/socket.io.js">
var socket = io();

//==================== On - Escuchar sucesos ====================
//Función que indica que se tiene un canal de comunicacion entre el servidor y el cliente
socket.on('connect', function() {
    console.log('Conectado al servidor');
});

socket.on('disconnect', function() {
    console.log('Perdimos conexión con servidor');
});

//==================== Emit - Enviar información ====================
socket.emit('enviarMensaje', {
    usuario: 'Gabriela',
    mensaje: 'Hola Mundo'
}, function(resp) {
    console.log('Respuesta server: ', resp);
});

socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor: ', mensaje);
});
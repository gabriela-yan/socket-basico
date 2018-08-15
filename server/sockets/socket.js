const { io } = require('../server');

//Verifica cuando un usuario se conecta a la aplicación
io.on('connection', (client) => {
    console.log('Usuario conectado');

    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido a esta aplicación'
    });

    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });

    //Escuchar el cliente
    client.on('enviarMensaje', (data, callback) => {

        console.log(data);

        client.broadcast.emit('enviarMensaje', data);
        // if (mensaje.usuario) {
        //     callback({
        //         resp: 'Callback ejecutado con éxito'
        //     });
        // } else {
        //     callback({
        //         resp: 'El callback no se pudo ejecutar'
        //     });
        // }
    });
});
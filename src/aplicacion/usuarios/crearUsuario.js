const ServicioUsuario = require('../../dominio/servicios/servicioUsuario');
const { respuestaError } = require('../../infraestructura/utilidades/respuestas');
const validador = require('../../infraestructura/utilidades/validador');

const reglasUsuario = {
    nombre: 'required|string',
    apellidos: 'required|string',
    correo: 'required|email',
    telefono: 'required|string',
};

async function crearUsuario(event) {
    try {
        const validacion = validador.validar(JSON.parse(event.body), reglasUsuario);
        if (!validacion.pasa) {
            return respuestaError(400, 'Los parámetros de entrada no son válidos');
        }
        const usuarioData = JSON.parse(event.body);
        const servicioUsuario = new ServicioUsuario();
        const resultado = await servicioUsuario.crearUsuario(usuarioData);
        return resultado;
    } catch (error) {
        console.error('Error al crear usuario:', error);
        return respuestaError(500, 'Error al crear usuario');
    }
}

module.exports = {
    crearUsuario
};

const ServicioUsuario = require('../../dominio/servicios/servicioUsuario');
const { respuestaError, respuestaExitosa } = require('../../infraestructura/utilidades/respuestas');
const validador = require('../../infraestructura/utilidades/validador');

const reglasUsuario = {
    id: 'required|string'
};

async function obtenerUsuario(event) {
    try {
        const validacion = validador.validar(event.pathParameters, reglasUsuario);
        if (!validacion.pasa) {
            return respuestaError(400, 'Los parámetros de entrada no son válidos');
        }

        const { id } = event.pathParameters;
        const servicioUsuario = new ServicioUsuario();
        return await servicioUsuario.obtenerUsuario(id);        
    } catch (error) {
        console.error(`Error al obtener usuario:`, error);
        return respuestaError(500, 'Error al obtener usuario');
    }
}

module.exports = {
    obtenerUsuario
};

const ServicioUsuario = require('../../dominio/servicios/servicioUsuario');
const { respuestaError } = require('../../infraestructura/utilidades/respuestas');
const validador = require('../../infraestructura/utilidades/validador');

const reglasUsuario = {
    id: 'required|string|notEmpty'
};

async function eliminarUsuario(event) {
    try {
        const validacion = validador.validar(event.pathParameters, reglasUsuario);
        if (!validacion.pasa) {
            return respuestaError(400, 'Los parámetros de entrada no son válidos');
        }

        const { id } = event.pathParameters;
        const servicioUsuario = new ServicioUsuario();
        return await servicioUsuario.eliminarUsuario(id);
    } catch (error) {
        return respuestaError(500, 'Error al eliminar usuario');
    }
}

module.exports = {
    eliminarUsuario
};

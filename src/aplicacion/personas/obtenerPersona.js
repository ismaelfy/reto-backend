const ServicioPersona = require("../../dominio/servicios/servicioPersona");
const validador = require('../../infraestructura/utilidades/validador');
const { respuestaError, respuestaExitosa } = require('../../infraestructura/utilidades/respuestas');

const reglasObtenerPersona = {
    id: 'required|integer'
};

async function obtenerPersona(event) {
    try {
        const validacion = validador.validar(event.pathParameters, reglasObtenerPersona);

        if (!validacion.pasa) {
            return respuestaError(400, 'Los parámetros de entrada no son válidos');
        }

        const { id } = event.pathParameters;
        const servicioPersona = new ServicioPersona();

        const persona = await servicioPersona.obtenerPersona(id);
        return respuestaExitosa(persona);
    } catch (error) {
        return respuestaError(500, 'Error al obtener persona');
    }
}

module.exports = {
    obtenerPersona
};

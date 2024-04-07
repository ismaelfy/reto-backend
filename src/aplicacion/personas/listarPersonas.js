const ServicioPersona = require("../../dominio/servicios/servicioPersona");
const { respuestaError } = require("../../infraestructura/utilidades/respuestas");

async function listarPersonas() {
    const servicioPersona = new ServicioPersona();
    try {
        return await servicioPersona.listarPersonas();
    } catch (error) {
        return respuestaError(500, 'Error al listar personas');
    }
}

module.exports = {
    listarPersonas
};

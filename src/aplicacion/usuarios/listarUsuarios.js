const ServicioUsuario = require('../../dominio/servicios/servicioUsuario');
const { respuestaError, respuestaExitosa } = require('../../infraestructura/utilidades/respuestas');

async function listarUsuarios(event) {
    try {
        const servicioUsuario = new ServicioUsuario();
        return await servicioUsuario.listarUsuarios();
    } catch (error) {
        console.error(`Error al listar usuarios:`, error);
        return respuestaError(500, 'Error al listar usuarios');
    }
}

module.exports = {
    listarUsuarios
};

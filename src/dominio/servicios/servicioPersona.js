// src/dominio/servicios/servicioPersona.js
const RepositorioPersona = require('../repositorios/repositorioPersona');
const { respuestaError } = require('../../infraestructura/utilidades/respuestas');

class ServicioPersona {
    async listarPersonas() {
        try {
            return await RepositorioPersona.listarPersonas();
        } catch (error) {
            return respuestaError(500, 'Error al listar personas');
        }
    }

    async obtenerPersona(id) {
        try {
            return await RepositorioPersona.obtenerPersonaPorId(id);
        } catch (error) {
            return respuestaError(500, 'Error al obtener persona');
        }
    }
}

module.exports = ServicioPersona;

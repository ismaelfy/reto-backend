// src/dominio/servicios/servicioUsuario.js
const repositorioUsuario = require('../repositorios/repositorioUsuario');
const { respuestaError } = require('../../infraestructura/utilidades/respuestas');

class ServicioUsuario {
    async crearUsuario(usuarioData) {
        try {
            return await repositorioUsuario.crearUsuario(usuarioData);
        } catch (error) {
            return respuestaError(500, 'Error al crear usuario');
        }
    }

    async obtenerUsuario(id) {
        try {
            return await repositorioUsuario.obtenerUsuarioPorId(id);
        } catch (error) {
            return respuestaError(500, 'Error al obtener usuario');
        }
    }

    async actualizarUsuario(id, usuarioData) {
        try {
            return await repositorioUsuario.actualizarUsuario(id, usuarioData);
        } catch (error) {
            return respuestaError(500, 'Error al actualizar usuario');
        }
    }

    async eliminarUsuario(id) {
        try {
            return await repositorioUsuario.eliminarUsuario(id);
        } catch (error) {
            return respuestaError(500, 'Error al eliminar usuario');
        }
    }

    async listarUsuarios() {
        try {
            return await repositorioUsuario.listarUsuarios();
        } catch (error) {
            return respuestaError(500, 'Error al listar usuarios');
        }
    }
}

module.exports = ServicioUsuario;

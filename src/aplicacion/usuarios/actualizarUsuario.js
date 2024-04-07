// src/applicacion/usuarios/actualizarUsuario.js
const ServicioUsuario = require('../../dominio/servicios/servicioUsuario');
const { respuestaError } = require('../../infraestructura/utilidades/respuestas');
const validador = require('../../infraestructura/utilidades/validador');

const reglasUsuario = {
    nombre: 'required|string|notEmpty',
    apellidos: 'required|string|notEmpty',
    correo: 'required|email|notEmpty',
    telefono: 'required|string|notEmpty',
};

async function actualizarUsuario(event) {
    try {
        const { id } = event.pathParameters;
        if (!id) return respuestaError(400, 'El id es requerido');

        const validacion = validador.validar(JSON.parse(event.body), reglasUsuario);
        if (!validacion.pasa) return respuestaError(400, validacion.errores || 'Error de validación');

        const usuarioData = JSON.parse(event.body);
        const servicioUsuario = new ServicioUsuario();

        return await servicioUsuario.actualizarUsuario(id, usuarioData);
    } catch (error) {
        return respuestaError(500, 'Error al actualizar usuario');
    }
}

module.exports = {
    actualizarUsuario
};

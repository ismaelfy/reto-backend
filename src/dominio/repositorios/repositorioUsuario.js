const AdaptadorDynamoDB = require('../../infraestructura/baseDeDatos/adaptadorDynamoDB');
const Usuario = require('../modelos/modeloUsuario');
const { respuestaError, respuestaExitosa } = require('../../infraestructura/utilidades/respuestas');
const { v4 } = require('uuid');

const adaptadorDynamoDB = new AdaptadorDynamoDB();
const TABLE_NAME = 'tablaUsuarios';

const crearUsuario = async (usuarioData) => {
    try {
        const usuario = new Usuario({
            id: v4(),
            ...usuarioData
        });

        const params = {
            TableName: TABLE_NAME,
            Item: { ...usuario }
        };
        const resultado = await adaptadorDynamoDB.put(params);
        if (!resultado.success) {
            return respuestaError(500, 'Error al crear usuario en DynamoDB');
        }
        return respuestaExitosa(usuario);
    } catch (error) {
        console.error('Error al crear usuario en DynamoDB:', error);
        return respuestaError(500, 'Error al crear usuario en DynamoDB');
    }
}

async function obtenerUsuarioPorId(id) {
    try {
        const params = {
            TableName: TABLE_NAME,
            Key: {
                id: id
            }
        };

        const data = await adaptadorDynamoDB.get(params);
        if (!data.success) {
            return respuestaError(404, 'Usuario no encontrado');
        }

        return respuestaExitosa(new Usuario(data.Items));
    } catch (error) {
        console.error('Error al obtener usuario por ID en DynamoDB:', error);
        return respuestaError(500, 'Error al obtener usuario por ID en DynamoDB');
    }
}

async function listarUsuarios() {
    try {
        const params = {
            TableName: TABLE_NAME,
        };

        const data = await adaptadorDynamoDB.scan(params);

        if (!data.success) {
            return respuestaExitosa(null);
        }
        const usuarios = data.Items.map(item => new Usuario(item));
        return respuestaExitosa(usuarios);
    } catch (error) {
        console.error('Error al listar usuarios en DynamoDB:', error);
        return respuestaError(500, 'Error al listar usuarios en DynamoDB');
    }
}

async function actualizarUsuario(id, usuarioData) {
    try {
        const usuario = new Usuario({
            id: id,
            ...usuarioData
        });

        const params = {
            TableName: TABLE_NAME,
            Item: usuario
        };
        const data = await adaptadorDynamoDB.put(params);
        if (!data.success) {
            return respuestaError(500, 'Error al actualizar usuario en DynamoDB');
        }
        return respuestaExitosa(usuario);
    } catch (error) {
        console.error('Error al actualizar usuario en DynamoDB:', error);
        return respuestaError(500, 'Error al actualizar usuario en DynamoDB');
    }
}

async function eliminarUsuario(id) {
    try {
        const params = {
            TableName: TABLE_NAME,
            Key: {
                id: id
            }
        };
        const resultado = await adaptadorDynamoDB.delete(params);
        if (!resultado.success) {
            return respuestaError(500, 'Error al eliminar usuario en DynamoDB');
        }
        return respuestaExitosa(null);
    } catch (error) {
        return respuestaError(500, 'Error al eliminar usuario en DynamoDB');
    }
}

module.exports = {
    crearUsuario,
    obtenerUsuarioPorId,
    listarUsuarios,
    actualizarUsuario,
    eliminarUsuario
};

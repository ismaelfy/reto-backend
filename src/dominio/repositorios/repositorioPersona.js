const axios = require('axios');
const Persona = require('../modelos/modeloPersona');
const validador = require('../../infraestructura/utilidades/validador');
const { respuestaError, respuestaExitosa } = require('../../infraestructura/utilidades/respuestas');

const reglasObtenerPersona = {
    id: 'required|integer'
};

async function obtenerPersonaPorId(id) {
    const validacion = validador.validar({ id }, reglasObtenerPersona);

    if (!validacion.pasa) {
        return respuestaError(400, 'Los parámetros de entrada no son válidos');
    }

    try {
        const response = await axios.get(`https://swapi.py4e.com/api/people/${id}`);
        if (response.data.detail === 'Not found') {
            return respuestaError(404, 'Persona no encontrada');
        }

        const persona = Persona.fromJson(response.data);

        return respuestaExitosa(persona);

    } catch (error) {
        return respuestaError(500, 'Error al obtener persona');
    }
}


const reglasListarPersonas = {};

async function listarPersonas() {
    const validacion = validador.validar({}, reglasListarPersonas);

    if (!validacion.pasa) {
        return respuestaError(400, 'Los parámetros de entrada no son válidos');
    }

    try {
        const response = await axios.get('https://swapi.py4e.com/api/people/');
        if (response.data.count === 0) {
            return respuestaExitosa([]);
        }

        const personas = response.data.results.map(jsonPersona => Persona.fromJson(jsonPersona));
        return respuestaExitosa(personas);
    } catch (error) {
        return respuestaError(500, 'Error al listar personas');
    }
}

module.exports = {
    obtenerPersonaPorId,
    listarPersonas
};

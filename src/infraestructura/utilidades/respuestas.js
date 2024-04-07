function respuestaExitosa(data) {
    return {
        statusCode: 200,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            success: true,
            payload: data || null
        })
    };
}

function enviarRespuesta() {
    return {
        statusCode: 200,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            success: true,
            payload: data || null
        })
    };
}

function respuestaError(statusCode, mensaje) {
    return {
        statusCode: statusCode || 500,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            success: false,
            payload: null,
            error: mensaje || 'Error interno del servidor'
        })
    };
}

function parsearRespuesta(resultado) {
    return JSON.parse(resultado.body);
}

module.exports = {
    respuestaExitosa,
    respuestaError,
    parsearRespuesta,
    enviarRespuesta
};

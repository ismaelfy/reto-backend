const Validator = require('validatorjs');

function validar(params, reglas) {
    const validador = new Validator(params, reglas);
    return {
        pasa: validador.passes(),
        errores: validador.errors.all()
    };
}

module.exports = { validar };

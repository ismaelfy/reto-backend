const Validator = require('validatorjs');

Validator.register('notEmpty', function (value, requirement, attribute) {
    return !Validator.isEmpty(value);
}, 'El campo :attribute no puede estar vacío.');

function validar(params, reglas) {
    try {
        const reglasConNoVacios = Object.entries(reglas).reduce((acc, [key, value]) => {
            acc[key] = `${value}|required|min:1`;
            return acc;
        }, {});

        const mensajes = {
            'required.*': 'El :attribute es obligatorio.',
            'min.*': 'El :attribute debe tener al menos :min caracteres.'
        };

        const validador = new Validator(params, reglasConNoVacios, mensajes);
        return {
            pasa: validador.passes(),
            errores: validador.errors.all()
        };
    } catch (error) {
        return {
            pasa: false,
            errores: {}
        };
    }
}

module.exports = { validar };

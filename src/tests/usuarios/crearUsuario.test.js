const { crearUsuario } = require('../../aplicacion/usuarios/crearUsuario');
const { APIGateway } = require('../../infraestructura/utilidades/APIGateway');
const { parsearRespuesta } = require('../../infraestructura/utilidades/respuestas');

describe('crearUsuario', () => {
    const request = APIGateway({
        body: {
            nombre: 'Ismael',
            apellidos: 'Fernandez',
            correo: 'ismael.fernandez@gmail.com',
            telefono: '123456789'
        }
    });

    it('devuelve un error si el nombre no es válido', async () => {
        request.body.nombre = '';
        let resultado = await crearUsuario(request);
        body = parsearRespuesta(resultado)
        expect(resultado.statusCode).toBe(400);
    });

    it('devuelve un error si el apellido no es válido', async () => {
        request.body.apellidos = '';
        const resultado = await crearUsuario(request);
        expect(resultado.statusCode).toBe(400);
    });

    it('devuelve un error si el correo no es válido', async () => {
        request.body.correo = 'correo-no-valido';
        const resultado = await crearUsuario(request);
        expect(resultado.statusCode).toBe(400);
    });

    it('devuelve un error si el teléfono no es válido', async () => {
        request.body.telefono = 'telefono-no-valido';
        const resultado = await crearUsuario(request);
        expect(resultado.statusCode).toBe(400);
    });

    it('devuelve un error si el body no es válido', async () => {
        request.body = {};
        const resultado = await crearUsuario(request);
        expect(resultado.statusCode).toBe(500);
    });


});

const { actualizarUsuario } = require('../../aplicacion/usuarios/actualizarUsuario');
const { APIGateway } = require('../../infraestructura/utilidades/APIGateway');

describe('actualizarUsuario', () => {
    const request = APIGateway({
        body: {
            nombre: 'Ismael',
            apellidos: 'Fernandez',
            correo: 'ismael.fernandez@gmail.com',
            telefono: '123456789'
        },
        pathParameters: { id: '123' },
    });

    it('devuelve un error si el nombre no es válido', async () => {
        request.body.nombre = '';
        let resultado = await actualizarUsuario(request);
        expect(resultado.statusCode).toBe(400);
    });

    it('devuelve un error si el apellido no es válido', async () => {
        request.body.apellidos = '';
        const resultado = await actualizarUsuario(request);
        expect(resultado.statusCode).toBe(400);
    });

    it('devuelve un error si el correo no es válido', async () => {
        request.body.correo = 'correo-no-valido';
        const resultado = await actualizarUsuario(request);
        expect(resultado.statusCode).toBe(400);
    });

    it('devuelve un error si el teléfono no es válido', async () => {
        request.body.telefono = 'telefono-no-valido';
        const resultado = await actualizarUsuario(request);
        expect(resultado.statusCode).toBe(400);
    });

    it('devuelve un error si el id no es válido', async () => {
        request.pathParameters.id = '';
        const resultado = await actualizarUsuario(request);
        expect(resultado.statusCode).toBe(400);
    });

    it('devuelve un error si el body no es válido', async () => {
        request.body = {};
        const resultado = await actualizarUsuario(request);
        expect(resultado.statusCode).toBe(400);
    });

});

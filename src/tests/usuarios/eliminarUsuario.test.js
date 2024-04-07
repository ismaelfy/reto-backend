const { eliminarUsuario } = require('../../aplicacion/usuarios/eliminarUsuario');
const { APIGateway } = require('../../infraestructura/utilidades/APIGateway');

describe('eliminarUsuario', () => {
    const request = APIGateway({
        pathParameters: { id: '123' },
    });

    it('devuelve un error si el id no es válido', async () => {
        request.pathParameters.id = '';
        const resultado = await eliminarUsuario(request);
        expect(resultado.statusCode).toBe(400);
    });

    it('devuelve un error si el id no existe', async () => {
        request.pathParameters.id = '123';
        const resultado = await eliminarUsuario(request);
        expect(resultado.statusCode).toBe(400);
    });

    it('devuelve un objeto con el atributo success', async () => {
        let resultado = await eliminarUsuario(request);
        resultado = JSON.parse(resultado.body);
        expect(resultado).toHaveProperty('success');
    });

    it('devuelve un objeto con el atributo payload', async () => {
        let resultado = await eliminarUsuario(request);
        resultado = JSON.parse(resultado.body);
        expect(resultado).toHaveProperty('payload');
    });

    it('devuelve un objeto con el atributo payload que es un array vacío', async () => {
        let resultado = await eliminarUsuario(request);
        resultado = JSON.parse(resultado.body);
        expect(resultado.payload).toEqual(null);
    });

});

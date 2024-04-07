const { obtenerPersona } = require('../../aplicacion/personas/obtenerPersona');
const { APIGateway } = require('../../infraestructura/utilidades/APIGateway');

describe('obtenerPersona', () => {
    const request = APIGateway({
        pathParameters: { id: '12' },
    });

    it('devuelve un objeto con el atributo success', async () => {
        let resultado = await obtenerPersona(request);
        resultado = JSON.parse(resultado.body);
        expect(resultado).toHaveProperty('success');
    });

    it('devuelve un objeto con el atributo payload', async () => {
        let resultado = await obtenerPersona(request);
        resultado = JSON.parse(resultado.body);
        expect(resultado).toHaveProperty('payload');
    });
    
    it('si el id no es un número devuelve un objeto con el atributo success en false', async () => {
        request.pathParameters.id = 'a';
        let resultado = await obtenerPersona(request);
        resultado = JSON.parse(resultado.body);
        expect(resultado.success).toBe(false);
    });

});


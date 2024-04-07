const { listarPersonas } = require('../../aplicacion/personas/listarPersonas');
const { APIGateway } = require('../../infraestructura/utilidades/APIGateway');

describe('listarPersonas', () => {
    const request = APIGateway({});

    it('devuelve un objeto con el atributo success', async () => {
        let resultado = await listarPersonas(request);
        resultado = JSON.parse(resultado.body);
        expect(resultado).toHaveProperty('success');
    });

    it('devuelve un objeto con el atributo payload', async () => {
        let resultado = await listarPersonas(request);
        resultado = JSON.parse(resultado.body);
        expect(resultado).toHaveProperty('payload');
    });

    it('devuelve un objeto con el atributo success', async () => {
        let resultado = await listarPersonas(request);
        resultado = JSON.parse(resultado.body);
        expect(resultado).toHaveProperty('success');
    });
});


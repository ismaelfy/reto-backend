const { obtenerUsuario } = require('../../aplicacion/usuarios/obtenerUsuario');
const { APIGateway } = require('../../infraestructura/utilidades/APIGateway');

describe('obtenerUsuario', () => {
  const request = APIGateway({
    pathParameters: { id: '123' },
  });

  // valida ID
  it('devuelve un objeto con el atributo success', async () => {
    let resultado = await obtenerUsuario(request);
    resultado = JSON.parse(resultado.body);
    expect(resultado).toHaveProperty('success');
  });



  it('devuelve un objeto con el atributo payload', async () => {
    let resultado = await obtenerUsuario(request);
    resultado = JSON.parse(resultado.body);
    expect(resultado).toHaveProperty('payload');
  });

  it('devuelve un objeto con el atributo payload', async () => {
    let resultado = await obtenerUsuario(request);
    resultado = JSON.parse(resultado.body);
    expect(resultado).toHaveProperty('payload');
  });

  it('devuelve un objeto con el atributo payload que es un array vacío', async () => {
    let resultado = await obtenerUsuario(request);
    resultado = JSON.parse(resultado.body);
    expect(resultado.payload).toEqual(null);
  });

});

const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Testa se a função retorna o esperado', () => {
    expect(typeof handlerElephants).toBe('function');
    expect(handlerElephants()).toBeUndefined();
    expect(handlerElephants(2)).toBe('Parâmetro inválido, é necessário uma string');
    expect(handlerElephants('location', 'elephants')).toBe('NW');
    expect(handlerElephants('asd', 'elephants')).toBeNull();
    expect(handlerElephants('names', 'elephants')).toEqual([ 'Ilana', 'Orval', 'Bea', 'Jefferson' ]);
    expect(handlerElephants('averageAge', 'elephants')).toBe(10.5);
    expect(handlerElephants('count', 'elephants')).toBe(4);
  });
});

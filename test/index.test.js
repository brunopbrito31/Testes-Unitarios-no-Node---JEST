const homeIndex = require('../index');

const funcaoSoma = homeIndex.soma;
const funcaoMultiplicacao = homeIndex.multiplicacao;

test('soma de 2 + 2 deve retornar 4', () => {
    expect(funcaoSoma(2,2)).toBe(4);
});

test('soma deve retornar resultado do tipo numérico', () => {
    expect(typeof funcaoSoma(2,2)).toBe('number');
});

test('multiplicacao de 2 x 2 deve retornar 6', () => {
    expect(funcaoMultiplicacao(2,3)).toBe(6);
});

test('multiplicação deve retornar resultado do tipo numérico', () => {
    expect(typeof funcaoMultiplicacao(2,3)).toBe('number');
});
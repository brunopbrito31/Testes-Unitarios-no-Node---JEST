const homeIndex = require('../index');

const funcaoSoma = homeIndex.soma;
const funcaoMultiplicacao = homeIndex.multiplicacao;

test('Deve retornar a soma de 2 + 2', () => {
    expect(funcaoSoma(2,2)).toBe(4);
});

test('Função de soma deve retornar resultado do tipo numérico', () => {
    expect(typeof funcaoSoma(2,2)).toBe('number');
});

test('Função deve retornar a multiplicação de 2 x 2', () => {
    expect(funcaoMultiplicacao(2,3)).toBe(6);
});

test('Função de multiplicação deve retornar resultado do tipo numérico', () => {
    expect(typeof funcaoMultiplicacao(2,3)).toBe('number');
});
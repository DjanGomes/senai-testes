describe('teste', () => {
  function somar(valor1: number, valor2: number) {
    return valor1 + valor2;
  }

  it('deve retornar ola mundo!', () => {
    expect('olá mundo!').toEqual('olá mundo!');
  });

  test('somar 3 + 5 = 9', () => {
    expect(somar(3, 5)).toEqual(8);
  });
});

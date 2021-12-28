describe("Criar categoria", () => {
  it("Espero que um 2+2 seja 4", () => {
    const soma = 2 + 2;
    const resultados = 4;

    expect(soma).toBe(resultados);
  });

  it("Espero que um 2 + 2 seja 4", () => {
    const soma = 2 + 2;
    const resultados = 5;

    expect(soma).not.toBe(resultados);
  });
});

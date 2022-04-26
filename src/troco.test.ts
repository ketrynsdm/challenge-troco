import { result, moedas } from "./troco.ts";


describe('Testando as funcionalidades do Troco', () => {
    it("Deve receber notas no valor de 100, 50, 20, 10, 5, 2 para o troco de 187", () => {
        const result = { "10": 1, "100": 1, "2": 1, "20": 1, "5": 1, "50": 1 }
        expect(moedas(187)).toMatchObject(result);
    });
    it('Deve receber moedas no valor de 0.05, 0.1, 0.25, 0.5, 1, para o troco de 1,90', () => {
        const result = { "0.05": 1, "0.1": 1, "0.25": 1, "0.5": 1, "1": 1 }
        expect(moedas(1.9)).toMatchObject(result);
    });

    it('Valor do produto subtraido do valor pago', () => {
        const resultValue = 5
        expect(result(10, 15)).toEqual(resultValue);
    });
    it('Valor do pago é menor do que o valor do produto', () => {
        const resultmenor = -10
        expect(result(20, 10)).toEqual(resultmenor);
    });
})
import { result, moedas } from "./troco.ts";


describe('Testando as funcionalidades do Troco', () => {
    it("Deve receber o valor das moedas", () => {
        const result = { "0.05": 0, "0.1": 0, "0.25": 1, "0.5": 1, "1": 0, "10": 0, "100": 0, "2": 0, "20": 0, "5": 0, "50": 0 }
        expect(moedas(0.75)).toMatchObject(result);
    });
    it('Deve receber a quantidade de notas', () => {
        const result = { "0.05": 0, "0.1": 0, "0.25": 0, "0.5": 0, "1": 0, "10": 1, "100": 0, "2": 0, "20": 0, "5": 0, "50": 0 }
        expect(moedas(10)).toMatchObject(result);
    });
    it('Deve receber a quantidade de notas e moedas de: ', () => {
        const result = { "0.05": 1, "0.1": 0, "0.25": 0, "0.5": 0, "1": 0, "10": 1, "100": 0, "2": 0, "20": 0, "5": 0, "50": 0 }
        expect(moedas(10.05)).toMatchObject(result);
    });
    it('Deve receber a quantidade de notas e moedas de: ', () => {
        const result = { "0.05": 0, "0.1": 1, "0.25": 0, "0.5": 0, "1": 0, "10": 1, "100": 0, "2": 0, "20": 0, "5": 0, "50": 0 }
        expect(moedas(10.1)).toMatchObject(result);
    });
    it('Deve receber a quantidade de notas e moedas de: ', () => {
        const result = { "0.05": 0, "0.1": 0, "0.25": 1, "0.5": 0, "1": 0, "10": 1, "100": 0, "2": 0, "20": 0, "5": 0, "50": 0 }
        expect(moedas(10.25)).toMatchObject(result);
    });
    it('Deve receber a quantidade de notas e moedas', () => {
        const result = { "0.05": 0, "0.1": 0, "0.25": 0, "0.5": 1, "1": 0, "10": 1, "100": 0, "2": 0, "20": 0, "5": 0, "50": 0 }
        expect(moedas(10.5)).toMatchObject(result);
    });
    it('Deve receber a quantidade de notas e moedas', () => {
        const result = { "0.05": 0, "0.1": 0, "0.25": 0, "0.5": 0, "1": 1, "10": 1, "100": 0, "2": 0, "20": 0, "5": 0, "50": 0 }
        expect(moedas(11)).toMatchObject(result);
    });
    it('Deve receber a quantidade de notas e moedas', () => {
        const result = { "0.05": 0, "0.1": 0, "0.25": 0, "0.5": 0, "1": 0, "10": 0, "100": 0, "2": 1, "20": 0, "5": 0, "50": 0 }
        expect(moedas(2)).toMatchObject(result);
    });
    it('Deve receber a quantidade de notas e moedas', () => {
        const result = { "0.05": 0, "0.1": 0, "0.25": 0, "0.5": 0, "1": 0, "10": 0, "100": 0, "2": 0, "20": 1, "5": 0, "50": 0 }
        expect(moedas(20)).toMatchObject(result);
    });
    it('Deve receber a quantidade de notas e moedas', () => {
        const result = { "0.05": 0, "0.1": 0, "0.25": 0, "0.5": 0, "1": 0, "10": 0, "100": 0, "2": 0, "20": 0, "5": 1, "50": 0 }
        expect(moedas(5)).toMatchObject(result);
    });
    it('Deve receber a quantidade de notas e moedas', () => {
        const result = { "0.05": 0, "0.1": 0, "0.25": 0, "0.5": 0, "1": 0, "10": 0, "100": 0, "2": 0, "20": 0, "5": 0, "50": 1 }
        expect(moedas(50)).toMatchObject(result);
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
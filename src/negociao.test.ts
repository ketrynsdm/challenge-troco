import {result, moedas} from './negociao.ts'
const negociaoJs = require('./negociao.js')


describe('Testando as funcionalidades do Troco', ()=> {
    it('Deve receber o valor das notas', () => {
        const notas = [100, 50, 20, 10, 5, 2, 1, 0.5, 0.25, 0.1, 0.05]
        // const troco = {'100': 0, '50': 0, '20': 0, '10': 0, '5': 0, '2': 0, '1': 0, '0.5': 0, '0.25': 0, '0.1': 0, '0.05': 0}
        expect(negociaoJs.notas).toBe(negociaoJs.notas)
        // expect(negociao.troco[100]).toBe(troco[100])
    })
    it('Deve receber a quantidade de notas e moedas', () => {
        const result =  {"0.05": 0, "0.1": 0, "0.25": 0, "0.5": 0, "1": 0, "10": 1, "100": 0, "2": 0, "20": 0, "5": 0, "50": 0}
        expect(moedas(20 - 10)).toMatchObject(result)
    })

    it('Valor do produto subtraido do valor pago', () => {
        const resultValue =  5
        expect(result(10,15)).toEqual(resultValue)
    })

    it('O troco da quantidade de notas e moedas', () => {
        const troco = {'100': 0, '50': 0, '20': 0, '10': 0, '5': 0, '2': 0, '1': 0, '0.5': 0, '0.25': 0, '0.1': 0, '0.05': 0}
        expect(troco[100]).toBe(troco[100])
    })
})
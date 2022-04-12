    function moedas(trocoMoedas: number){
        var notas = [100, 50, 20, 10, 5, 2, 1, 0.5, 0.25, 0.1, 0.05]
        // Troco é um objeto, associando notas com a quantidade necessária
        var troco:any = {'100': 0, '50': 0, '20': 0, '10': 0, '5': 0, '2': 0, '1': 0, '0.5': 0, '0.25': 0, '0.1': 0, '0.05': 0,}
        
        // Itero sobre o array de notas
        for (var nota of notas) {
            // Se o valor restante for maior que minha nota atual..
            while (trocoMoedas >= nota) {
            // incremento a propriedade do objeto correspondente a nota
            troco[nota] += 1
            // e reduzo o valor restante pelo valor da nota
            trocoMoedas -= nota
            }
        }

        var keys = Object.keys(troco);
        var values = Object.values(troco);
        var map = values.map((item, id) => Number(item) !== 0 ? Number(keys[id]) <= 1 ? ` ${item} moeda de R$${keys[id]}` : 
        ` ${item} nota de R$${keys[id]}` : '')
        var filter = map.filter(item => item !== '')

        console.log(filter.toString())
        return troco
        
    }
    
    function result(valorDoProduto:number, pago:number){        
            console.log('Valor do produto: R$' + valorDoProduto);
            console.log('Valor pago: R$' + pago);
            console.log('Resultado esperado: ');
            moedas(pago - valorDoProduto)
    }

    result(21.99, 25)
    

    
        
// Seu desafio é fazer um programa que leia o valor total a ser pago, e o valor efetivamente pago, informar o maior número de cédulas e moedas que dem ser fornecidas como troco.

// Deve-ser considerar que há:

// - Cédulas de R$100.00, R$50/00, R$20.00, R$10.00, R$5.00 e R$2.00
// - Moedas de R$1.00, R$0.50, R$0.25, R$0.10 e R$0.05 

// * Caso o troco seja menor que R$0.05 o valor deve ser arredondado para cima.

// Exemplo 1:
// Valor do produto: R$ 1.95
// Valor pago: R$2.00

// Resultado esperado: 1 moeda de R$0.05

// Exemplo 2:
// Valor do produto: R$ 2.00
// Valor pago: R$3.00

// Resultado esperado: 1 moeda de R$1.00
    

 

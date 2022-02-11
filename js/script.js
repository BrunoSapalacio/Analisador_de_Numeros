let numeros = [] // Array que irá armazenar os números
let numeromax = 0 // Irá contar a quantidade de números
const numero = document.querySelector('#numero')
const select = document.querySelector('#conteudo');
const resultado = document.querySelector('#res');

function somenteNumeros(num) {
    let er = /[^0-9.]/;
    er.lastIndex = 0;
    let campo = num;
    if (er.test(campo.value)) {
      campo.value = "";
      alert('[AVISO]: Não utilize virgulas!')
    }
}

function analisar() {
    const n = Number(numero.value)
    if (n.length == 0 || n < 1|| n > 100) {
        window.alert('[AVISO]: Digite um número entre 1 a 100!')
    } else {
        numeromax += 1
        numeros.push(n) // Adiciona um novo número na array
        select.options[select.options.length] = new Option(`Valor ${n} adicionado.`, numeromax);
    }

}

function finalizar() {
    if (numeromax == 0) {
        window.alert('[ERRO]: Digite um valor antes de finalizar!')
    } else {
        const reducer = (previousValue, currentValue) => previousValue + currentValue; // Soma os valores contido dentro da array
        const total = numeros.reduce(reducer); 
        const min = Math.min(...numeros);
        const max = Math.max(...numeros);
        const media = total / numeromax;
        resultado.innerHTML = `Ao todo, temos ${numeromax} números cadastrados.</br>`;
        resultado.innerHTML += `O maior valor informado foi ${max}.</br>`;
        resultado.innerHTML += `O menor valor informado foi ${min}.</br>`;
        resultado.innerHTML += `Somando todos os valores, temos ${total}.</br>`;
        resultado.innerHTML += `A média dos valores digitado é ${media.toFixed(2)}.`;
    }
}
/* A partir do array:  */const arr5 = [1, 2, 3, 4, 5, 6]/* , defina uma variável x que recebe a primeira
posição do vetor e outra variável y que recebe todo restante dos dados. */
const [x, ...y] = arr5;
console.log('Usando operador REST em arrays:')
console.log(x);
console.log(y);

/* Crie uma função que recebe inúmeros parâmetros e retorna a soma de todos eles: */
// function soma...
function soma(a, b, ...c){
    var soma = 0;
    if(c.length>0){
        soma = c.reduce(function(total,next){
            return total + next;
        }); 
    }
    return soma + a + b;
}
console.log('Usando operador REST em parametros:')
console.log(soma(1, 2, 3, 4, 5, 6)); // 21
console.log(soma(1, 2)); // 3



/* 5.2 Spread
A partir do objeto e utilizando o operador spread: */
const usuario5 = {
    nome: 'Diego',
    idade: 23,
    endereco: {
        cidade: 'Rio do Sul',
        uf: 'SC',
        pais: 'Brasil',
    }
};
/* Crie uma variável usuario2 que contenha todos os dados do usuário porém com nome Gabriel. */
/* Crie uma variável usuario3 que contenha todos os dados do usuário porém com cidade Lontras. */
var usuario6 = {...usuario5, nome: 'Gabriel'};
var usuario7 = {...usuario5, endereco: {...usuario5.endereco, cidade: 'Lontras'} };

console.log(usuario6);
console.log(usuario7);
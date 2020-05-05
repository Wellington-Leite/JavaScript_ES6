//REST - pegar o resto das propriedades
const usuario = {
    nome: 'Wellington',
    idade: '27',
    endereco: {
        cidade: 'Bambui',
        uf: 'MG',
    },
};

const {nome, ...resto} = usuario;
console.log(nome);
console.log('Restante do objeto:');
console.log(resto);

//REST em vetores
const arr = [1,2,3,4];
const [a,b, ...c] = arr;
console.log(a);
console.log(b);
console.log(c);

//REST em parametros de funções ex: retornando a soma dos 2 primeiros e o restante
function soma(a, b, ...parms){
    return [a+b, parms];
}
console.log('Rest em funções: ')
console.log(soma(100,20,3,4,5,6,7,8,9));
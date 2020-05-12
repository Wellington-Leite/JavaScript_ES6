//SPREAD - propagar repassando as info de objeto ou array para outra estrutura de dados
const arr1 = [1,2,3];
const arr2 = [4,5,6];

const arr3 = [...arr1, ...arr2];
console.log('SPREAD: ');
console.log(arr3);

//Modificando propriedades
const usuario1 = {
    nome: 'Wellington',
    idade: '27',
    endereco: 'Centro - Bambui'
};
const usuario2 = {...usuario1, nome: 'José' };
console.log(usuario2);
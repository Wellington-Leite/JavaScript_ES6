/* //EXERCICIO 2 
A partir do seguinte vetor e utilizando os métodos de array (map, reduce, filter e find):
 */
const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];

//2.1 usando o map
const newIdades = usuarios.map(function({idade}){
    return idade;
});
console.log(newIdades);

//2.2 usando o filter
const newFuncRocketseat = usuarios.filter(function(user){
    return user.idade > 18 && user.empresa === 'Rocketseat';
});
console.log(newFuncRocketseat);

//2.3 usando find
const newFuncGoogle = usuarios.find(function(user){
    return user.empresa === 'Rocketseat';
});
console.log(newFuncGoogle);

//2.4 unindo operações
console.log('Exercicio 2.4 unindo operações: map e filter');
console.log('Multiplique a idade de todos usuários por 2 e depois realize um filtro nos usuários que possuemno máximo 50 anos');

const newUsuario = usuarios.map(function({nome,idade,empresa}){
    return {nome, idade: idade * 2, empresa};
}).filter(function(user){
    return user.idade <= 50;
});

console.log(newUsuario);
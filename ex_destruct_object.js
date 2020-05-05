/* Desestruturação de objetos no JS ES6 */
const usuario = {
    nome: 'Wellington',
    idade: '27',
    endereco: {
        cidade: 'Bambui',
        uf: 'MG',
    },
};

console.log(usuario);

//Desestruturação na variável
const { nome, idade, endereco: { cidade } } = usuario;

//Desestruturação na função
function mostraNome({nome, idade}){
    console.log(nome, idade);
}
mostraNome(usuario);
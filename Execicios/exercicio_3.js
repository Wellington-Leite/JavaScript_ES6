/* // 3.1 Converter para arrow functions */
const arr = [1, 2, 3, 4, 5];
arr.map(function(item) {
    return item + 10;
}); 

//Com arrow function reduzida
const newArr = arr.map(item => item + 10 );
console.log('Arrow function')
console.log(newArr);

/* // 3.2 */
// Dica: Utilize uma constante pra function
const usuario = { nome: 'Diego', idade: 23 };
function mostraIdade(usuario) {
    return usuario.idade;
}
mostraIdade(usuario);

//Com arrow function retornando objeto
const usuarioArrowFunc = () => usuario.idade;
console.log('arrow function retornando objeto:')
console.log(usuarioArrowFunc());

/* // 3.3 */
// Dica: Utilize uma constante pra function
const nome = "Diego";
const idade = 23;
function mostraUsuario(nome = 'Diego', idade = 18) {
    return { nome, idade };
}
mostraUsuario(nome, idade);
mostraUsuario(nome);

//Com arrow function valores padrão
const arrowNomeIdade = (nome = 'Diego', idade=23) => nome + idade;
console.log('arrow function valores padrão')
console.log(arrowNomeIdade());

// 3.4
const promise = function() {
    return new Promise(function(resolve, reject) {
    return resolve();
    })
   }
   
//Com Arrow Function
const arrowPromise = new Promise( (resolve,reject)=>{ resolve() } );
console.log(arrowPromise);
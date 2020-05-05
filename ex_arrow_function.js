/* Arrow Function */
//arrow function com apenas 1 parametro (item)
const newArr = arr.map(item =>{
    return item * 2;
});
console.log(newArr);

//arrow function com apenas 1 parametro (item) mais reduzida "quando nao tem varias linhas"
const newArr2 = arr.map(item => item * 4 );
console.log(newArr2);

//arrow function retornando objeto
const teste = () => ({nome: "Wellingon"});
console.log(teste());

//Valores padrão na arrow function
const soma = (a=3, b=6) => a+b;

console.log(soma(10));
console.log(soma());
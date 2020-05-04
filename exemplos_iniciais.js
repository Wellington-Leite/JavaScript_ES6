/* Classes */
class TodoList {
    constructor(){
        this.todos = [];
    }

    addTodo(){
        this.todos.push('Novo todo');
        console.log(this.todos);
    }
}

const MinhaLista = new TodoList();

document.getElementById('novotodo').onclick = function(){
    MinhaLista.addTodo();
}

/* Mutação dentro de uma constante */
const usuario = { nome: "Wellington"};
usuario.nome = "Jose";
console.log(usuario);

/* Operações em vetores */
const arr = [1,2,3,4,5,6,7,8,9,10];

//map
const newArr = arr.map(function(item, index){
    return item + index;
});
console.log(newArr);

//reduce
const sum = arr.reduce(function(total, next){
    return total + next;
});
console.log(sum);

//filter
const filter = arr.filter(function(item){
    return item % 2 === 0;
});
console.log(filter);

//find
const find = arr.find(function(item){
    return item === 2;
});
console.log(find);

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
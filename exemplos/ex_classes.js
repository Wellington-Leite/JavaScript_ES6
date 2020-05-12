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
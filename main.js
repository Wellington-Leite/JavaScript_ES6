//Colar cada exemplo aqui...

class Usuario {    
    constructor(email, senha){
        this.email = email;
        this.senha = senha;
    }

    isAdmin(){
        if(this.admin == true){
            return 'Administrador';
        }
        return 'Usuario';
    }
}

class Admin extends Usuario{
    constructor(){
        super();
        this.admin = true;
    }

}

const User1 = new Usuario('emai@teste.com', '123');
const Admin1 = new Admin('emai@teste.com', '123');

console.log(User1.isAdmin());
console.log(Admin1.isAdmin());


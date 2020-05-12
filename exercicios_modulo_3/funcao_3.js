//Função 3
import axios from 'axios';

class Github {
    static getRepositories(repo) {
    axios.get(`https://api.github.com/repos/${repo}`)
    .then(response => {
    console.log(response.data);
    })
    .catch(err => {
    console.log('Repositório não existe');
})
}
}
Github.getRepositories('rocketseat/rocketseat.com.br');
Github.getRepositories('rocketseat/dslkvmskv');

//Resposta função 3:
class Github2{
    static async getRepositories2(repo){
        try {
            const response = await axios.get(`https://github.com/${repo}`);
            console.log('Acessando repositório');
            console.log(response);
        } catch (error) {
            console.log('ERRO');
            console.warn(error);
        }
    }
}
Github2.getRepositories2('Wellington-Leite/JavaScript_ES6');
Github2.getRepositories2('Wellington-Leite/sdfsfsfsf'); 
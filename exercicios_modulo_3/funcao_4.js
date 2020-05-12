import axios from 'axios';
//Função 4
const buscaUsuario = usuario => {
    axios.get(`https://api.github.com/users/${usuario}`)
    .then(response => {
    console.log(response.data);
    })
    .catch(err => {
    console.log('Usuário não existe');
    });
   }
   buscaUsuario('diego3g');

//Resposta:
const buscaUsuario2 = async (user) =>{
    try {
        const response = await axios.get(`https://api.github.com/users/${user}`);
        console.log(response.data);
    } catch (error) {
        console.warn('Erro ao buscar user: ' + error);
    }
}
buscaUsuario2('Wellington-Leite');
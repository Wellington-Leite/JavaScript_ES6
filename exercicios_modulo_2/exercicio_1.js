/* Crie um arquivo chamado functions.js com o seguinte conteúdo: */
/* export const idade = 23;
export default class Usuario {
 static info() {
 console.log('Apenas teste');
 }
} */

//Resposta: copy code for man.js
import Usuario, {idade as IdadeUsuario} from './function';

alert(IdadeUsuario);
console.log('Classe usuario');
Usuario.info();
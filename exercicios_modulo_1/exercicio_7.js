/* Utilize a sintaxe curta de objetos (Object Short Syntax) no seguinte objeto: */
const nome88 = 'Diego';
const idade88 = 23;
const usuario88 = {
 nome88: nome88,
 idade88: idade88,
 cidade88: 'Rio do Sul',
};

console.log(usuario88);

const usuario99 = {
    nome88,
    idade88,
    cidade99: 'São Roque de Minas',
};

console.log(usuario99);
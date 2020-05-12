/* 4.1 Desestruturação simples */
const empresa1 = {
    name: 'Rocketseat',
    address: {
        city: 'Rio do Sul',
        uf: 'SC',
    }
};
/* Utilize a desestruturação para transformar as propriedades name, city e uf em variáveis, no
fim deve ser possível fazer o seguinte: */
const { name, address: {city, uf} } = empresa1;
console.log(name); // Rocketseat
console.log(city); // Rio do Sul
console.log(uf); // SC

/*
/* 4.2 Desestruturação em parâmetros */
function mostraInfo(usuario) {
    return `${usuario.name} tem ${usuario.idade} anos.`;
   }
   mostraInfo({ name: 'Diego', idade: 23 })
/*    Utilize a desestruturação nos parâmetros da função para buscar o name e idade do usuário
separadamente e a função poder retornar apenas: */
//return `${name} tem ${idade} anos.`;

function mostraInfo2({name,idade}) {
    return `${name} tem ${idade} anos.`;
   }
   console.log(mostraInfo2({ name: 'Diego', idade: 23 }));

// Funão delay aciona o .then após 1s
const delay = () => new Promise(resolve => setTimeout(resolve, 1000));
function umPorSegundo() {
    delay().then(() => {
        console.log('1s');
        delay().then(() => {
            console.log('2s');
            delay().then(() => {
                console.log('3s');
            });
        })
    });
}
umPorSegundo();

//Resposta: 
const delay2 = () => new Promise((resolve, reject) => setTimeout(() => 
resolve(' segundos'), 1000));

const umPorSegundo2 = async () =>{
    for (i = 0; i < 3; i++){
        console.log(i + await delay2());
    }
}

umPorSegundo2();
let numeros = [3,2,11,20,8,7];
let novosNumeros=[];
numeros.forEach(item =>{
    if(item % 2 !=0){
        novosNumeros.push(item*2);
    }else{
        novosNumeros.push(item);
    }

})
console.log('Novos numeros com foreach :  '+ novosNumeros);
console.log(numeros)

//outra forma de fazer

novosNumeros = numeros.map((item)=>(item % 2 +1) * item);
console.log('Novos Numeros com Arrow Function:  ' +novosNumeros);


// utilizando o spread operator [...]



//função normal
let eitaNumeros = [10,30];
function SomaDoisNumeros(n1, n2){
    return n1 + n2;
}
//poderia fazer assim

console.log(SomaDoisNumeros(eitaNumeros[0],eitaNumeros[1]));
// ou poderia utilizar a técnica spread com ES¨6
console.log(SomaDoisNumeros(...eitaNumeros));


class Aluno{
    constructor(matricula, nome){
        this.matricula = matricula,
        this.nome = nome
    }

}
class Prova{
    constructor(aluno,nota){
        this.aluno = aluno;
        this.nota = nota
    }
}

var avaliacoes = [
    new Prova(new Aluno(1, 'Luana'), 8),
    new Prova(new Aluno(2, 'Cássio'), 6),
    new Prova(new Aluno(3, 'Barney'), 9),
    new Prova(new Aluno(4, 'Bira'), 5)
];

var aprovados = avaliacoes
    .filter((prova) => prova.nota >= 7)
    .map((prova) => prova.aluno.nome);

console.log(aprovados);

console.log(avaliacoes);
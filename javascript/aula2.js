function nomeFuncao(params) {}

const funcao = nomeFuncao();

const array = ["String", 123, true, "safafwadsd", funcao];

array[0] = "Nao quero string";
console.log(array);

const numeros = [1, 2, 3, 4];
numeros.push(5);
console.log(numeros);

//numeros.pop()
//console.log(numeros);

numeros.map((item) => {
  console.log(item);
});

const testeNumeros = numeros.filter((item) => item != 2);
console.log(testeNumeros);

//Definição de objeto
const pessoa = {
  nome: "João",
  idade: 25,
  profissao: "Arquiteto",
  saudacao: function () {
    console.log("Oi Mundo");
  },
};

//console.log(pessoa);
//console.log(pessoa.nome)
//console.log(pessoa['nome'])

//pessoa.nome = "Adriana";
//console.log(pessoa);

//delete pessoa.profissao;
//console.log(pessoa);

//pessoa.saudacao()

//for(let i=0;i<5; i++){
//  if(i==2){
//    continue
//}
//console.log(i);
//if(i==3){
//  break
//}
//}

//let i=0
//while(i<5){
//console.log(i);
//  i++
//}
//let i = 0

//do{
//  console.log(i);
//i++
//}while(i<5)

const pessoas = [
  {
    nome: "Euclides",
    idade: 22,
    profissao: "Analista de Sistemas",
  },

  {
    nome: "Linton",
    idade: 35,
    profissao: "Analista de Sistemas",
  },

  {
    nome: "Adriana",
    idade: 20,
    profissao: "Analista de Sistemas",
  },

  {
    nome: "Francisco",
    idade: 28,
    profissao: "Analista de Sistemas",
  },
];

//for(let contador=0;contador<pessoas.length;contador++){
//if(pessoas[contador].idade>22){
//    console.log(pessoas[contador]);
//  }
//}

//pessoas.map((pessoa) => {
//  if(pessoa.idade>22){
//    console.log(pessoa);
//}
//})

//pessoas.filter((pessoa) => pessoa.idade> 22);

//console.log(testePessoa);//for(let contador=0;contador<pessoas.length;contador++){
//if(pessoas[contador].idade>22){
//    console.log(pessoas[contador]);
//  }
//}

for (let contador = 0; contador < pessoas.length; contador++) {
  if (pessoas[contador].nome != "Euclides") {
    console.log(pessoas[contador]);
  }
}

//const { nome, idade, soma, areaCirculo, PI } = require("./moduloA");
//console.log(nome);
//console.log(idade);

//console.log(soma(2, 2));

//console.log(areaCirculo(2));
//console.log(PI);

const moduloA = require("./moduloA");

const times = moduloA.map((item) => console.log(item.time));

console.log(times);
times.forEach((time) => {
  console.log(time);
});

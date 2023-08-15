// // let msgValue;
// // msgValue = Number(
// //   prompt(`escolha uma das 3 opcoes:
// // 1-cadastrar item
// // 2- ver itens cadastrados
// // 3- encerrar aplicacao`)
// // );

// // function getValue(msgValue) {

// //   let index = 0;

// //   let items = [];

// //   while(msgValue != 3) {
// //     if (msgValue === 1) {
// //       items[index] = prompt("cadastrar um novo item");
// //       index++;
// // //     } else if (msgValue === 2) {
// // //       if (items.length === 0) {
// // //         alert("not found itens");
// // //       } else {
// // //         alert(items);
// // //       }
// // //     } else {
// // //       alert("bye");
// // //     }
// // //   }
// // // }

// // // getValue(msgValue)

// // let option;
// // let items = [];

// // while (option != 3) {
// //   option = Number(
// //     prompt(`
// //     Olá usuário! Digite o número da opção desejada

// //     1. Cadastrar um item na lista
// //     2. Mostrar itens cadastrados
// //     3. Sair do programa
// //   `)
// //   );

// //   switch (option) {
// //     case 1:
// //       let item = prompt("Digite o nome do item");
// //       items.push(item);
// //       break;

// //     case 2:
// //       if (items.length == 0) {
// //         alert("Não existem itens cadastrados");
// //       } else {
// //         alert(items);
// //       }
// //       break;
// //     case 3:
// //       alert("bye");
// //     break;

// //     default:
// //       alert("Opção inválida");
// //   }
// // }
// // console.log(option, items);

// // class person extends Object {
// //   constructor(name, age, height,) {
// //     this.name = name;
// //     this.age = age;
// //     this.height = height;
// //   }
// // }

// // let person1 = new person("Maria", 25, 1.80);

// // console.log(person1);

// // alert(listaDePacientes[0].nome)

// // let patientsNames = []

// // for(let listaDePaciente in listaDePacientes) {
// //   patientsNames.push(`${listaDePaciente.nome} tem  ${listaDePaciente.idade} anos, pesa ${listaDePaciente.altura} kilos.`)
// // }

// // // for(let i = 1; i < listaDePacientes.length; i++) {
// // //    patientsNames[i].nome = listaDePacientes[index].name
// // // }

// // alert(listaDePacientes)

// /* 
//   Dada uma lista de pacientes, descubra o IMC de cada paciente e imprima

//   "Paciente X possui o IMC de: Y"

//   Onde X é o nome do paciente e Y é o IMC desse paciente

//   Crie uma função para fazer o cálculo de IMC
// */

// /* peso / (altura * altura) */

// const listaDePacientes = [
//   {
//     name: "Luiz",
//     age: 20,
//     weight: 100,
//     height: 190,
//   },
//   {
//     name: "Alexandra",
//     age: 27,
//     weight: 70,
//     height: 170,
//   },
//   {
//     name: "Carlos",
//     age: 42,
//     weight: 90,
//     height: 180,
//   },
// ];

// function printPacientsIMC(listaDePacientes) {
//   return `Paciente ${listaDePacientes.name} possui o IMC de 
//         ${
//           ((listaDePacientes.weight / 100) ** 2)(2).toFixed(2)}
//         }
// `;
// }

// for (let listaDePaciente in listaDePacientes) {
//   alert(printPacientsIMC(listaDePaciente));
// }

// // let msgName = prompt("type your name:")

// // function IMCcalculator(listaDePacientes) {
// //     let i = 0;

// //     while (i < listaDePacientes.length) {
// //       let imc = listaDePacientes[i].weight / listaDePacientes[i].length;
// //       alert(`${listaDePacientes[i].name} tem ${imc}`)
// // }
// // }

// // IMCcalculator(listaDePacientes)


// function math() {

// let firtValue = prompt("Digite o primeiro numero de 1 a 10:")
// let secondValue = prompt("Digtite um segundo numero de 1 a 10:")

// if (firtValue === secondValue) {

//   alert("Os valores inseridos sao iguais, sem problema")

//   const subresult =  firtValue - secondValue   

//   if(subresult < 0 ) {
//     alert("menor do que zero infeliz")
//   }
//   alert(subresult)
 
//   const xresult = firtValue * secondValue
//   alert(xresult)
 
//   const divisaoresult = firtValue / secondValue
//    alert(divisaoresult)
// }



// }


// math()





// Bora praticar e rever tudo o que foi ensinado na aula? **💜**

// Nesse desafio você irá criar uma lista de **estudantes** e, 
// cada estudante dentro dessa lista, deverá conter os seguintes dados:

// - nome;
// - nota da primeira prova;
// - nota da segunda prova.

// Depois de criada a lista:

// - [ ]  Crie uma **função** que irá calcular a média das notas de cada aluno;
// - [ ]  Supondo que a média, para esse concurso é **7**, verifique **se** cada 
// aluno obteve sucesso ou não em entrar no concurso e mostre uma mensagem na tela.


const students = [
  {
    nome: "luiz",
    primeiraNota: 6,
    secundaNota: 8
  },
  {
    nome: "birobiro",
    primeiraNota: 10,
    secundaNota: 7,
  },
  {
    nome: "tevin",
    primeiraNota: 5,
    secundaNota: 7,
  },
  {
    nome: "clovin",
    primeiraNota: 6,
    secundaNota: 6
  }
]


function math() {
students.forEach((student) => {
  let media = (student.primeiraNota + student.secundaNota)/2

    if (result < 7) {
      alert(`O aluno(a) ${student.nome} foi reprovado(a). \n Nota Final ${media.toFixed(2)}`)
    }
    return alert(`O aluno(a) ${student.nome} foi reprovado(a) \n Nota Final ${media.toFixed(2)}`)
  })
}
math();
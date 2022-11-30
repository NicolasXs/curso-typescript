// - Parâmetros com tipos

function somar(num: number, name: string) {
  return `Bem vinda ${name}. Seu número é ${num}`;
}

console.log(somar(2, "Nath"));

function calcularIdade(name: string, anoNascimento: number): string {
  const idade: number = 2022 - anoNascimento;
  return `Seu nome é ${name}. Você tem ${idade} anos`;
}

console.log(calcularIdade("Nathaly", 1990));

// - Interface com Types

interface ICalcularIdade {
  name2: string;
  anoNascimento2: number;
  profissao?: string;
}

function calcularIdade2({
  name2,
  anoNascimento2,
  profissao,
}: ICalcularIdade): string {
  const idade: number = 2022 - anoNascimento2;
  if (profissao) {
    return `Seu nome é ${name2}. Você tem ${idade} anos e sua profissão é ${profissao}`;
  }
  return `Seu nome é ${name2}. Você tem ${idade} anos.`;
}

const name2 = "Nathaly";
const anoNascimento2 = 1990;
const profissao = "Desenvolvedora";

console.log(calcularIdade2({ name2, anoNascimento2}));

console.log(
  calcularIdade2({
    name2: "Nathaly",
    anoNascimento2: 2000,
    profissao: "Desenvolvedora",
  })
);



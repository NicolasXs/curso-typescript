// Vamos criar o DioBank

// Criar uma conta

interface IConta {
  nomeTitular: string;
  saldo?: number;
}

class Conta {
  private nomeTitular: string;
  private saldo: number;
  private ativa: boolean = true;

  constructor({ nomeTitular, saldo = 0 }: IConta) {
    (this.nomeTitular = nomeTitular), (this.saldo = saldo);
    console.log(`${this.nomeTitular}, bem vindo ao DIO Bank`);
  }

  meuSaldo = (): number => this.saldo;

  // Depositar na conta

  depositar = (valor: number): void | boolean => {
    if (!this.ativa) {
      console.log("Conta desativada, impossível realizar depósito");
      return this.ativa;
    }
    this.saldo += valor;
    console.log(`Você depositou ${valor}. Seu novo saldo é ${this.saldo}`);
  };

  // Sacar da conta

  sacar = (valor: number): boolean => {
    if (!this.ativa) {
      console.log("Conta desativa, impossível realizar saque");
      return this.ativa;
    }
    if (valor <= this.saldo) {
      this.saldo -= valor;
      console.log(`Você sacou ${valor}. Seu novo saldo é ${this.saldo}`);
      return this.ativa;
    }
    console.log(
      `Saldo insuficiente. Você que sacar ${valor}. Seu saldo autual é ${this.saldo}`
    );
    return this.ativa;
  };

  // Encerrar a conta

  cancelarConta = () => {
    if (this.saldo === 0) {
      this.ativa = false;
      console.log("Conta desativada");
    }
    console.log(
      `Impossível desativar a conta de ${this.nomeTitular}. Conta com pendência!`
    );
  };
}

const contaA: Conta = new Conta({ nomeTitular: "Nath" });

console.log("Saldo atual", contaA.meuSaldo());
contaA.depositar(100);

contaA.sacar(120);

console.log("----------------------------------------------------------------");

const contaB: Conta = new Conta({ nomeTitular: "Pedro", saldo: 10 });
contaB.sacar(10);

contaB.cancelarConta();

contaB.depositar(10);

console.log(contaB);

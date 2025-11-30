class ContaBancaria {
  #saldo; 

  constructor() {
    this.#saldo = 0;
  }

  depositar(valor) {
    if (valor > 0) {
      this.#saldo += valor;
    }
  }

  sacar(valor) {
    if (valor > 0 && valor <= this.#saldo) {
      this.#saldo -= valor;
    }
  }

  consultarSaldo() {
    return this.#saldo;
  }
}


const minhaConta = new ContaBancaria();

minhaConta.depositar(200);
minhaConta.sacar(50);

console.log("Saldo atual:", minhaConta.consultarSaldo());





class Usuario {
  constructor(nome, email) {
    this.nome = nome;
    this.email = email;
  }

  exibirInfo() {
    console.log(`Nome: ${this.nome}, Email: ${this.email}`);
  }
}

class Administrador extends Usuario {
  constructor(nome, email, nivelAcesso) {
    super(nome, email);
    this.nivelAcesso = nivelAcesso;
  }

  exibirInfo() {
    super.exibirInfo();
    console.log(`Nível de acesso: ${this.nivelAcesso}`);
  }
}

const user = new Usuario("Lina", "lina@mail.com");
const admin = new Administrador("Andre", "andre@mail.com", "root");

user.exibirInfo();
admin.exibirInfo();

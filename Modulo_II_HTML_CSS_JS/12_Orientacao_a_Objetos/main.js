class contaBancaria {
    constructor(agencia, numero, tipo) {
        this.agencia = agencia
        this.numero = numero
        this._tipo = tipo
        this._saldo = 0
    }

    get getSaldo() {
        return this._saldo
    }

    set setSaldo(novoSaldo) {
        this._saldo = novoSaldo
    }

    sacar(quantia) {
        if (quantia > this.saldo) {
            return "Saldo insuficiente para realizar esta operação!"
        } else {
            this._saldo -= quantia
            return `Você sacou R$${quantia}.`
        }
       
    }

    depositar(quantia) {
        this._saldo += quantia
        return `Você depositou R$${quantia}.`
    }
}


class contaCorrente extends contaBancaria {
    constructor(agencia, numero, cartaoCredito) {
        super(agencia, numero)

        this._tipo = "Conta Corrente"
        this._cartaoCredito = cartaoCredito
    }

    get cartaoCredito() {
        return this._cartaoCredito
    }

    set cartaoCredito(cartaoCredito) {
        this._cartaoCredito = cartaoCredito
    }
}

class contaPoupanca extends contaBancaria {
    constructor(agencia, numero) {
        super(agencia, numero)
        this._tipo = "Conta Poupança"
    }
}

class contaUniversitaria extends contaBancaria {
    constructor(agencia, numero){
        super(agencia, numero) 
        this._tipo = "Conta Universitária"
    }
      

    get tipo() {
        return this._tipo
    }

    sacar(quantia) {
        if (quantia < 500) {
            this._saldo -= quantia
        } else {
            console.log("Operação Negada!\nImpossivel realizar saques superiores a R$500 com uma conta universitária!")
        }
    }
}
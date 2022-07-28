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

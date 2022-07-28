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
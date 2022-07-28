class contaPoupanca extends contaBancaria {
    constructor(agencia, numero) {
        super(agencia, numero)
        this._tipo = "Conta Poupança"
    }
}
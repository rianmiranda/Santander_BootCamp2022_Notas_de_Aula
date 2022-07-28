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
# Projeto de banco digital desenvolvido com Java e Programação orientada a objetos:

Este projeto conta com as seguintes classes:

Bank: Banco;

Client: Cliente;

Account: Conta (classe abstrata)

CheckingAccount: Conta corrente (filha da classe conta)

SavingsAccount: Conta poupança (filha da classe conta)

Além de apresentar os métodos withdraw() (sacar), deposit() (depositar), transfer() (transferir) e showReceipt() (extrato), demonstrados pelo instrutor durante a orientação, este projeto ainda implementa dois métodos adicionais:

## setInvestorProfile(): 

Tem como objetivo e declaração do perfil de investidor do cliente. Com base nesta informação, o rodapé do extrato convida o cliente a acessar o site do Banco Santander e conferir as opções de investimento que se encaixam no seu perfil.

Caso o método não seja utilizado, o cliente não terá um perfil de investidor definido, e nenhuma mensagem será exibida no rodapé do extrato bancário.

### Veja um exemplo de aplicação do método setInvestorProfile():

Selecione uma opção de perfil do investidor: 

[0] Conservador

[1] Moderado

[2] Arrojado

Valor selecionado: 1

Como neste caso a opção 1 (Moderado) foi selecionada, o extrato será apresentado da seguinte maneira:

=========== Extrato da Conta ===========

Cliente: Rian Miranda

Conta: 0

Agencia: 2

Saldo ----> R$ 1000.00

Confira nossas opções de investimento 

para investidores com perfil Moderado em

.
www.santander.com.br

====================================

## earningsSimulator(): 

Este é um método exclusivo da conta poupança. Ao utilizá-lo o usuário precisa informar as seguintes informações ao sistema:

1.	Aporte inicial;
2.	Aporte anual;
3.	Período que pretende deixar o dinheiro investido;

A partir dessas informações, será realizado o cálculo do Valor Futuro dos investimentos realizados pelo cliente ao longo dos anos. Esses valores são representados ano a ano, desde o ano inicial até o ano final do período selecionado pelo cliente. 
  
Além disso, a função ainda compara o Valor Futuro ao final do último ano de investimento, com a soma dos aportes realizados ao longo dos anos, trazidos a valor presente. O resultado desta comparação é a rentabilidade do investimento ao final do período analisado, que é apresentada na última linha do relatório impresso pela função.

Por fim, é importante destacar que a classe SavingsAccount conta com o atributo double interestRate, que representa a taxa de juro obtida pelo cliente ao investir na poupança. Por padrão, o valor desse atributo foi definido como 13,75%, replicando a taxa Selic observada 08/08/22, data de entrega deste projeto.

### Veja um exemplo de aplicação do método earningsSimulator():

Qual será o valor de seu aporte inicial?
1000

Qual será o valor do seu aporte anual?
1000

Por quantos anos você pretende deixar o seu dinheiro investido na poupança? 
5

=========================== Resultado da Simulação ===========================

Ano 2022: Saldo ----> R$ 1000.00

Ano 2023: Saldo ----> R$ 2137.50

Ano 2024: Saldo ----> R$ 3431.41

Ano 2025: Saldo ----> R$ 4903.22

Ano 2026: Saldo ----> R$ 6577.42

Ano 2027: Saldo ----> R$ 8481.81

Rentabilidade ao final do período: 90.44%

=======================================================================
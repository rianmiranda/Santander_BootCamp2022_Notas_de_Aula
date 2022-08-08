package desafiobanco;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public abstract class Account implements BankInterface{
    protected Client accountClient;
    protected int agency;
    protected Integer accountNumber;
    protected double balance;
    protected Scanner keyboard = new Scanner(System.in);

    protected static List<Account> listOfAccounts = new ArrayList<>();

    @Override
    public void deposit() {
        System.out.print("Quanto voce deseja depositar? R$");
        double depositValue = keyboard.nextDouble();
        setBalance(getBalance() + depositValue);
        System.out.println("Deposito realizado com sucesso!");
    }

    @Override
    public void withdraw() {
        System.out.print("Quanto voce deseja sacar? R$");
        double withdrawValue = keyboard.nextDouble();
        setBalance(getBalance() - withdrawValue);
        System.out.println("Saque realizado com sucesso!");
    }

    @Override
    public void transfer() {
        System.out.println("Informe o numero da conta de destino: ");
        Integer destinationAccount = keyboard.nextInt();
        int count = 0;

        for (Account account: listOfAccounts) {
            if (account.accountNumber == destinationAccount) {
                System.out.println("Insira o valor da transferencia: ");
                double transferValue = keyboard.nextDouble();
                this.setBalance(this.getBalance() - transferValue);
                account.setBalance(account.getBalance() + transferValue);
            } else {
                count ++;
            }
        }

        if(count == listOfAccounts.size()) {
            System.out.println("Conta de destino nao encontrada." +
                    "\n O deposito nao foi realizado.");
        }
    }

    @Override
    public void invest() {

    }

    @Override
    public void showReceipt() {
        System.out.println("=========== Extrato da Conta ===========");
        System.out.println("Cliente: " + this.getAccountClient().getName());
        System.out.println("Conta: " + this.accountNumber);
        System.out.println("Agencia: " + this.getAgency());
        System.out.println(String.format("Saldo ----> R$ %.2f", this.getBalance()));
        if(this.getAccountClient().isInvestor() &&
                this.getAccountClient().getClientInvestorProfile() != null) {
            System.out.println("Confira nossas opcoes de investimento " +
                    "\npara investidores com perfil " +
                    this.accountClient.getClientInvestorProfile() +
                    "\nem www.santander.com.br.");
        }
        System.out.println("========================================");

    }

    //Metodos Especiais
    public Account(Client accountClient, int agency, Integer accountNumber, double balance) {
        this.accountClient = accountClient;
        this.agency = agency;
        this.accountNumber = accountNumber;
        this.balance = balance;
        listOfAccounts.add(this);
    }

    public Client getAccountClient() {
        return accountClient;
    }

    public void setAccountClient(Client accountClient) {
        this.accountClient = accountClient;
    }

    public int getAgency() {
        return agency;
    }

    public void setAgency(int agency) {
        this.agency = agency;
    }

    public double getBalance() {
        return balance;
    }

    public void setBalance(double balance) {
        this.balance = balance;
    }

    public int getAccountNumber() {
        return accountNumber;
    }

    public void setAccountNumber(int accountNumber) {
        this.accountNumber = accountNumber;
    }

    @Override
    public String toString() {
        return "Account{" +
                "accountClient=" + accountClient +
                ", agency=" + agency +
                ", accountNumber=" + accountNumber +
                ", balance=" + balance +
                ", keyboard=" + keyboard +
                '}';
    }
}

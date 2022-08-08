package desafiobanco;

public class Main {
    public static void main(String[] args) {
        Bank myBank = new Bank();

        Client client0 = new Client("Rian Miranda", 29, true);
        Client client1 = new Client("Kevin Buckzinsky", 2, true);
        Client client2 = new Client("Eliane Miranda", 54, false);

        CheckingAccount checkingAccountClient0 =
                new CheckingAccount(
                        client0,
                        2,
                        Account.listOfAccounts.size(),
                        10000);
        SavingsAccount savingsAccountClient1 =
                new SavingsAccount(
                        client1,
                        1,
                        Account.listOfAccounts.size(),
                        200);
        CheckingAccount checkingAccountClient2 =
                new CheckingAccount(
                        client2,
                        2,
                        Account.listOfAccounts.size(),
                        50000);

//        savingsAccountClient1.deposit();
//        checkingAccountClient0.withdraw();
//        checkingAccountClient0.transfer();
//
        client0.setClientInvestorProfile();

        checkingAccountClient0.showReceipt();

        savingsAccountClient1.earningsSimulator();

    }
}

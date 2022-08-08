package desafiobanco;

public class CheckingAccount extends Account {
    private double maintenanceTax = 10;

    public CheckingAccount(Client accountClient, int agency, Integer accountNumber, double balance) {
        super(accountClient, agency, accountNumber, balance);
        this.maintenanceTax = maintenanceTax;
    }

}

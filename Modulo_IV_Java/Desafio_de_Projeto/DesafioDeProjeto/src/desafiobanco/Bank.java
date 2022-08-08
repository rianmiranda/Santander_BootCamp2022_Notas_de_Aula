package desafiobanco;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import static desafiobanco.Account.listOfAccounts;

public class Bank {
    private double totalMoneyUnderCustody;


    //Metodos Especiais
    public double getTotalMoneyUnderCustody() {
        return totalMoneyUnderCustody;
    }

    public void setTotalMoneyUnderCustody() {
        double totalMoneyUnderCustody = 0;
        for (Account account : listOfAccounts) {
            totalMoneyUnderCustody += account.balance;
        }
    }

    @Override
    public String toString() {
        return "Bank{" +
                "totalMoneyUnderCustody: R$" + totalMoneyUnderCustody +
                ", listOfAccounts: " + listOfAccounts +
                '}';
    }
}

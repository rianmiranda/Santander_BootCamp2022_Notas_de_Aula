package desafiobanco;

import java.sql.SQLOutput;
import java.time.Year;

public class SavingsAccount extends Account {
    private double interestRate = 0.1375;

    public SavingsAccount(Client accountClient, int agency, Integer accountNumber, double balance) {
        super(accountClient, agency, accountNumber, balance);
        this.interestRate = interestRate;
    }

    //Metodos Publicos
    public void earningsSimulator() {
        System.out.println("Qual sera o valor de seu aporte inicial?");
        double presentValue = keyboard.nextDouble();
        System.out.println("Qual sera o valor do seu aporte anual?");
        double annualValue = keyboard.nextDouble();
        System.out.println("Por quantos anos voce pretende deixar o seu dinheiro investido na poupanca? ");
        int numberOfYears = keyboard.nextInt();

//        source: https://www.pinterest.com/pin/annuity-formula--750060512933216702/

        System.out.println("=========================== Resultado da Simulacao ===========================");

        int currentYear = Year.now().getValue();
        double futureValue;

        for(int count = 0; count < numberOfYears + 1; count++) {
            futureValue = presentValue * Math.pow((1 + interestRate), count) +
                    annualValue * ((Math.pow(1 + interestRate, count) - 1) / interestRate);
            System.out.println("Ano " + (currentYear + count ) + String.format(": Saldo ----> R$ %.2f", futureValue) );
        };

        futureValue = presentValue * Math.pow((1 + interestRate), numberOfYears) +
                annualValue * ((Math.pow(1 + interestRate, numberOfYears) - 1) / interestRate);

        //Este loop for() tem o objetivo de trazer o valor anual (annualValue) a valor presente,
        // possibilitando a sua soma com o aporte inicial (presentValue), já que ambos preecisam
        // estar na mesma base temporal para que a soma seja válida.
        double anualToPresent = 0;
        for(int year = 1; year < numberOfYears + 1; year++) {
            anualToPresent += annualValue /Math.pow(1 + interestRate, year);
        }

        //Compara o valor futuro do investimento ao final ultimo ano do investimento,
//      //com os valores aportados trazidos a valor presente no ano inicial.
        System.out.println(String.format("Rentabilidade ao final do periodo: %.2f",
                ((futureValue / (presentValue + anualToPresent) - 1) * 100)) + "%");

        System.out.println("==========================================================================");
    }
}

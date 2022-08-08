package desafiobanco;

import java.util.Scanner;

public class Client {
    private String name;
    private String[] possibleInvestorProfiles = {"Conservador", "Moderado", "Arrojado"};
    private String clientInvestorProfile;
    private int age;
    private boolean investor;


    //Metodos Especiais
    public Client(String name, int age, boolean investor) {
        this.name = name;
        this.age = age;
        this.investor = investor;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public boolean isInvestor() {
        return investor;
    }

    public void setInvestor(boolean investor) {
        this.investor = investor;
    }

    public String[] getPossibleInvestorProfiles() {
        return possibleInvestorProfiles;
    }

    public String getClientInvestorProfile() {
        return clientInvestorProfile;
    }

    public void setClientInvestorProfile() {
        int option;
        Scanner keyboard = new Scanner(System.in);
        if (isInvestor() == true) {
            System.out.println("Selecione uma opcao de perfil do investidor: " +
                    "\n[0] Conservador" +
                    "\n[1] Moderado" +
                    "\n[2] Arrojado");

            do {
                option = keyboard.nextInt();

                if(option < 0 || option > 2) {
                    System.out.println("Opcao invalida! Selecione uma opcao entre 0 e 2.");
                }
                if (option == 2 && this.getAge() < 18) {
                    System.out.println("Voce tem menos de 18 anos e nao pode ser um investidor Arrojado em nosso banco. Selecione outro perfil.");
                }
            } while((option < 0 || option > 2) ^ (option == 2 && this.getAge() < 18));

            this.clientInvestorProfile = possibleInvestorProfiles[option];

        } else {
            System.out.println("Atualmente o cliente ainda nao e investidor. " +
                    "\nImpossivel definir o seu perfil.");
        }

    }
}

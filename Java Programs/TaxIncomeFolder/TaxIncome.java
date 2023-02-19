package TaxIncomeFolder;

public class TaxIncome {
    public static void main(String[] args) {
        TaxIncomeMethods taxes = new TaxIncomeMethods();

        taxes.setInputLabels();
        taxes.setInputFields();
        taxes.setOutputLabels();
        taxes.setOutputFields();
        taxes.setTaxButtons();
        taxes.setTaxFrame();
    }
}

package TaxIncomeFolder;

import javax.swing.*;
import javax.swing.border.Border;
import java.util.ArrayList;
import java.awt.event.*;
import java.awt.*;

public class TaxIncomeMethods implements ActionListener {
    ArrayList<JLabel> inputLabels = new ArrayList<>();
    ArrayList<JTextField> inputFields = new ArrayList<>();
    ArrayList<JLabel> outputLabels = new ArrayList<>();
    ArrayList<JTextField> outputFields = new ArrayList<>();
    JFrame taxFrame = new JFrame("Taxes");
    JLabel inputLabel;
    JLabel outputLabel;
    JTextField inputField;
    JTextField outputField;
    JFrame grossErrorFrame = new JFrame("Gross Income Error");
    JFrame exemptionErrorFrame = new JFrame("Exemption Error");
    JFrame marriageErrorFrame = new JFrame("Marriage Status Error");
    JButton calc = new JButton("Calculate");
    Border inputBorder = BorderFactory.createLineBorder(Color.green, 5);
    Border outputBorder = BorderFactory.createLineBorder(Color.red, 5);
    Border buttonBorder = BorderFactory.createLineBorder(Color.cyan, 5, true);
    Font myFont = new Font("Times New Roman", Font.PLAIN, 20);

    int a, b, c, d;

    public void setTaxFrame() {
        taxFrame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        taxFrame.setSize(750, 650);
        taxFrame.setLayout(null);

        taxFrame.setVisible(true);
    }

    public void setInputLabels() {
        for (a = 0; a < 3; a++) {
            inputLabel = new JLabel();
            inputLabels.add(inputLabel);
            inputLabels.get(a).setOpaque(true);
            inputLabels.get(a).setBorder(inputBorder);
            inputLabels.get(a).setFont(myFont);
            inputLabels.get(a).setHorizontalAlignment(JLabel.CENTER);
            taxFrame.add(inputLabels.get(a));
        }
        inputLabels.get(0).setText("Filing Status");
        inputLabels.get(0).setBounds(175, 0, 125, 75);

        inputLabels.get(1).setText("Gross Income");
        inputLabels.get(1).setBounds(300, 0, 125, 75);

        inputLabels.get(2).setText("Exemptions");
        inputLabels.get(2).setBounds(425, 0, 125, 75);
    }

    public void setInputFields() {
        for (b = 0; b < 3; b++) {
            inputField = new JTextField();
            inputFields.add(inputField);
            inputFields.get(b).setOpaque(true);
            inputFields.get(b).setBorder(inputBorder);
            inputFields.get(b).setFont(myFont);
            inputFields.get(b).setHorizontalAlignment(JTextField.CENTER);
            taxFrame.add(inputFields.get(b));
        }
        inputFields.get(0).setBounds(175, 75, 125, 75);
        inputFields.get(1).setBounds(300, 75, 125, 75);
        inputFields.get(2).setBounds(425, 75, 125, 75);
    }

    public void setOutputLabels() {
        for (c = 0; c < 3; c++) {
            outputLabel = new JLabel();
            outputLabels.add(outputLabel);
            outputLabels.get(c).setOpaque(true);
            outputLabels.get(c).setBorder(outputBorder);
            outputLabels.get(c).setFont(myFont);
            outputLabels.get(c).setHorizontalAlignment(JLabel.CENTER);
            taxFrame.add(outputLabels.get(c));
        }
        outputLabels.get(0).setText("Tax Income");
        outputLabels.get(0).setBounds(175, 300, 125, 75);

        outputLabels.get(1).setText("Tax Rate");
        outputLabels.get(1).setBounds(300, 300, 125, 75);

        outputLabels.get(2).setText("Taxes Owed");
        outputLabels.get(2).setBounds(425, 300, 125, 75);

    }

    public void setOutputFields() {
        for (d = 0; d < 3; d++) {
            outputField = new JTextField();
            outputFields.add(outputField);
            outputFields.get(d).setOpaque(true);
            outputFields.get(d).setBorder(outputBorder);
            outputFields.get(d).setFont(myFont);
            outputFields.get(d).setHorizontalAlignment(JTextField.CENTER);
            outputFields.get(d).setEditable(false);
            taxFrame.add(outputFields.get(d));
        }
        outputFields.get(0).setBounds(175, 375, 125, 75);

        outputFields.get(1).setBounds(300, 375, 125, 75);

        outputFields.get(2).setBounds(425, 375, 125, 75);

    }

    public void setTaxButtons() {
        calc.setOpaque(true);
        calc.setFocusable(false);
        calc.addActionListener(this);
        calc.setBounds(300, 200, 100, 50);
        calc.setFont(myFont);
        calc.setBorder(buttonBorder);

        taxFrame.add(calc);
    }

    JLabel errorMessage = new JLabel();
    JLabel errorMessage2 = new JLabel();
    JLabel errorMessage3 = new JLabel();

    public void setGrossError() {
        errorMessage.setText("Gross Income cannot be <= 0");
        grossErrorFrame.setDefaultCloseOperation(JFrame.HIDE_ON_CLOSE);
        grossErrorFrame.setSize(300, 300);
        errorMessage.setHorizontalAlignment(JLabel.CENTER);
        grossErrorFrame.add(errorMessage);
        grossErrorFrame.setVisible(true);
    }

    public void setExemptionError() {
        errorMessage2.setText("Number of exemptions must be >= 0");
        exemptionErrorFrame.setDefaultCloseOperation(JFrame.HIDE_ON_CLOSE);
        exemptionErrorFrame.setSize(300, 300);
        errorMessage2.setHorizontalAlignment(JLabel.CENTER);
        exemptionErrorFrame.add(errorMessage2);
        exemptionErrorFrame.setVisible(true);
    }

    public void setMarriageError() {
        errorMessage3.setText("Filing Status must be either s/S or m/M or c/C");
        marriageErrorFrame.setDefaultCloseOperation(JFrame.HIDE_ON_CLOSE);
        marriageErrorFrame.setSize(300, 300);
        errorMessage3.setHorizontalAlignment(JLabel.CENTER);
        marriageErrorFrame.add(errorMessage3);
        marriageErrorFrame.setVisible(true);
    }

    @Override
    public void actionPerformed(ActionEvent e) {
        String marriageStatus;
        int gross, numOfExempts;
        marriageStatus = inputFields.get(0).getText();
        gross = Integer.parseInt(inputFields.get(1).getText());
        numOfExempts = Integer.parseInt(inputFields.get(2).getText());

        if (e.getSource() == calc) {

            double incomeTax, rateTax, owedTaxes;
            String displayRateTax;
            incomeTax = gross - (1000 * numOfExempts);
            switch (marriageStatus) {
                case "s":
                case "S":
                    rateTax = .20;
                    displayRateTax = "20%";
                    owedTaxes = incomeTax * rateTax;
                    outputFields.get(0).setText(Double.toString(incomeTax));
                    outputFields.get(1).setText(displayRateTax);
                    outputFields.get(2).setText(Double.toString(owedTaxes));
                    break;

                case "m":
                case "M":
                    rateTax = .25;
                    displayRateTax = "25%";
                    owedTaxes = incomeTax * rateTax;
                    outputFields.get(0).setText(Double.toString(incomeTax));
                    outputFields.get(1).setText(displayRateTax);
                    outputFields.get(2).setText(Double.toString(owedTaxes));
                    break;

                case "c":
                case "C":
                    if (gross < 20000) {
                        rateTax = .10;
                        displayRateTax = "10%";
                        owedTaxes = incomeTax * rateTax;
                        outputFields.get(0).setText(Double.toString(incomeTax));
                        outputFields.get(1).setText(displayRateTax);
                        outputFields.get(2).setText(Double.toString(owedTaxes));
                    } else if (gross >= 20000 && gross <= 50000) {
                        rateTax = .15;
                        displayRateTax = "15%";
                        owedTaxes = incomeTax * rateTax;
                        outputFields.get(0).setText(Double.toString(incomeTax));
                        outputFields.get(1).setText(displayRateTax);
                        outputFields.get(2).setText(Double.toString(owedTaxes));
                    } else if (gross > 50000) {
                        rateTax = .30;
                        displayRateTax = "30%";
                        owedTaxes = incomeTax * rateTax;
                        outputFields.get(0).setText(Double.toString(incomeTax));
                        outputFields.get(1).setText(displayRateTax);
                        outputFields.get(2).setText(Double.toString(owedTaxes));
                    }
                    break;
                default:
                    setMarriageError();
                    if (gross <= 0) {
                        setGrossError();
                    }
                    if (numOfExempts < 0) {
                        setExemptionError();
                    }
                    if (gross <= 0 && numOfExempts < 0) {
                        setGrossError();
                        setExemptionError();
                    }
                    break;
            }
        }
        if (gross <= 0) {
            setGrossError();
        }
        if (numOfExempts < 0) {
            setExemptionError();
        }
        if (gross <= 0 && numOfExempts < 0) {
            setGrossError();
            setExemptionError();
        }
    }

}
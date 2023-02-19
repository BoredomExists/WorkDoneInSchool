package LoginGUI;

import javax.swing.*;
import java.awt.event.*;

public class Login implements ActionListener {

    JFrame frame = new JFrame();
    JPanel panel = new JPanel();
    JLabel user = new JLabel("User");
    JLabel password = new JLabel("Password");
    JLabel login = new JLabel("LOGIN BITCH");
    JButton button = new JButton();
    JButton button2 = new JButton();
    JTextField userText = new JTextField(20);
    JPasswordField passwordText = new JPasswordField(20);

    LoginComplete success = new LoginComplete();
    Frame1 frameone = new Frame1();

    String text;
    String passText;

    public void setLayout() {
        frame.setTitle("Login");
        frame.setSize(715, 600);
        frame.setResizable(true);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setVisible(true);
        frame.setLayout(null);

        login.setBounds(300, 0, 100, 100);
        frame.add(login);

        setPanel();
        setUser();
        setPassword();
        setButton();
        setButton2();
    }

    public void setPanel() {
        frame.add(panel);
    }

    public void setUser() {
        user.setBounds(320, 75, 80, 25);
        frame.add(user);

        userText.setBounds(250, 100, 165, 25);
        userText.setOpaque(true);
        frame.add(userText);

    }

    public void setPassword() {
        password.setBounds(305, 150, 80, 25);
        frame.add(password);

        passwordText.setBounds(250, 175, 165, 25);
        passwordText.setOpaque(true);
        frame.add(passwordText);
    }

    public void setButton() {
        button.setText("Login");
        button.setBounds(200, 250, 100, 50);
        button.setFocusable(false);
        button.addActionListener(this);
        frame.add(button);
    }

    public void setButton2() {
        button2.setText("Reset Password");
        button2.setBounds(350, 250, 150, 50);
        button2.setFocusable(false);
        button2.addActionListener(this);
        frame.add(button2);
    }

    @Override
    public void actionPerformed(ActionEvent e) {
        text = userText.getText();
        passText = passwordText.getText();

        if (e.getSource() == button) {
            if (text.equals("User") && passText.equals("Password")) {
                frame.setVisible(false);
                success.setLogFrame();
                success.setFrameInvis();
                frameone.setFrame1();
            } else {
                success.setFailFrame();
            }
        }
    }

}

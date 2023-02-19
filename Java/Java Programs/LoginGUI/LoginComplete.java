package LoginGUI;

import javax.swing.*;

public class LoginComplete {

    JFrame logFrame = new JFrame();
    JLabel logLabel = new JLabel("Login Succesful");

    JFrame failFrame = new JFrame();
    JLabel failLabel = new JLabel("Login Failed");

    public void setLogFrame()
    {
        logFrame.setTitle("Succesful Login");
        logFrame.setSize(300, 300);
        //logFrame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        logFrame.setResizable(true);
        logFrame.setLayout(null);
        logFrame.setVisible(true);
        logLabel.setBounds(125, 0, 150, 150);
        logLabel.setOpaque(true);
        logFrame.add(logLabel);
        
    }

    public void setFrameInvis()
    {
        logFrame.setVisible(false);
    }

    public void setFailFrame()
    {
        failFrame.setTitle("Failed Login");
        failFrame.setSize(300, 300);
        failFrame.setResizable(true);
        failFrame.setLayout(null);
        failFrame.setVisible(true);

        failLabel.setBounds(125, 0, 150, 150);
        failLabel.setOpaque(true);
        failFrame.add(failLabel);
    }
    
}

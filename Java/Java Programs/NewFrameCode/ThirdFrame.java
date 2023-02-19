package NewFrameCode;

import javax.swing.ImageIcon;
import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JPanel;


import java.awt.Color;
import java.awt.Font;

import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

public class ThirdFrame implements ActionListener {
    
    JFrame tFrame = new JFrame();
    JLabel tLabel = new JLabel();
    JButton tButton = new JButton();
    JPanel panel1 = new JPanel();
    JPanel panel2 = new JPanel();
    JPanel panel3 = new JPanel();

    public void setThirdFrame()
    {
        tFrame.setTitle("Frame 3");
        tFrame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        tFrame.setResizable(true);
        tFrame.setSize(1920, 1080);
        tFrame.setVisible(true);
        tFrame.setLayout(null);

        setPanels();
        setThirdButton();
    }

    public void setPanels()
    {
        panel1.setBackground(Color.red);
        panel2.setBackground(Color.blue);
        panel3.setBackground(Color.green);
        panel1.setBounds(0, 0, 100, 100);
        panel2.setBounds(100, 0, 100, 100);
        panel3.setBounds(200, 0, 100, 100);
        panel1.setOpaque(true);
        panel2.setOpaque(true);
        panel3.setOpaque(true);

        tFrame.add(panel1);
        tFrame.add(panel2);
        tFrame.add(panel3);
    }

    public void ImageIcons() {
        tFrame.getContentPane().setBackground(Color.CYAN);
    }

    public void setThirdButton()
    {
        tButton.setText("Third Button");
        tButton.setBounds(650, 0, 150, 50);
        tButton.setFocusable(false);
        tButton.setHorizontalAlignment(JButton.CENTER);
        tButton.setVerticalAlignment(JButton.TOP);
        tButton.setVisible(true);
        tButton.addActionListener(this);
        tFrame.add(tButton);
    }

    @Override
    public void actionPerformed(ActionEvent e) {
        if(e.getSource() == tButton)
        {
            System.out.println("Third Button Pressed. Exiting Program");
            System.exit(0);
        }
    
        
    }



}

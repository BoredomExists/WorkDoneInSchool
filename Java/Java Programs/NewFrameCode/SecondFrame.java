package NewFrameCode;

import javax.swing.ImageIcon;
import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JLabel;

import java.awt.Color;
import java.awt.Font;

import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

public class SecondFrame implements ActionListener{
    
    JFrame sFrame = new JFrame();
    JLabel sLabel = new JLabel();
    JButton sButton = new JButton();
    ImageIcon nImage2 = new ImageIcon("YBlock.png");
    ThirdFrame thirdFrame = new ThirdFrame();


    public void setSecondFrame() {
        sFrame.setTitle("Frame 2");
        sFrame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        sFrame.setResizable(true);
        sFrame.setSize(1920, 1080);
        sFrame.setVisible(true);
        sFrame.setLayout(null);
        sFrame.add(sLabel);
        sFrame.add(sButton);
        setSecondLabel();
        setSecondButton();
    }

    public void setSecondLabel() {
        sLabel.setText("Frame 2");
        sLabel.setIcon(nImage2);
        sLabel.setHorizontalAlignment(JLabel.CENTER);
        sLabel.setVerticalAlignment(JLabel.CENTER);
        sLabel.setHorizontalTextPosition(JLabel.CENTER);
        sLabel.setVerticalTextPosition(JLabel.TOP);
        sLabel.setFont(new Font("SCE-PS3 Rodin LATIN", Font.PLAIN, 20));
        sLabel.setIconTextGap(5);
        sLabel.setBounds(450, 250, 500, 500);
        sLabel.setOpaque(true);
    }

    public void ImageIcons() {
        sFrame.setIconImage(nImage2.getImage());
        sFrame.getContentPane().setBackground(Color.CYAN);
    }

    public void setSecondButton()
    {
        sButton.setBounds(650, 0, 100, 50);
        sButton.setText("Next Frame");
        sButton.setFocusable(false);
        sButton.setHorizontalAlignment(JButton.CENTER);
        sButton.setVerticalAlignment(JButton.TOP);
        sButton.setVisible(true);
        sButton.addActionListener(this);
    }

    @Override
    public void actionPerformed(ActionEvent e) {
        if(e.getSource() == sButton)
        {
            System.out.println("Going to Third Frame");
            sFrame.setVisible(false);
            thirdFrame.setThirdFrame();


            
        }
    }

}

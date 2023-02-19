package NewFrameCode;

import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.ImageIcon;
import javax.swing.JButton;

import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

import java.awt.Color;
import java.awt.Font;

public class NewFrame implements ActionListener {
    JFrame nFrame = new JFrame();    
    JLabel nLabel = new JLabel();
    ImageIcon nImage = new ImageIcon("cyndaquil.png");
    JButton nButton = new JButton();
    SecondFrame secFrame = new SecondFrame();

    public void setFrame() {
        nFrame.setTitle("Frame 1");
        nFrame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        nFrame.setResizable(true);
        nFrame.setSize(1920, 1080);
        nFrame.setVisible(true);
        nFrame.setLayout(null);
        nFrame.add(nLabel);
        nFrame.add(nButton);
        setLabel();
    }

    public void setLabel() {
        nLabel.setText("Frame 1");
        nLabel.setIcon(nImage);
        nLabel.setHorizontalAlignment(JLabel.CENTER);
        nLabel.setVerticalAlignment(JLabel.CENTER);
        nLabel.setHorizontalTextPosition(JLabel.CENTER);
        nLabel.setVerticalTextPosition(JLabel.TOP);
        nLabel.setFont(new Font("SCE-PS3 Rodin LATIN", Font.PLAIN, 20));
        nLabel.setIconTextGap(5);
        nLabel.setBounds(450, 250, 500, 500);
        nLabel.setOpaque(true);
    }

    public void setButton() {
        nButton.setBounds(650, 0, 100, 50);
        nButton.setText("Next Frame");
        nButton.setFocusable(false);
        nButton.setHorizontalAlignment(JButton.CENTER);
        nButton.setVerticalAlignment(JButton.TOP);
        nButton.setVisible(true);
        nButton.addActionListener(this);
    }

    public void ImageIcons() {
        nFrame.setIconImage(nImage.getImage());
        nFrame.getContentPane().setBackground(Color.CYAN);
    }

    @Override
    public void actionPerformed(ActionEvent e) {
        if (e.getSource() == nButton) {
            System.out.println("Going to next Frame");
            nFrame.setVisible(false);
            secFrame.setSecondFrame();
        }
    }

}

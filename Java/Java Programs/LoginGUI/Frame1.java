package LoginGUI;

import javax.swing.*;

import java.awt.Color;
import java.awt.event.*;


public class Frame1 implements KeyListener{
    JFrame frame1 = new JFrame();
    JPanel panel1 = new JPanel();
    JPanel panel2 = new JPanel();


    public void setFrame1()
    {
        frame1.setTitle("First Frame");
        frame1.setSize(1000, 1000);
        frame1.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame1.setResizable(true);
        frame1.setLayout(null);
        frame1.setVisible(true);
        frame1.addKeyListener(this);
        setPanel1();
    }

    public void setPanel1()
    {
        panel1.setBackground(Color.blue);
        panel1.setBounds(0, 0, 50, 50);
        panel1.setOpaque(true);

        panel2.setBackground(Color.red);
        panel2.setBounds(350, 550, 50, 50);
        panel2.setOpaque(true);
        frame1.add(panel2);

        frame1.add(panel1);
    }
    
    @Override
    public void keyTyped(KeyEvent e) {
        switch(e.getKeyChar())
        {
            case 'w': panel1.setLocation(panel1.getX(), panel1.getY()-50);
                break;
            case 'a': panel1.setLocation(panel1.getX()-50, panel1.getY());
                break;
            case 's': panel1.setLocation(panel1.getX(), panel1.getY()+50);
                break;
            case 'd': panel1.setLocation(panel1.getX()+50, panel1.getY());
                break;
        }
        
    }

    @Override
    public void keyPressed(KeyEvent e) {
        // TODO Auto-generated method stub
        
    }

    @Override
    public void keyReleased(KeyEvent e) {
        // TODO Auto-generated method stub
        
    }


    
}

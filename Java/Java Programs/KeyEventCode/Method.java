package KeyEventCode;

import javax.swing.JFrame;

import java.awt.Color;
import java.awt.event.*;
import javax.swing.*;

public class Method implements KeyListener {
    
    JFrame frame = new JFrame();
    JLabel label = new JLabel();
    
    public void setFrame()
    {
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setSize(800, 800);
        frame.setLayout(null);
        frame.addKeyListener(this);
        frame.setVisible(true);
        frame.add(label);
    }
    
    public void setLabel()
    {
        label.setBounds(0, 0, 100, 100);
        label.setBackground(Color.blue);
        label.setOpaque(true);
    }

    @Override
    public void keyTyped(KeyEvent e)
    {
        switch(e.getKeyChar())
        {
            case 'w': label.setLocation(label.getX(), label.getY()-50);
                break;
            case 'a': label.setLocation(label.getX()-50, label.getY());
                break;
            case 's': label.setLocation(label.getX(), label.getY()+50);
                break;
            case 'd': label.setLocation(label.getX()+50, label.getY());
                break;
        }
    }

    @Override
    public void keyPressed(KeyEvent e)
    {
        switch(e.getKeyCode())
        {
            case 37 : label.setLocation(label.getX()-50, label.getY());
                break;
            case 38 : label.setLocation(label.getX(), label.getY()-50);
                break;
            case 39 : label.setLocation(label.getX()+50, label.getY());
                break;
            case 40 : label.setLocation(label.getX(), label.getY()+50);
                break;
        }
    }


    @Override
    public void keyReleased(KeyEvent e) 
    {
        System.out.println("You released key character: " + e.getKeyChar());
        System.out.println("You released key code: " + e.getKeyCode());
    }
}

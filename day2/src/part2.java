package day2.src;

import java.io.*;
import java.util.Scanner;

public class part2 {
    public static int getTotal(String line){
    int hRed = 0, hGreen = 0, hBlue= 0;
    String[] split = line.split(":");
    String gamePart = split[1];
    String[] games = gamePart.split(";");
    for(String game : games){
        String[] singles = game.split(",");
        for(String color : singles){
            String[] x = color.trim().split(" ");
            if(x[1].contains("red")){
                if(Integer.parseInt(x[0])>hRed){
                    hRed = Integer.parseInt(x[0]);
                }
            }
            if(x[1].contains("green")){
                if(Integer.parseInt(x[0])>hGreen){
                    hGreen = Integer.parseInt(x[0]);
                }
            }
            if(x[1].contains("blue")){
                if(Integer.parseInt(x[0])>hBlue){
                    hBlue = Integer.parseInt(x[0]);
                }
            }
        }
    }
    return hRed*hGreen*hBlue;
}

    public static void main(String args[]) throws FileNotFoundException{
        int answers = 0;
        Scanner filein = new Scanner(new File("input.txt"));
        while (filein.hasNext()) {
            String line = filein.nextLine();
            answers += getTotal(line);
      }
      System.out.println(answers);
    }
    
}


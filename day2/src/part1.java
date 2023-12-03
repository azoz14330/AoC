package day2.src;

import java.io.*;
import java.util.Scanner;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class part1 {
    public static Boolean processString(String line){
    int red = 12, green = 13, blue= 14;
    String[] split = line.split(":");
    String gamePart = split[1];
    String[] games = gamePart.split(";");
    for(String game : games){
        String[] singles = game.split(",");
        for(String color : singles){
            // System.out.println(color.trim());
            String[] x = color.trim().split(" ");
            // System.out.println(x[0]+" "+x[1]);
            if(x[1].contains("red")){
                if(Integer.parseInt(x[0])>red){
                    return false;
                }
            }
            if(x[1].contains("green")){
                if(Integer.parseInt(x[0])>green){
                    return false;
                }
            }
            if(x[1].contains("blue")){
                if(Integer.parseInt(x[0])>blue){
                    return false;
                }
            }
        }
    }
    return true;
}
public static int getGame(String line){
    String[] game = line.split(":");
    String number = game[0];
    Pattern pattern = Pattern.compile("\\d+");
    Matcher matcher = pattern.matcher(number);
    int gameNumber = 0;
    if (matcher.find()) {
        String extractedNumber = matcher.group();
        gameNumber = Integer.parseInt(extractedNumber);
    }
    return gameNumber;
}
    public static void main(String args[]) throws FileNotFoundException{
        int answers = 0;
        Scanner filein = new Scanner(new File("input.txt"));
        while (filein.hasNext()) {
            String line = filein.nextLine();
            if(processString(line)==true){
                answers += getGame(line);
            }
      }
      System.out.println(answers);
    }
    
}


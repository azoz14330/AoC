const fs = require('fs');
const readline = require('readline');
const filePath = "input.txt";
finalValue = 0;
const lineReader = readline.createInterface({
    input: fs.createReadStream(filePath),
    crlfDelay: Infinity
  });
  lineReader.on('line', (line) => {
    // Process each line here
    line = line.split('');
    for(i = 0; i< line.length-1; i++){
        numbers = [];
        if (!line[i].isNaN==false){
            numbers.push(line[i]);
        }
        if(line[i].toLocaleLowerCase=="o"&&line[i+1].toLocaleLowerCase=="n"&&line[i+2].toLocaleLowerCase=="e"){
            numbers.push(1);
        }
        if(line[i].toLocaleLowerCase=="t"&&line[i+1].toLocaleLowerCase=="w"&&line[i+2].toLocaleLowerCase=="o"){
            numbers.push(2);
        }
        if(line[i].toLocaleLowerCase=="t"&&line[i+1].toLocaleLowerCase=="h"&&line[i+2].toLocaleLowerCase=="r"&&line[i+3].toLocaleLowerCase=="e"&&line[i+4].toLocaleLowerCase=="e"){
            numbers.push(3);
        }
        if(line[i].toLocaleLowerCase=="f"&&line[i+1].toLocaleLowerCase=="o"&&line[i+2].toLocaleLowerCase=="u"&&line[i+3].toLocaleLowerCase=="r"){
            numbers.push(4);
        }
        if(line[i].toLocaleLowerCase=="f"&&line[i+1].toLocaleLowerCase=="i"&&line[i+2].toLocaleLowerCase=="v"&&line[i+3].toLocaleLowerCase=="e"){
            numbers.push(5);
        }
        if(line[i].toLocaleLowerCase=="s"&&line[i+1].toLocaleLowerCase=="i"&&line[i+2].toLocaleLowerCase=="x"){
            numbers.push(6);
        }
        if(line[i].toLocaleLowerCase=="s"&&line[i+1].toLocaleLowerCase=="e"&&line[i+2].toLocaleLowerCase=="v"&&line[i+3].toLocaleLowerCase=="e"&&line[i+4].toLocaleLowerCase=="n"){
            numbers.push(7);
        }
        if(line[i].toLocaleLowerCase=="e"&&line[i+1].toLocaleLowerCase=="i"&&line[i+2].toLocaleLowerCase=="g"&&line[i+3].toLocaleLowerCase=="h"&&line[i+4].toLocaleLowerCase=="t"){
            numbers.push(8);
        }
        if(line[i].toLocaleLowerCase=="n"&&line[i+1].toLocaleLowerCase=="i"&&line[i+2].toLocaleLowerCase=="n"&&line[i+3].toLocaleLowerCase=="e"){
            numbers.push(9);
        }
        finalValue=numbers[0]+numbers[numbers.length-1];
    }
        
  });
  
  lineReader.on('close', () => {
    
    console.log('File reading completed.');
  });
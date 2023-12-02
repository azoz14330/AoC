const fs = require('fs');
const readline = require('readline');
const filePath = "input.txt";
finalValue = 0;
currentline = 0;
const lineReader = readline.createInterface({
    input: fs.createReadStream(filePath),
    crlfDelay: Infinity
  });
  lineReader.on('line', (line) => {
    // Process each line here
    let array = [];
    array = processString(line);
    number1 = array[0].toString();
    number2 = array[array.length-1].toString();
    numberToAdd = number1[0]+number2[number2.length-1];
    finalValue += parseInt(numberToAdd);
    currentline++;
  });
  
  lineReader.on('close', () => {
    console.log(finalValue);
    console.log('File reading completed.');
  });

  function processAnswer(array, word){
    const wordToNumber = {
        one: 1,
        two: 2,
        three: 3,
        four: 4,
        five: 5,
        six: 6,
        seven: 7,
        eight: 8,
        nine: 9
      };

    if(typeof(word) !== 'undefined' && word.length > 2){
        if (wordToNumber.hasOwnProperty(word.slice(0,3))) {
            array.push(wordToNumber[word.slice(0,3)]);
          }
        else if (wordToNumber.hasOwnProperty(word.slice(0,4))) {
            array.push(wordToNumber[word.slice(0,4)]);
          }
        else if (wordToNumber.hasOwnProperty(word.slice(0,5))) {
            array.push(wordToNumber[word.slice(0,5)]);
          }
          // else{
            processAnswer(array, word.slice(1,word.length));
          // }
    }
      return array;
}
function processString(word){
    let array = [];
    let wordArray = word.split(/(\d+)/);
    if(wordArray.includes("")){
        wordArray = wordArray.filter(element => {
            return element !== "";
        });
    };
    for(let i = 0; i<wordArray.length; i++){
        if (Number.isInteger(Number(wordArray[i]))){
            numbersArray = wordArray[i].split('');
            for(let k = 0; k<numbersArray.length; k++){
                array.push(parseInt(numbersArray[k]));
            }
        }
        else if(wordArray[i].length>2){
            let x = processAnswer([],wordArray[i])
            for(let j = 0; j<x.length; j++){
                array.push(x[j]);
            }
        }
    }
    array = array.filter(element => {
        return element !== "";
    });
    return array;
}
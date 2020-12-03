const readline = require('readline')
const fs =  require('fs')

//Our input array
let inputArray=[];

//Make a filestream reader
const reader = readline.createInterface({
  input: fs.createReadStream('./inputs.txt')
});

//Push each line to our array
reader.on('line', function(line) {
  inputArray.push(line);
});

//Once we've finished reading loop through the array, find the 2 elements that add up to 2020 and return the multiplication
reader.on('close', function(){
  for(let i=0;i<inputArray.length;i++){
    let thing1=inputArray[i];
    for(let j=0;j<inputArray.length;j++){
      let thing2=inputArray[j];
      if(Number(thing1)+Number(thing2)==2020){
        console.log (thing1*thing2);
      }
    }
  }
})
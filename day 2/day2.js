//Oh god, how am I even hired anywhere
const readline = require('readline')
const fs =  require('fs')

//Our input array reappears
let inputArray=[];

//The amount of passing inputs
let goodPasswords = 0;

const ruleMaker=(input)=>{
    //Take the input, split it @ whitespace
    const ingredients=input.split(' ');

    //The first part is the rule in 2 parts
    //The minimum and
    const min=ingredients[0].split('-')[0];
    //The maximum
    const max=ingredients[0].split('-')[1];

    //The second part is the letter rule, delete the ':'
    const letter=ingredients[1].replace(/\:/g, '');

    //Finally, the password
    const password=ingredients[2];

    //With all the ingredients in place, check the password against the rules
    passwordCheck(min, max, letter, password)
}

const passwordCheck=(min, max, letter, password)=>{
    let occurrences=0;
    for(let i=0;i<password.length;i++){
        if(password[i]==letter){
            occurrences++;
        }
    }
    if(occurrences>=min&&occurrences<=max){
        goodPasswords++;
    }
}

//Make a filestream reader
const reader = readline.createInterface({
    input: fs.createReadStream('./inputs.txt')
});
  
//Push each line to our array
reader.on('line', function(line) {
    inputArray.push(line);
});

//On reader close invoke the rulemaker
reader.on('close', function(){
    for(let i=0;i<inputArray.length;i++){
      ruleMaker(inputArray[i]);
    }
    console.log(goodPasswords);
  })
  
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

    //The first part is the rule >:c
    //The first check and
    const position1=ingredients[0].split('-')[0]-1;
    //The second check in the world's worst password system
    const position2=ingredients[0].split('-')[1]-1;

    //The second part is the letter rule, delete the ':'
    const letter=ingredients[1].replace(/\:/g, '');

    //Finally, the password
    const password=ingredients[2];

    //With all the ingredients in place, check the password against the rules
    passwordCheck(position1, position2, letter, password)
}

const passwordCheck=(position1, position2, letter, password)=>{
    //Now we check the password differently, occurences don't matter
    let isValid=true;
    if(password[position1]==letter&&password[position2]==letter){
        isValid=false;
    }
    else if(password[position1]!=letter&&password[position2]!=letter){
        isValid=false;
    }
    else{
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
  
const readline = require('readline')
const fs =  require('fs')

//Our input array
let inputArray=[];

const validFields=['byr','iyr','eyr','hgt','hcl','ecl','pid'];
let validPassports=0;

//Make the passport readable, then check against our valid fields, cid doesn't matter right now
const validatePassport=(input)=>{
    let passportData=input.toString().trim().replace(/,/g,' ').split(' ').toString().split(',');
    let passportArray=[];
    for(let i=0; i<passportData.length; i++){
        passportArray.push(passportData[i].split(':')[0]);
    }
    if(validFields.every(stat=>passportArray.includes(stat))){
        validPassports++;
    }
}

//Make a filestream reader
const reader = readline.createInterface({
  input: fs.createReadStream('./inputs.txt')
});

//Push each line to our array
reader.on('line', function(line) {
    //If it's the last line, validate all lines untill now then empty the array
    if(line===''){
        validatePassport(inputArray);
        inputArray=[];
    }
    else{
        inputArray.push(line);
    }
});

//Once we've finished reading print out all the valid passports (+1 at the end)
reader.on('close', function(){
    validatePassport(inputArray);
    console.log(validPassports);
});
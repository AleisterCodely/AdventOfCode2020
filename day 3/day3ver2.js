const readline = require('readline')
const fs =  require('fs')

//Our tree array
let treeArray=[];

//Our slope checker
checkSlopes=(right, down)=>{
    let crawler=0; 
    let totalTrees=0;
    let slope=treeArray;
    for(let i=down;i<slope.length;i+=down){
        crawler+=right;
        //If the crawler would go out of bounds, extend the map
        if(crawler>slope[i].length){
            for(let x=0;x<slope.length;x++){
                slope[x]=slope[x].concat(slope[x]);
            }
        }
        if(slope[i].charAt(crawler)=='#'){
            totalTrees++;
        }
    }
    console.log(totalTrees);
    return totalTrees;
}

//Make a filestream reader
const reader = readline.createInterface({
  input: fs.createReadStream('./inputs.txt')
});

//Push each line onto our map
reader.on('line', function(line) {
  treeArray.push(line);
});

//Once we've finished building our map go down the slopes, **THIS WORKS ONLY IF WE DO THE BIGGEST SLOPE FIRST, FIX, FIX, FIX
reader.on('close', function(){
    console.log("Total: " + checkSlopes(7,1) * checkSlopes(5,1) * checkSlopes(3,1) * checkSlopes(1,1) * checkSlopes(1,2));
});
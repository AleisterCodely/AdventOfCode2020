const readline = require('readline')
const fs =  require('fs')

//Our tree array
let treeArray=[];

//Make a filestream reader
const reader = readline.createInterface({
  input: fs.createReadStream('./inputs.txt')
});

//Push each line onto our map
reader.on('line', function(line) {
  treeArray.push(line);
});

//Once we've finished building our map go down the slope
reader.on('close', function(){
    let crawler=0; 
    let totalTrees=0;
    for(let i=1;i<treeArray.length;i++){
        crawler+=3;
        //If the crawler would go out of bounds, extend the map
        if(crawler>treeArray[i].length){
            for(let x=0;x<treeArray.length;x++){
                treeArray[x]=treeArray[x].concat(treeArray[x]);
            }
        }
        if(treeArray[i].charAt(crawler)=='#'){
            totalTrees++;
        }
    }
    console.log("Total trees: " + totalTrees);
});
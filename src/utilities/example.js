let d = require('./dataCsv');
//console.log( d()[0]);

let data = d()
let final = [];

for(let i=1; i< data.length; i++){
let tempScore = Number(data[i][0])
console.log(tempScore)
if(tempScore>=100 && tempScore != NaN){
    let subSet = [data[i][7],tempScore]
    final.push(subSet)
}
}

console.log(final)

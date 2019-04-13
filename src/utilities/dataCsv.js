const fs = require('fs');
const url = './sachin.csv';

// More specific way will be to do this work at backend
// server then responed it to frontend

function record(){
try {
    const data = fs.readFileSync(url, 'utf8')
    //console.log(data)
    let recordData = CSVToArray(data)
    return recordData;
  } catch (err) {
    console.error(err)
  }
}

module.exports = record;

function CSVToArray( strData){
    
    let strDelimiter = ","; //(strDelimiter || ",");

    var objPattern = new RegExp(
        (
            "(\\" + strDelimiter + "|\\r?\\n|\\r|^)" +
            "(?:\"([^\"]*(?:\"\"[^\"]*)*)\"|" +
            "([^\"\\" + strDelimiter + "\\r\\n]*))"
        ),
        "gi"
        );
   
    var arrData = [[]];
  
    var arrMatches = null;
   
    while (arrMatches = objPattern.exec( strData )){
        
        var strMatchedDelimiter = arrMatches[ 1 ];
        
        if (
            strMatchedDelimiter.length &&
            (strMatchedDelimiter != strDelimiter)
            ){
            
            arrData.push( [] );
        }
        
        if (arrMatches[ 2 ]){
            
            var strMatchedValue = arrMatches[ 2 ].replace(
                new RegExp( "\"\"", "g" ),
                "\""
                );
        } else {
            var strMatchedValue = arrMatches[ 3 ];
        }
        
        arrData[ arrData.length - 1 ].push( strMatchedValue );
    }
    return( arrData );
    //console.log(arrData);
}

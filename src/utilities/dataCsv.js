const url = 'https://raw.githubusercontent.com/mritunjaygoutam12/sct/master/src/utilities/sachin.csv';
import { csv } from 'd3-request';

// More specific way will be to do this work at backend
// server then responed it to frontend

function record(){
return new Promise((resolve, reject) => {
    csv(url, function(err, data) {
        if(err) reject(err)
        let final = []

        data.forEach(myFunction);

        function myFunction(item) {

             let tempScr = Number(item.batting_score)
             if(tempScr>=100){
                   let subSet = [item.date,tempScr]
                   final.push(subSet)
              }
}
        resolve(final)   
}) 
})
}

export {record};


/*function record(path){
try {
    const data = fs.readFile(path, 'utf8')
    //console.log(data)
    let recordData = CSVToArray(data)
    return recordData;
  } catch (err) {
    console.error(err)
  }
}

export {record};

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
}*/
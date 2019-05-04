var count = (ArrayA, ArrayB, MatchArray, btnID) => {
    var matchArray = [...new Set(MatchArray)];
    if(btnID == 'AA' || btnID == 'BB'){
        document.getElementById('wordsA').innerHTML = 'Total Words: ' + ArrayA.length
        document.getElementById('wordsB').innerHTML = 'Unique Words: ' + matchArray.length
        document.getElementById('wordsC').innerHTML = 'Selfsim Words: ' + (ArrayA.length) - matchArray.length
    }else{
        document.getElementById('wordsA').innerHTML = 'Total Words: ' + (ArrayA.length + ArrayB.length)
        document.getElementById('wordsB').innerHTML = 'Unique Words: ' + matchArray.length
        document.getElementById('wordsC').innerHTML = 'Selfsim Words: ' + (ArrayA.length + ArrayB.length) - matchArray.length    
    }     
}
var count = (ArrayA, ArrayB, MatchArray, btnID) => {
    var matchArray = [...new Set(MatchArray)];
    var a, b = 0
    a = ArrayA.length
    b = ArrayB.length
    if(btnID == 'AA' || btnID == 'BB'){
        document.getElementById('wordsA').innerHTML = 'Total Words: ' + a
        document.getElementById('wordsB').innerHTML = 'Unique Words: ' + c
    }else{
        document.getElementById('wordsA').innerHTML = 'Total Words: ' + (a + b)
        document.getElementById('wordsB').innerHTML = 'Unique Words: ' + c
    }     
}

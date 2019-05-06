var count = (ArrayA, ArrayB, MatchArray, btnID) => {
    var matchArray = [...new Set(MatchArray)];
    var a, b, c = 0
    a = ArrayA.length
    b = ArrayB.length
    c = matchArray.length
    if(btnID == 'AA' || btnID == 'BB'){
        document.getElementById('wordsA').innerHTML = 'Total Words: ' + a
        document.getElementById('wordsB').innerHTML = 'Unique Words: ' + c
        document.getElementById('wordsC').innerHTML = 'Selfsim Words: ' + (a - c)
    }else{
        document.getElementById('wordsA').innerHTML = 'Total Words: ' + (a + b)
        document.getElementById('wordsB').innerHTML = 'Unique Words: ' + c
        document.getElementById('wordsC').innerHTML = 'Selfsim Words: ' + (a + b - c)
    }     
}

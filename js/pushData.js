var pushData = (textareaID, tableID) => { 
    var inputText = document.getElementById(textareaID).value;
    nullNot(inputText); 
    var myArray = strFormat(inputText); 
    var myArrayMirror = myArray;
    selfSim(myArray, myArrayMirror, tableID); 
}
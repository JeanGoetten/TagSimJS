var pushData = (textareaID1, textareaID2, tableID) => { 
    var inputText = document.getElementById(textareaID1).value;
    var inputText2 = document.getElementById(textareaID2).value;
    nullNot(inputText); 
    nullNot(inputText2); 
    var myArray = strFormat(inputText); 
    var myArrayMirror = strFormat(inputText2); 
    selfSim(myArray, myArrayMirror, tableID); 
}
function pushData(){ 
    var myArray = [];
    var inputText = document.getElementById('inputText').value;

    if(inputText == null || inputText == '' || inputText == ' '){
        alert("Este campo não pode ficar vazio");
        return false;
    }

    var regex = /,/gi; 
    var remove = inputText.replace(regex, ''); 
    
    var lower = remove.toLowerCase(); 
    var str = lower.split(' ');

    var strCLS = str.filter(String);

    var strLength = strCLS.length;
    alert(strCLS); alert(strLength);

    var myArray = strCLS; 
    var myArrayMirror = myArray;

    for(let index = 0; index < strLength; index++) {
        var elementA = myArray[index]; 
        var table = document.getElementById('output'); 
        var row = table.insertRow(index);
        let i = 0; 
        while(i < strLength) {
            var elementB = myArrayMirror[i];
            
            if(elementA == elementB){ 
                var cell = row.insertCell(i);
                cell.innerHTML = "▓▓";
            }
            else{
                var cell = row.insertCell(i);
                cell.innerHTML = "░░";
            } 
            i++; 
        }
    }
}
function clearTextArea(){
    document.getElementById('inputText').value = '';
}
function clearTable(){
    var rowPull = document.getElementById('output');
    while(rowPull.hasChildNodes())
    {
        rowPull.removeChild(rowPull.firstChild);
    }
}
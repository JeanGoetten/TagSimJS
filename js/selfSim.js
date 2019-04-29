var selfSim = (arrayA, arrayB, tableID) => {
    for(let index = 0; index < arrayA.length; index++) {
        const elementA = arrayA[index]; 
        var table = document.getElementById(tableID); 
        var row = table.insertRow(index);
        let i = 0; 
        while(i < arrayB.length) {
            const elementB = arrayB[i];
            
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
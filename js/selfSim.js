var selfSim = (arrayA, arrayB, tableID, btnID) => {
    var Match = []
    for(let index = 0; index < arrayA.length; index++) {
        const elementA = arrayA[index]
        var table = document.getElementById(tableID)
        var row = table.insertRow(index)
        let i = 0
        while(i < arrayB.length) {
            const elementB = arrayB[i]
            
            if(elementA == elementB){ 
                var cell = row.insertCell(i)
                cell.innerHTML = "▓▓"
                Match.push(elementA)

                count(arrayA, arrayB, Match, btnID)
            }
            else{
                var cell = row.insertCell(i)
                cell.innerHTML = "░░"
            } 
            i++
        }
    }
}
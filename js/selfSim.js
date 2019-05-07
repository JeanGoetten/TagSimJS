var selfSim = (arrayA, arrayB, tableID, btnID) => {
    var Match = []
    let table = "<table cellpading='0' cellspacing='0'>"
    for(let index = 0; index < arrayA.length; index++) {
        const elementA = arrayA[index]
        table += '<tr>'
        let i = 0
        while(i < arrayB.length) {
            const elementB = arrayB[i]
            
            if(elementA == elementB){ 
                table += "<td style='background-color: #ccc' width='5px' heigth='5px' align='center' font-size='2pt'>"
                table += ''
                table += '</td>'
        
                Match.push(elementA)
                count(arrayA, arrayB, Match, btnID)
            }
            else{
                table += "<td style='background-color: #555' width='5px' heigth='5px' align='center' font-size='2pt'>"
                table += ''
                table += '</td>'
            } 
            i++
        }
        table += '</tr>'
    }
    table += '</table>'

    document.getElementById(tableID).innerHTML = table
}
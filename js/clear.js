const clearTextArea = (id) => document.getElementById(id).value = '';
const clearTable = (id) => {
    var rowPull = document.getElementById(id);
    while(rowPull.hasChildNodes())
    {
        rowPull.removeChild(rowPull.firstChild);
    }
}
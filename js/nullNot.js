const nullNot = (stringChain) => {
    if(stringChain == null || stringChain == '' || stringChain == ' '){
        alert("Este campo não pode ficar vazio");
        return false;
    }
}
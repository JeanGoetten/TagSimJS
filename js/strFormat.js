var strFormat = (arrayStr) => {
    var regex = /,/gi; 
    var remove = arrayStr.replace(regex, ''); 
    var lower = remove.toLowerCase(); 
    var str = lower.split(' ');

    var strCLS = str.filter(String);

    return strCLS; 
}
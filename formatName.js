function formatName(str) {
    let newStr = str.trim();
    newStr = newStr.split(" ");
    for (let i = 0; i < newStr.length; i++) {
        if (newStr[i]) {
            let firstChar = newStr[i][0].toUpperCase();
            let restOfString = newStr[i].slice(1).toLowerCase();
            newStr[i] = firstChar + restOfString;
        }
    }
    newStr = newStr.join(" ");
    return newStr;
}

console.log(formatName("   victor red   "));
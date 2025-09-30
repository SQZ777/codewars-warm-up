function incrementString(strng) {
    let strNumber = '';
    let noNumber = false;
    // get numbers that follow the string
    for (let i = strng.length - 1; i >= 0; i--) {
        const element = strng[i];
        if (Number.isNaN(parseInt(element)) === false) {
            strNumber = element + strNumber
        } else {
            if (i === strng.length - 1) {
                noNumber = true;
            }
            break;
        }
    }
    let countForwardZero = 0;
    for (let i = 0; i < strNumber.length; i++) {
        if (parseInt(strNumber[i]) === 0) {
            countForwardZero++;
        } else {
            break;
        }
    }
    countForwardZero = strNumber.length - (parseInt(strNumber) + 1).toString().length
    let zeroString = '';
    for (let i = 0; i < countForwardZero; i++) {
        zeroString = zeroString + '0'
    }
    let result = strng.slice(0, strng.length - strNumber.length)
    return noNumber ? result + '1' : result + zeroString + (parseInt(strNumber) + 1);
}

module.exports = incrementString;

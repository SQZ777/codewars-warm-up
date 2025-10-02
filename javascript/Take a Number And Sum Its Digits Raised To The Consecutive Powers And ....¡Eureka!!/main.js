function sumDigPow(a, b) {
    var result = []
    for (let i = a; i <= b; i++) {
        var iStrArray = i.toString().split('');
        var temp = 0;
        for (let j = 1; j <= iStrArray.length; j++) {
            temp += Math.pow(parseInt(iStrArray[j - 1]), j)
        }
        if (temp === i) {
            result.push(i);
        }

    }
    console.log(result)
    return result;
}


module.exports = sumDigPow;
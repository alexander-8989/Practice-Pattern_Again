function firstNonRepeatingChar(str) {
    var arr = str.split("");
    let result = "";
    let ctr = 0;

    for (let x = 0; x < arr.length; x++) {
        ctr = 0;
        for (let y = 0; y < arr.length; y++) {
            if (arr[x] === arr[y]) {
                ctr += 1;
            }
        }
        if (ctr < 2) {
            result = arr[x];
            break;
        }
    }
    return result;
}
console.log(firstNonRepeatingChar('teeth'));




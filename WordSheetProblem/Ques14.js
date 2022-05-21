let n = 10;
let string = "";

for (let i = 1; i <= n; i += 2) {
    for (let j = 1; j <= n; j++) {
        if(j<=i){
        string += n - j + 1 + " ";
    }
}
    string += "\n";
}
console.log(string);
let n = 4;
let print = "";

for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
        print += j;
    }
    print += "\n";
}
console.log(print);
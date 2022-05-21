// 22 (RIGHT)

let n = 5;
let print = "";
let k = 0;
let m = 0;

for (let i = 1; i <= 2 * n - 1; i++) {
    if (i > n) {
        m = m+2;
    }
    for (let j = 1; j <= 2 * n - 1; j++) {
        if ((j <= (2 * n) - i) && (j >= ((2 * n) - (k + i)) && i <= n)  || j > m && j<=(k+1) && i > n) {
            print += " *";
        }
        else {
            print += "  ";
        }
    }
    k = i;

    print += "\n";
}
console.log(print);
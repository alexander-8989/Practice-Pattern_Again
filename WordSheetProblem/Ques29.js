let n = 5;
let print = "";
let k = 5;

for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
        if (j >= i) {
            print += k;
            if (j == n) {
                k--;
            }
        }
        else {
            print += " ";
        }
    }
    print += "\n";
}
console.log(print);

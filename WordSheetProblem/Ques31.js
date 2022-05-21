let n = 4;
let print = "";
let k = 1;

for (let i = 1; i <= n; i++) {
    k = i;
    for (let j = 1; j <= (2 * n) - 1; j++) {
        if (j >= n + 1 - i && j <= n - 1 + i) {
            print += k;
            if (j < n) {
                k--;
            } else {
                k++;
            }
        }
        else {
            print += " ";
        }
    }
    print += "\n";
}
console.log(print);
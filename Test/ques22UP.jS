let n = 5;
let string = "";
let k = 0;
let m = 2 * n - 1;

for (let i = 1; i <= 2 * n - 1; i++) {
    for (let j = 1; j <= 2 * n - 1; j++) {
        if (j >= i && j <= i + k && i <= n || i >= 2 * n - j && j <= m) {
            string += "* ";
        }
        else {
            string += " ";
        }
    }
    if (i >= n) {
        m = m - 5;
    }
    k = i;
    string += "\n";
}
console.log(string);
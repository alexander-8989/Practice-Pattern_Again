let n = 10;
let print = "";
let num1 = (n / 2) * 3;
for (i = 1; i <= n; i++) {
    for (j = 1; j <= n; j++) {
        // center horizontal, upper right diagonal, bottom right diagonal
        if (i == n / 2 || j - i == n / 2 || i + j == num1) {
            print += " *";
        }
        else {
            print += "  ";
        }
    }
    print += "\n";
}
console.log(print);
let n = 5;
let string = "";

for (let i = 1; i <= 7; i++) {
    for (let j = 1; j <= 9; j++) {
        if (i == n || j == n - i + 1 || j == n + i - 1 || i == (n + 1) / 2 || j == i - (n + 1) / 2 + 1 || j == (2 * n - i) + 2) {
            string += " *";
        }
        else {
            string += "  ";
        }
    }
    string += "\n";
}
console.log(string);


let n = 5;
let string = "";
for (i = 1; i <= n; i++) {
    for (j = 1; j <= n; j++) {
        if (j >= i && j <= n - i + 1 || i + j == n+1) {
            string += " *"
        }
        else {
            string += "  "
        }
    }
    string += "\n"
}

console.log(string);
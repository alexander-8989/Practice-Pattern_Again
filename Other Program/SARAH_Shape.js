let p = "sarah";
let l = p.length;
let string = "";

for (let i = 0; i < 2 * l; i++) {
    for (let j = 0; j < 2 * l; j++) {
        if (i == j || (i + j) == 2 * l - 2) {
            if (i < l) {
                string += p[i];
            }
            else {
                if (p[j] == undefined) {
                    string += " ";
                } else {
                    string += p[j];
                }
            }
        }
        else {
            string += " ";
        }
    }
    string += "\n";
}
console.log(string);
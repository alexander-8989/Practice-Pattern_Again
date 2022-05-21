let n = 5;
let print = "";
let k = 5;

for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= (2 * n) - 1; j++) {

        if (j >= n + 1 - i && j <= n - 1 + i) {
            print += k;
            if (j < n) {
                k++;
            } 
            else{
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
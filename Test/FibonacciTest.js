
let n = 8;
let n1 = 0;
let n2 = 1;
let nextTerm;

let print = "";


for (let i = 1; i <= n; i++) {
    if ((n + n - 1) / 2 == 0) {
        // print += n1;
    }
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
    console.log(n1);
}

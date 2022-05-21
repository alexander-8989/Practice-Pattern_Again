let n = 30;
let n1 = 0;
let n2 = 1;

let array = [];
let arr = [];

for (let i = 2; i <= n; i++) {
    n3 = n1 + n2;
    n1 = n2;
    n2 = n3;
    array.push(n3);
    console.log(n3);
}

for (j = 0; j < array.length; j++) {
    k = array[j];
    let flag = 0;
    if (k == 0 || k == 1) {
        flag = 1;
    }
    for (let i = 2; i <= k / 2; i++) {
        if (k % i == 0) {
            flag = 1;
            break;
        }
    }
    if (flag == 0) {
        arr.push(k);
    }
}
console.log(arr);
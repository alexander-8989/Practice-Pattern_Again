let str = 'aman mishra';

let print = "";

let newStr = str.split(' ');

newStr.reverse();

for (let i = newStr.length - 1; i >= 0; i--) {

    print += newStr[i].split("").reverse().join("") + ' ';
}

console.log(print);
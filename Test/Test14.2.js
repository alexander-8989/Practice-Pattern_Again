// Write a program to find the product of every integer except itself.

function productBeforeIndex(arr) {
    let product = 1;
    let before = [];

    for (let i = 0; i < arr.length; i++) {
        before[i] = product;
        product *= arr[i];
    }
    return before;
}

function productAfterIndex(arr){
    let product = 1;
    let after = [];

    for(let i=arr.length-1; i>=0; i--){
        after[i] = product;
        product *= arr[i];
    }
    return after;
}

function findProduct(arr){
    let result = [];

    let before = productBeforeIndex(arr)
    let after = productAfterIndex(arr)

    for(let i=0; i<arr.length; i++){
        result.push(before[i] * after[i])
    }
    return result;
}

let array = [-5,-2,8,97];
console.log(findProduct(array));
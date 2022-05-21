let first = "Test";
let second = "st";

function removeAll(second, first) {
    let newArr = first.split("").filter(el => {
        return !second.includes(el);
    });
    return newArr.join("");
};
console.log(removeAll(second, first));



/*  removeAll = (second, first) =>{

} */
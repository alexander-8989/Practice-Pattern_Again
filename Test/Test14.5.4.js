// Question - 70

function findPair(num, target) {
    for (let i = 0; i < num.length - 1; i++) {
        for (let j = i + 1; j < num.length; j++) {
            if (num[i] + num[j] == target) {
                console.log("Pair found (" + num[i] + "," + num[j] + ")");

                return;
            }
        }
    }
    console.log("Pair not found");
}
let num = [8,1,2];
let target = 15;
findPair(num, target);
let n = 5;
let print = "";

for (let i = 1; i <= (2*n)-1; i++) {
    for (let j = 1; j <= n; j++) {
        if (j <= n + 1 - i || j <= i - n + 1) {
            print += " *";
        }
        else {
            print += "  ";
        }
    }
    print += "\n";
}
console.log(print);




// * * * * *
// * * * *  
// * * *    
// * *      
// *        
// * *      
// * * *    
// * * * *  
// * * * * *
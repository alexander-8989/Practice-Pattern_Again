let n = 9;
let print = "";

for(let i=1; i<=n; i++){
    for(let j=1; j<=(n+1)/2; j++){
        if(j>=i || j>=(n+1)-i){
            print += " *";
        }
        else{
            print += "  ";
        }
    }
    print += "\n";
}
console.log(print);



//  * * * * *
//    * * * *
//      * * *
//        * *
//          *
//        * *
//      * * *
//    * * * *
//  * * * * *
let n = 5;
let print = "";

for(let i=1; i<=n; i++){
    for(let j=1; j<=(2*n-1); j++){
        if(j>=i && j<(2*n)/2+i){
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
//    * * * * *      
//      * * * * *    
//        * * * * *  
//          * * * * *

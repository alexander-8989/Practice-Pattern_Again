let n = 5;
let print = "";

for(let i=1; i<=(n+1); i++){
    for(let j=1; j<=n; j++){
        if(j==1 || i==1 || i==(n+1)/2){
            print += " *";
        }
        else{
            print += "  ";
        }
    }
    print += "\n";
}
console.log(print);
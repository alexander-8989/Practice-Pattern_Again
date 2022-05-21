let n = 5;
let print = "";

for(let i=1; i<=n; i++){
    for(let j=1; j<=n; j++){
        if(i==1 || j==1 || i==n){
            print += " *";
        }
        else{
            print += " ";
        }
    }
    print += "\n";
}
console.log(print);
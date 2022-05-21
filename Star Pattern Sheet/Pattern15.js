let n = 5;
let print = "";

for(let i=1; i<=n; i++){
    for(let j=1; j<=i; j++){
        if(j==1 || i==n || i==j){
            print += " *";
        }
        else{
            print += "  ";
        }
    }
    print += "\n";
}
console.log(print);
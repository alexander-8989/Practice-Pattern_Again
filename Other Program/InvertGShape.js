let n = 4;
let print = "";

for(let i=1; i<=2*n-1; i++){
    for(let j=1; j<=n; j++){
        if(i==1 || j==n || i==2*n-1 || i>=(2*n)/2){
            print += " *";
        }
        else{
            print += "  ";
        }
    }
    print += "\n";
}
console.log(print);
let n = 5;
let print = "";

for(let i=1; i<=n; i++){
    for(let j=1; j<=n; j++){
        if(j>=i && j<n-i+1 || i+j == n+1){
            print += " *";
        }
        else{
            print += "  ";
        }
    }
    print += "\n";
}
console.log(print);
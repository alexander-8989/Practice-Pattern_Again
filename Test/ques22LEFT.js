// 22 (LEFT)

let n = 35;
let print = "";
let k = 0;
let m = 2*n-1;

for(let i=1; i<=2*n-1; i++){
    for(let j=1; j<=2*n-1; j++){
        if(j>=i && j<=i+k && i<=n || j>=2*n-i && j<=m && i>=n){
            print += " *";
        }
        else{
            print += "  ";
        }
    }
    if(i>=n){
        m = m-2;
    }
    k=i;
    print += "\n";
}
console.log(print);
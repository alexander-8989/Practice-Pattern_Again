let n = 5;
let print = "";

for(let i=1; i<=n; i++){
    let k = 1;
    for(let j=1; j<=(2*n)-1; j++){
        if(j>=n+1-i && j<= n-1+i && k){
            print += k;
            k = 0;
        }
        else{
            print += " ";
            k = 1;
        }
    }
    print += "\n";
}
console.log(print);
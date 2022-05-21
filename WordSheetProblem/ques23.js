let n = 5;
let print = "";


for(let i=1; i<=n; i++){
    for(let j=1; j<=i; j++){
        if(j % 2 == 0 ){
            print += 1;
        }
        else{
            print += 0;
        }
    }
    print += "\n";
}
console.log(print);
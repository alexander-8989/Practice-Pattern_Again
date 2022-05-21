let n = 7;
let string = "";

for(let i=1; i<=n; i++){
    for(let j=1; j<=n; j++){
        if(i+j == n+1){
            string += "*";
        }
        else if(i==j && i<=n/2){
            string += "*";
        }
        else{
            string += " ";
        }
    }
    string += "\n";
}
console.log(string);
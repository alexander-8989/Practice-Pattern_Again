let n = 5;
let string = "";

for(let i=1; i<=n; i++){
    for(let j=1; j<=n; j++){
        if(i==j){
        string += "*";
        }
        else if(i+j == n+1 && j>=n/2){
            string += "*";
        }
        else{
            string += " ";
        }
    }
    string += "\n";
}
console.log(string);
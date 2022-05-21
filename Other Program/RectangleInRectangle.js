let n = 9;
let string = "";

for(let i=1; i<=n; i++){
    for(let j=1; j<=n; j++){
        if(i==1 || i==n || j==1 || j==n){
            string += " *";
        }
        else if(i>=(n+1)/2-1 && i<=(n+1)/2+1 && j>=(n+1)/2-1 && j<=(n+1)/2+1 && (i==(n+1)/2-1 || i==(n+1)/2+1 || j==(n+1)/2-1 || j==(n+1)/2+1)){
            string += " *";
        }
        else{
            string += "  "  ;
        }
    }
    string += "\n";
}
console.log(string);
let p = "SARAH";
let l = p.length;
let string = "";

for(let i=0; i<l; i++){
    for(let j=0; j<l; j++){
         if(j==0){
            string += p[i];
        }
        else if(i==l-1){
            string += p[l-j-1];
        }
        else if(j==l-1){
            string += p[l-i-1];
        }
        else{
            string += " ";
        }
    }
    string += "\n";
}
console.log(string);
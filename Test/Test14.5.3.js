// Question - 67

let vowelCount = 0;
let consoCount = 0;

let str = "Kevin Garg";

str = str.toLowerCase();

for(let i=0; i<str.length; i++){
    if(str.charAt(i) == 'a' || str.charAt(i) == 'e' || str.charAt(i) == 'i' || str.charAt(i) == 'o' || str.charAt(i) == 'u'){
        vowelCount++;
    }
    else if(str.charAt(i) >= 'a' && str.charAt(i) <= 'z'){
        consoCount++;
    }
}
console.log(`The no. of vowel in ${str} is : ` + vowelCount);
console.log(`The no. of consonent in ${str} is : ` + consoCount);
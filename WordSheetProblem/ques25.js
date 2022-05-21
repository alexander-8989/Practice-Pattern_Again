// let n = 5;
// let print = "";
// let k = 1;

// for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= n; j++) {
//         if (j>=n+1-i) {
//             print += ;
//         }
//         else{
//             print += " ";
//         }
//     }
//     print += "\n";
// }
// console.log(print);\


let n = 5;
let print = "";

for(let i=1;i<=n;i++)
{
  for(let j=i;j>=1;j--)
  {
   print += j;           
  }
  print += "\n";           
}
console.log(print);
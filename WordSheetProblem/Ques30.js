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
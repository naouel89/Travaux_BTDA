let x = parseInt(prompt("Entrez un nombre entier X : "));
let n = parseInt(prompt("Entrez le nombre de multiplications N: "));

document.write("Les", +n,+ "premiers multiples de", +x,+ "sont :");

for (let i = 1; i <= n; i++) 
{
  document.write(x * i);
}

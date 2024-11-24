let first=["Ricordati che se sei triste,", "Non ti nascondere:", "Qualunque cosa accada,", "Un uomo saggio disse: "];
let second=["sei stupido", "non c'è cosa piu' piena di una cronologia vuota"];
let num1=4;
let num2=2;
const quote = document.getElementById("quote");
function makeQuote()
{
    quote.innerText=first[Math.floor(Math.random() * (num1-1 - 0 + 1)) + 0] + second[Math.floor(Math.random() * (num2-1 - 0 + 1)) + 0];
}
const button = document.getElementById("click");
button.addEventListener("click", makeQuote);
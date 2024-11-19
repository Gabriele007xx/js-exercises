const local_ip="198.162.1."
const list = document.getElementById("list");
let indirizzi = [];

generateRandomAndress()
{
    return local_ip + Math.floor(Math.random() * (255 - 2 + 1)) + 2;
}

addAndress()
{
  let andress = generateRandomAndress();
  while(indirizzi.includes(andress))
  {
    andress = generateRandomAndress();
  }
  indirizzi = [...indirizzi, andress];
  const li = document.createElement("li");
  li.innerHTML=andress;
  list.appendChild(li);
}  

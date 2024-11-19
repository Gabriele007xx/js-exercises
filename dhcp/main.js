const local_ip="198.162.1."

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
}  

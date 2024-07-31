const text = document.getElementById("text");
const input = document.getElementById("input");
const button = document.getElementById("button");
function random()
{
    const random = Math.floor(Math.random() * (5 - 3 + 1)) + 3;
    for (let i = 0; i < random; i++) 
    {
         string += "o";
     }
     return string;
}

function translate()
{
  const string = input.value.split(" ");
  for(let i = 0; i++; i<string.lenght)
  {
      text.textContent = text.textContent + random() + "ga b" + random() + "ga ";
  }
}
button.addEventListener("click", translate);

const text = document.getElementById("text");
const input = document.getElementById("input");
const button = document.getElementById("button");
function random()
{
    const random = Math.floor(Math.random() * (5 - 3 + 1)) + 3;
    let string = "";
    for (let i = 0; i < random; i++) 
    {
         string += "o";
     }
     return string;
}

function translate()
{
  text.textContent = "";
  const string = input.value.split(" ");
  for(let i = 0; i<string.length; i++)
  {
      text.textContent = text.textContent + random() + "ga b" + random() + "ga ";
  }
}
button.addEventListener("click", translate);

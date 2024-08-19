const text = document.getElementById("textbox");
const character = document.getElementById("ctextbox");
const button = document.getElementById("count");
const result = document.getElementById("result");

function countNumberOf(char)
{
  const array = text.value.split(char);
  return array.length - 1;
}

function changeResult()
{
  if(character.value == '')
  {
    alert("Inserire un carattere");
  }
  else
  {
    result.textContent = "Numero caratteri: " + countNumberOf(ctextbox.value);
  }
}

button.addEventListener("click", changeResult);

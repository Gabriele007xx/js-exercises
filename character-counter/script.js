const text = document.getElementById("textbox");
const character = document.getElementById("ctextbox");
const button = document.getElementById("count");
const result = document.getElementById("result");

function countNumberOf(char)
{
  const array = text.value.split(char);
  return array.length;
}

function changeResult()
{
  if(character.value == '')
  {
    alert("Inserire un carattere");
  }
  else
  {
    result.textContent = "Numero caratteri: " + countNumberOf(ctextbox.value) - 1;
  }
}

button.addEventListener("click", changeResult);

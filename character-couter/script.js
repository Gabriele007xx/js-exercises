const text = document.getElementById("texbox");
const character = document.getElementById("ctexbox");
const button = document.getElementById("action");
const result = document.getElementById("result");

function countNumberOf(char)
{
  const array = text.value.split(char);
  return array.length;
}

function changeResult()
{
  if(ctextbox.tvalue == '')
  {
    alert("Inserire un carattere");
  }
  else
  {
    result.value = "Numero caratteri: " + countNumberOf(ctextbox.value);
  }
}

button.addEventListener("click", changeResult);

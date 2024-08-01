const button = document.getElementById("submit");
const result = document.getElementById("result");

function calculateResult()
{
    if(!document.querySelector('input[name="q1"]:checked') || !document.querySelector('input[name="q2"]:checked') || !document.querySelector('input[name="q3"]:checked'))
    {
        window.alert("RISPONDI ALLE DOMANDE!");
        return;
    }
    let score = parseInt(document.querySelector('input[name="q1"]:checked').value) + parseInt(document.querySelector('input[name="q2"]:checked').value) + parseInt(document.querySelector('input[name="q3"]:checked').value);
    result.textContent = "Vali " + score + " scimmie";
}

button.addEventListener("click", calculateResult);
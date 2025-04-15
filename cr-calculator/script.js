const result = document.getElementById("result");
const calculateButton = document.getElementById("calculate-button");

calculateButton.addEventListener("click", function () {
const hp=document.forms["input"]["hp"];
const dmg=document.forms["input"]["dmg"];
const lvl=document.forms["input"]["lvl"];

let hpValue = parseInt(hp.value);
let dmgValue = parseInt(dmg.value);

for(let i=1; i<=parseInt(lvl.value)-15;i++)
{
    hpValue=hpValue*1.1;
    dmgValue=dmgValue*1.1;
}
result.innerText="Stats: " + hpValue + " Health, " + dmgValue + " Damage";
});

document.forms["input"].addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting
});
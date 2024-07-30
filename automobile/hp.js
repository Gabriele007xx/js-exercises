document.getElementById("nmrpmtohp").addEventListener("click", function(){
    document.getElementById("resultnmrpmtohp").textContent = NmRpmToHp(document.getElementById("nm").value, document.getElementById("rpm").value);
});

document.getElementById("kwtohp").addEventListener("click", function(){
    document.getElementById("resultkwtohp").textContent = KwToHp(document.getElementById("kw").value);
});

function NmRpmToHp(nm, rpm) {
    return (nm * rpm) / 7127;
}

function KwToHp(kw) {
   return kw*1.34102;
}
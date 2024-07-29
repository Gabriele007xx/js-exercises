document.getElementById("nm")

function convertNmRpmToHp(nm, rpm) {
    return (nm * rpm) / 7127;
}

function convertKwToHp(kw) {
   return kw*1.34102;
}

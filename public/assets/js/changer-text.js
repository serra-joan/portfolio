const textChange = document.getElementById("txtSubtitle");
const txtArray = ["diseño responsivo", "código limpio", "tendencias actuales", "seguridad de datos", "experiencia de usuario", "innovación"];
const interval = setInterval(startNewText, 3000);

let countArray = 0;

document.addEventListener("DOMContentLoaded", function() {
    startNewText();
});

function startNewText(){
    textChange.innerText = "";
    setNewText(txtArray[countArray], 0);

    countArray++;
    if(countArray >= txtArray.length) countArray = 0;
}
function setNewText(text, index) {
    if(index < text.length) {
        textChange.innerHTML +=  text[index] === ' ' ? '&nbsp;' : text[index];
        index ++;

        setTimeout(setNewText, 100, text, index);
    }
}
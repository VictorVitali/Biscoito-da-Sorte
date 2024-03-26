function ToggleScreen() {
    document.querySelector(".screen1").classList.toggle("hide");
    document.querySelector(".screen2").classList.toggle("hide");
    text();
}
function text() {
    var number = Math.round(Math.random() * 2 + 1);
    console.log(number);
    switch (number) {
        case 1:
            document.querySelector(".screen2 .sorte p").innerText = 'Tente a sua sorte! A vida é feita de oportunidades. O homem que vai mais longe é quase sempre aquele que tem coragem de arriscar.'
            break;

        case 2:
            document.querySelector(".screen2 .sorte p").innerText = 'A perseverança é a mãe da boa sorte.'
            break;
        case 3:
            document.querySelector(".screen2 .sorte p").innerText = 'Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.'
            break;
    }
}
const TumBloklar = document.getElementById("container");
const SiraBelirtici = document.getElementById("player");
const SonucEkrani = document.getElementById("result");
const Button = document.getElementById("restart");
Button.style.display = "none";
var sayac = 1;
let SiraBelirtecDegiskeni = "X";
let TiklananKutular = [];

for (var KontrolDegiskeni = 0;KontrolDegiskeni <9;KontrolDegiskeni++) {
    TumBloklar.children[KontrolDegiskeni].addEventListener("click",startGame);    
}

function startGame() {
    if (this.classList[1] != "tiklandi") {
        this.classList.add("tiklandi");
        this.children[0].innerText = SiraBelirtecDegiskeni;
        kontrol_beraberlik()
        kontrol_satirlar()
        kontrol_sutunlar()
        kontrol_capraz()
        if (SiraBelirtecDegiskeni == "X") SiraBelirtecDegiskeni = "0";
        else SiraBelirtecDegiskeni ="X";
        SiraBelirtecDegiskeni.innerText = SiraBelirtecDegiskeni + " 'in Sırası";
    }
    else {
        alert("Lütfen başka bir seçim yapınız!");        
    }
    }
    
function kontrol_satirlar() {
    if (TumBloklar.children[0].textContent == TumBloklar.children[1].textContent && TumBloklar.children[0].textContent == TumBloklar.children[2].textContent && TumBloklar.children[0].textContent !== "") sonuc ()
    if (TumBloklar.children[3].textContent == TumBloklar.children[4].textContent && TumBloklar.children[3].textContent == TumBloklar.children[5].textContent && TumBloklar.children[3].textContent !== "") sonuc()
    if (TumBloklar.children[6].textContent == TumBloklar.children[7].textContent && TumBloklar.children[6].textContent == TumBloklar.children[8].textContent && TumBloklar.children[3].textContent !== "") sonuc()
     
}

function kontrol_sutunlar() {
    if (TumBloklar.children[0].textContent == TumBloklar.children[3].textContent && TumBloklar.children[0].textContent == TumBloklar.children[6].textContent && TumBloklar.children[0].textContent !== "") sonuc()
    if (TumBloklar.children[1].textContent == TumBloklar.children[4].textContent && TumBloklar.children[1].textContent == TumBloklar.children[7].textContent && TumBloklar.children[1].textContent !== "") sonuc()
    if (TumBloklar.children[2].textContent == TumBloklar.children[5].textContent && TumBloklar.children[2].textContent == TumBloklar.children[8].textContent && TumBloklar.children[2].textContent !== "") sonuc()
       
}

function kontrol_capraz() {

    if (TumBloklar.children[0].textContent==TumBloklar.children[4].textContent && TumBloklar.children[0].textContent == TumBloklar.children[8].textContent && TumBloklar.children[0].textContent !== "") sonuc()
    if (TumBloklar.children[2].textContent==TumBloklar.children[4].textContent && TumBloklar.children[2].textContent == TumBloklar.children[6].textContent && TumBloklar.children[2].textContent !== "") sonuc()
}

function sonuc() {
    document.querySelector("#body").style.background = "#363636";
    Button.style.display = "block";
    SonucEkrani.style.display = "block";
    SonucEkrani.innerText = SiraBelirtecDegiskeni + " Kazandı !";
}

function kontrol_beraberlik() {
    for (KontrolDegiskeni = 0; KontrolDegiskeni <9; KontrolDegiskeni++) {
        if (TumBloklar.children[KontrolDegiskeni].classList[1] == "tiklendi") {
            sayac +=1; break;
        }
    }
    if (sayac == 10) {
        document.querySelector("#body").style.background = "#363636";
        Button.style.display = "block";
        SonucEkrani.style.display = "block";
        SonucEkrani.innerText = "Berabere !";
    }


}



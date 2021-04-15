let mh = document.querySelector(".hand.minute");
let sh = document.querySelector(".hand.second");
let hh = document.querySelector(".hand.hour");

let d = new Date();
let S = d.getSeconds() + d.getMinutes() * 60 + d.getHours() * 3600;

let s = S;
setInterval(secHand, 1000);

function secHand() {
    if(s == 61)
        s = 1;
    let sec = s * 6;
    let min = s * 1 / 10;
    let hrs = s * 1 / 120;
    sh.style.setProperty("--rotation", sec);
    mh.style.setProperty("--rotation", min);
    hh.style.setProperty("--rotation", hrs);
    s++;
  }

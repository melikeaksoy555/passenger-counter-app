const incrementBasligi = document.getElementById("counter-el");

let ilkSayi = 0;

function increment(){
   ilkSayi =  ilkSayi + 1;
   
   incrementBasligi.innerHTML = ilkSayi;
}



let trial = 4;
let rand = Math.floor(Math.random() * 100) + 1;
kontrol = false;
var guess = prompt(`5 Giris hakkiniz var.1-100 arasi bir tahmin giriniz: `);
while(trial >= 1){   
    if (guess < rand) {
        guess = prompt(`${trial} Giris hakkiniz var.Daha büyük bir sayi giriniz:`)
     } else if(guess > rand){
        guess = prompt(`${trial} Giris hakkiniz var.Daha kücük bir sayi giriniz:`)
     } else if (guess == rand) {
    prompt('Tebrikler dogru tahmin')
    break;
     }    
 trial = trial - 1
}
if (guess!=rand){
alert(`Sayi ${rand} . Malesef bilemediniz.`)
}

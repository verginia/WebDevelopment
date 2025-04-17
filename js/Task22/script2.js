/*
1. Creează o pagină HTML cu un buton care are textul "Schimbă culoarea".
 La click, butonul să își schimbe culoarea de fundal în albastru.

Sugestie pentru rezolvare:
-> Creează un buton în HTML.
-> Folosește addEventListener pentru a adăuga un eveniment de tip click.
-> Modifică stilul butonului folosind .style.backgroundColor.
 */

const buton = document.getElementById("colorChange")

buton.addEventListener("click", function() {
    console.log("Clicked!");
    buton.style.backgroundColor = "blue";
})
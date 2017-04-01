"use strict";

var liczba1 = 13, liczba2 = 5;
var wynik;

wynik = liczba1 % liczba2;
console.log(wynik);

while (liczba2 < liczba1) {
	console.log(liczba1);
	--liczba1;
}

//jeżeli nieprawda że któryś warunek to prawda:)
if (!("2" === 2) || ( 8 < 4)) {
	console.log("prawda");
} else {
	console.log("Nieprawda");
}
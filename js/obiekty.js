"use strict";

var kaja = {
	imie: "Kaja",
  wzrost: 152,
	przedstawOsobe: function() {console.log(this.imie)}
}

var krystian = {
	imie: "Krystian",
  wzrost: 180,
	przedstawOsobe: function() {console.log(this.imie)}
}

kaja.przedstawOsobe();
krystian.przedstawOsobe();

console.log(kaja.wzrost);
console.log(kaja);

// rozkminić to jak i dlaczego to działa
function Osoba(imie, nazwisko) {
	this.imie = imie;
	this.nazwisko = nazwisko;
	this.wzrost;
	this.oczy;
	this.wyswietlInfo = function() {
		console.log( "Imię: " + this.imie + "\n"
							 + "Nazwisko: " + this.nazwisko + "\n" 
							+ "Wzrost: " + this.wzrost + "\n"
							+ "Oczy: " + this.oczy);
	}
}

var konrad = new Osoba('Konrad', 'Kowalczyk');

konrad.wzrost = 180;
konrad.oczy = 'niebieskie';

konrad.wyswietlInfo();


// nowa instancja
var osoba = {
	imie: "marcin",
	wzrost: 180,
	wyswietlDetale: function() {
		console.log(this.imie + " " + this.wzrost )
	}
}

osoba["imie"] = "Kasia";
osoba.wzrost = 170;
osoba.oczy = "niebieskie";

osoba.wyswietlDetale();
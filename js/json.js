"use strict";

var jsonOsoby = {
	"osoby": [
		{
			imie: "Krystian",
			nazwisko: "Dziopa",
			wzrost: 180,
			oczy: "niebieskie",
			zainteresowania: [
				{nazwa: "podroze"},
				{ nazwa: "gotowanie"}
			] 
		},
		{
			imie: "Dominik",
			nazwisko: "Gomuła",
			wzrost: 170,
			oczy: "brazowe",
			zainteresowania: [
				{nazwa: "jezyki"},
				{ nazwa: "gotowanie"}
				]
		},
		{
			imie: "Claudia",
			nazwisko: "Zelazowska",
			wzrost: 167,
			oczy: "brazowe",
			zainteresowania: [
				{nazwa: "jezyki"},
				{ nazwa: "gotowanie"},
				{ nazwa: "podroze"}
				]
		}
	]
}

console.log(jsonOsoby);

jsonOsoby.osoby[2].zainteresowania.forEach(function(element, i){
	console.log(element.nazwa);
});
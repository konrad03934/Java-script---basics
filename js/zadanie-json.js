"use strict";

var jsonPracownicy = {
	"pracownicy" : [
	  {firstname: "Krystian", lastName: "Dziopa"},
		{firstname: "Anna", lastName: "Szapiel"},
		{firstname: "Piotr", lastName: "Żmuda"},
	]
}

jsonPracownicy.pracownicy.forEach(function(element, index) {
	console.log(element.firstname + ": " + element.lastName + ": " + index);
})

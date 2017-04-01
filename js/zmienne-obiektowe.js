"use strict";

var student = {
	imie: "kaja",
	wzrost: 152,
	wyswietlDane: function() {console.log(this.imie);}
}

student.wyswietlDane();
console.log(student);
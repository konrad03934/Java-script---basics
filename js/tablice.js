var imiona = ['Monika', 'Krystian', 'Łukasz'];

imiona[3] = 'Tania';
imiona[2] = 'Ela'

//puch dodaje na koniec
imiona.push('Geralt');
console.log(imiona);

//pop kasuje ostatni element
imiona.pop();
console.log(imiona);

//unshift dodaje na poczatku a shift usuwa
imiona.unshift('mikołaj');

imiona.push('Kaja');
console.log(imiona);


console.log(imiona);

for (var i = 0; i < imiona.length; i++) {
	console.log(imiona[i]);
}
//łatwiejsza wersja dla for bo sam szuka ile elementów
imiona.forEach(function(element, i) {
							 console.log('Element nr ' + i + '=' + element);
							 });

console.log(imiona.join(':-)'));
//
console.log(imiona.sort());

imiona.reverse();
console.log(imiona);

var imionaMeskie = ['Robert', 'Michał', 'Dzidek'];

var zbioryimion = imionaMeskie.concat(imiona);
console.log(zbioryimion);

console.log(zbioryimion.indexOf('Michał'));

console.log( Array.isArray(zbioryimion));

console.log(zbioryimion.slice(2, 5));
//cos zjebalem sprawdzic!!!!!!!!
console.log(zbioryimion.splice(2,3 , "Julek", "Krzysiek"));

console.log(zbioryimion.toString());



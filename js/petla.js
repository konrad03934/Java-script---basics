//pętla for 

/*
for (var i = 10; i>0; i-- ) {
	console.log(i);
}
*/

// jeżeli nie dopiszemy it++ to sie zawiesi bo it bedzie zawsze równe 0 i nie bedzie rosło
/*var it = 0;
while( it < 10) {
	console.log(it);
	it++;
}*/


//uzywane np do walidacji tego co zostało wprwadzone, 
/*var iter = 20;
do {
	console.log(iter);
	iter++;
} while (iter < 10)*/


// rozkminić to
/*var a = 0;
while ( a < 10 ) {
	console.log(++a);
	
	if ( a == 5) {
		break
	}
}*/

for ( var b = 0; b < 10; ++b) {
	if ( b == 5 ) {
		continue;
	} else {
		console.log(b);
	}
	console.log("---");
	}

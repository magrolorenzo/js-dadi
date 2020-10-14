

// Valore primo dado
var dado1 = Math.floor( (Math.random() * 6) + 1 );
document.getElementById('dado-1').innerHTML = dado1 ;

// Valore primo dado
var dado2 = Math.floor( (Math.random() * 6) + 1 );
document.getElementById('dado-2').innerHTML = dado2 ;

if ( dado1 > dado2 ){
    document.getElementById('dado-1').style.color = "green";
    document.getElementById('dado-2').style.color = "red";
    document.getElementById('dado-1-title').innerHTML += ' vince!'
    document.getElementById('dado-2-title').innerHTML += ' perde!'

} else if ( dado1 < dado2 ) {
    document.getElementById('dado-2').style.color = "green";
    document.getElementById('dado-1').style.color = "red";
    document.getElementById('dado-2-title').innerHTML += ' vince!'
    document.getElementById('dado-1-title').innerHTML += ' perde!'

} else {
    document.getElementById('dado-2').style.color = "yellow";
    document.getElementById('dado-1').style.color = "yellow";
}

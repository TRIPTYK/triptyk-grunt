'use strict'; /* global somme */

function somme() {
	return 'somme';
}

function supprimeVoyelle(sId) {
	return sId.replace(/a|e|i|o|u/gi, '');
}
supprimeVoyelle('rrrdfg');
somme();
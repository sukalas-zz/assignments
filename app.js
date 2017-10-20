// This is just a simple sample code to show you the usage of the api
// Feel free to rewrite and improve or delete and start from scratch
let main = function(){
	loadPage();
	window.onhashchange = loadPage;

function loadPage(event, rpp, more){
	// num = 0; // Reinitialize global var Counter 
	let m = more;
	let hashUrl = location.hash.toString();
	const url = hashUrl.substr(1, hashUrl.length);
	fadeOut(`footer`);
	getter(`${url}`, m);
}
h.q('footer').onclick = (e) => {
	rpp = {min:rpp.max, max:rpp.max+25};
	loadPage(rpp);
	more = true;
};
}
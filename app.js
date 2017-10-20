// This is just a simple sample code to show you the usage of the api
// Feel free to rewrite and improve or delete and start from scratch
let main = function(){
	loadPage();
	window.onhashchange = loadPage;
	var more = false;

function loadPage(event, rpp){
	num = 0; // Reinitialize global var Counter 
	let hashUrl = location.hash.toString();
	const url = hashUrl.substr(1, hashUrl.length);
	fadeOut(`footer`);
	getter(`${url}`);
}
// h.q('footer').onclick = (e) => {
// 	rpp = {min:rpp.max, max:rpp.max+25};
// 	loadPage(rpp);
// };
}
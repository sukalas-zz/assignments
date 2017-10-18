// This is just a simple sample code to show you the usage of the api
// Feel free to rewrite and improve or delete and start from scratch
let main = function(){
	loadPage();

	function loadPage(event){
		let hashUrl = location.hash.toString();
		const url = hashUrl.substr(1, hashUrl.length);
		num = 0;
		fadeOut(`footer`);
		switch(url){
			case 'newest':
			getter(`newstories`);
			break;
			case 'comments':
			getter(`newcomments`);
			break;
			case 'user':
			getter(`user`);
			break;
			default:
			getter(`home`);
		}
	}

	window.onhashchange = loadPage;

	h.q('footer').onclick = (e) => {
		rpp = {min:rpp.max, max:rpp.max+25};
		more = true;
		getter();
	};
}

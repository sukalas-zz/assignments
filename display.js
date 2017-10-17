var h = new Helpers(); //initialize helpers

window.addEventListener("scroll", enchanceVis);

function effects(){
	h.q("i").style.opacity = 0;
	h.q("i").style.display = "none";
	h.i("app").style.visibility = "visible";
	h.i("app").style.opacity = 1;
}

function enchanceVis() {
	let obj = h.i('list');
	let navBar = h.i('nav');
	let navItems = h.cl('nav-item');
	let rect = obj.getBoundingClientRect();
	navBar.className = (rect.top <=0) ? `navbar navbar-expand-md navbar-light sticky-top navScrolled` : `navbar navbar-expand-md navbar-light sticky-top`;
	for(item of navItems){item.className = (rect.top <=0) ? `whiteFont nav-item nav-link` : `darkFont nav-item nav-link`;}
}
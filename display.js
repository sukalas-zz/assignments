var h = new Helpers(); //initialize helpers

window.addEventListener("scroll", toggleNav);

function fadeIn(el){
	h.q(`${el}`).style.display = "block";
	h.q(`${el}`).style.opacity = 1;
}

function fadeOut(el){
	h.q(`${el}`).style.opacity = 0;
	h.q(`${el}`).style.display = "none";
}

function toggleNav() {
	let obj = h.i('list');
	let navBar = h.i('nav');
	let navItems = h.cl('nav-item');
	let rect = obj.getBoundingClientRect();
	navBar.className = (rect.top <=0) ? `navbar navbar-expand-md navbar-light sticky-top navScrolled` : `navbar navbar-expand-md navbar-light sticky-top`;
	for(item of navItems){item.className = (rect.top <=0) ? `whiteFont nav-item nav-link` : `darkFont nav-item nav-link`;}
}
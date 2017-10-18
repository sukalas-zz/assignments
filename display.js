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
	let navItems = h.q('.navbar-nav');
	let rect = obj.getBoundingClientRect();
	navBar.className = (rect.top <=0) ? `navbar navbar-expand-lg navbar-light darken-4 sticky-top navScrolled` : `navbar navbar-expand-lg navbar-light orange sticky-top`;

	for(item of navItems.children){item.className = (rect.top <=0) ? `whiteFont nav-link` : `darkFont nav-link `;}
	h.i('login').className = (rect.top <=0) ? `whiteFont` : `darkFont`;
}

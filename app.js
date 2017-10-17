// This is just a simple sample code to show you the usage of the api
// Feel free to rewrite and improve or delete and start from scratch
let main = function(){
	let data = new Array();
	
	function processStory (event) {
		let story = JSON.parse(event.currentTarget.response);
		let list = h.q('.list-group');
		list.innerHTML += `<li class='list-group-item'>${story.title}</li>`; // Faster than appendChild
		fadeOut(`i`);
		fadeIn(`#app`);
	}

	function renderStory (storyId) {
		let getStory = new XMLHttpRequest();
		getStory.addEventListener('load', processStory);
		getStory.open('GET', 'https://hacker-news.firebaseio.com/v0/item/' + storyId + '.json');
		getStory.send();
	}
		
	function processList (event) {
		let min = 0, max = 20;
		let prevDataList = h.q(`.list-group`); // Grab the parent of the list
		fadeIn(`i`);
		while (prevDataList.firstChild) prevDataList.removeChild(prevDataList.firstChild) //Remove previous parsed data list
		let storiesList = JSON.parse(event.currentTarget.response);
		data = storiesList.slice(min, max);
		data.map(renderStory);
	}

	function getter(string){
		let url = {
			topstories:`https://hacker-news.firebaseio.com/v0/topstories.json`,
			newstories:`https://hacker-news.firebaseio.com/v0/newstories.json`,
			newcomments:`https://hacker-news.firebaseio.com/v0/comments.json`
		}

		let urlReq;
		let respArr = new Array();

		if(string === `newstories`) {
			urlReq = url.newstories;
		}
		else if(string === `newcomments`) {
			urlReq = url.newcomments;
		}
		else {
			urlReq = url.topstories; // Top stories
		}

		let xmlHttp = new XMLHttpRequest();

		xmlHttp.onreadystatechange = function() {

	        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
	        	respArr = xmlHttp.responseText;
	    	}
			xmlHttp.addEventListener('load', processList);
			xmlHttp.open('GET', urlReq, true); //Asynchronous
			xmlHttp.send( null );
	}

	loadPage()

	function loadPage(event){
		let hashUrl = location.hash.toString();
		const url = hashUrl.substr(1, hashUrl.length);

		switch(url){
			case 'newest':
			getter(`newstories`);
			break;
			case 'comments':
			getter(`newcomments`);
			break;
			default:
			getter(`home`);
		}
	}

	window.onhashchange = loadPage;















	// <div class="navbar-nav">
	// 	<a class="nav-item nav-link" href="newest">new</a>
	// 	<a class="nav-item nav-link" href="newcomments">comments</a>
	// 	<a class="nav-item nav-link" href="show">show</a>
	// 	<a class="nav-item nav-link" href="ask">ask</a>
	// 	<a class="nav-item nav-link" href="jobs">jobs</a>
	// 	<a class="nav-item nav-link" href="submit">submit</a>
	// </div>

}

// This is just a simple sample code to show you the usage of the api
// Feel free to rewrite and improve or delete and start from scratch
let main = function(){
	let data = new Array();
	
	function processStory (event) {
		let story = JSON.parse(event.currentTarget.response);
		let list = h.q('.list-group');
		let storyItem = h.c('li');
		storyItem.className = 'list-group-item';
		storyItem.innerText = story.title;
		list.appendChild(storyItem);
		effects();
	}
	
	function renderStory (storyId) {
		let getStory = new XMLHttpRequest();
		getStory.addEventListener('load', processStory);
		getStory.open('GET', 'https://hacker-news.firebaseio.com/v0/item/' + storyId + '.json');
		getStory.send();
	}

	function processList (event) {
		let storiesList = JSON.parse(event.currentTarget.response);
		data = storiesList;
		data.map(renderStory);
	}

	let getStoriesListRequest = new XMLHttpRequest();
	getStoriesListRequest.addEventListener('load', processList);
	getStoriesListRequest.open('GET', 'https://hacker-news.firebaseio.com/v0/topstories.json');
	getStoriesListRequest.send();


}

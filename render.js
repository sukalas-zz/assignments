let data = new Array();
var rpp = {min:0, max:25};
var more = false;
let num = 0;


function processStory (event) {
	let story = JSON.parse(event.currentTarget.response);
	num++;
	let list = h.q('.list-group');
	let comments = 0;

	try{story.kids.length>=1; comments = story.kids.length;}
	catch(err){}

	list.innerHTML += `
		<li class='list-group-item'>${num}.
			<p>
				<a href="${story.url}" target="_empty">${story.title}</a>
				<br>
				<span class="subtitle"><i class="fa fa-thumbs-o-up" aria-hidden="true"></i>&nbsp; | &nbsp;${story.score} points &nbsp; | &nbsp; by <user><a href="#user?${story.by}">${story.by}</a></user> &nbsp; | &nbsp; <i class="fa fa-comment-o" aria-hidden="true"></i> ${comments}</span>
			</p>
		</li>
	`; // Faster than appendChild

	fadeOut(`i`);
	fadeIn(`#app`);
	
	if(rpp.max <= num){
		fadeIn(`footer`);
	}
}

function renderStory (storyId) {
	let getStory = new XMLHttpRequest();
	getStory.addEventListener('load', processStory);
	getStory.open('GET', 'https://hacker-news.firebaseio.com/v0/item/' + storyId + '.json');
	getStory.send();
}

function cleanUp(){
	fadeIn(`i`);
	let prevDataList = h.q(`.list-group`); //Grab the parent of the list
	while (prevDataList.firstChild && !more) prevDataList.removeChild(prevDataList.firstChild) //Remove previous parsed data list
}

function limiter(stories){
	data = stories.slice(rpp.min, rpp.max);
	return data;
}

function parser(type, storyId){
	let storiesList = JSON.parse(event.currentTarget.response);
	console.log(storiesList)
	limiter(storiesList)
	return data.map(renderStory);
}

function processList (type) {
	cleanUp();
	parser();
}

function getter(string, username){
	"use strict";
	const prefixURL = `https://hacker-news.firebaseio.com/v0`;
	let urls = {
		topstories:`${prefixURL}/topstories.json`,
		newstories:`${prefixURL}/newstories.json`,
		newcomments:`${prefixURL}/comments.json`,
		user:`${prefixURL}/user/${username}/submitted.json`
	}

	let urlReq;
	let respArr = new Array();

	if(string === `newstories`) {
		urlReq = urls.newstories;
	}
	else if(string === `newcomments`) {
		urlReq = urls.newcomments;
	}
	else if(string === `user`) {
		urlReq = urls.user;
	}
	else {
		urlReq = urls.topstories; // Top stories
	}

	let xmlHttp = new XMLHttpRequest();

	xmlHttp.onreadystatechange = function() {
	    if (xmlHttp.readyState == 4 && xmlHttp.status == 200){
	    	// respArr = xmlHttp.responseText;
	    }
	}
	xmlHttp.addEventListener('load', processList);
	xmlHttp.open('GET', urlReq, true); //Asynchronous
	xmlHttp.send( null );
}

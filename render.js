//Global Variables
var data = new Array(); // Global array that holds the items
let rpp = {min:0, max:25}; // results per page object holder
var num = 0; // List counter Initializer
let type;
let itemId;
let more = false;

function parser(event){
	let itemsList = JSON.parse(event.currentTarget.response);
	limiter(itemsList)
	return data.map(renderItem);
}

function processList(event) {
	cleanUp();
	parser(event);
}

function getter(string, m){
	"use strict";
	num = 0;
	const prefixURL = `https://hacker-news.firebaseio.com/v0`;
	more = m;
	const api = {
		topstories:{
			url:`${prefixURL}/topstories.json`,
			type: `topstories`
		},		
		newstories:{
			url:`${prefixURL}/newstories.json`,
			type: `newstories`
		},
		newcomments:{
			url:`${prefixURL}/newcomments.json`,
			type: `newcomments`
		},		
		show:{
			url:`${prefixURL}/showstories.json`,
			type: `show`
		},		
		ask:{
			url:`${prefixURL}/askstories.json`,
			type: `ask`
		},		
		jobs:{
			url:`${prefixURL}/jobstories.json`,
			type: `jobs`
		}
	}
	let urlReq;
	let respArr = new Array();
	const regex = new RegExp("\\?", "g");

	if(typeof string !== 'undefined' && !regex.test(string)){
		// console.log(`Requested hash :${string}`)
		switch(string){
			case 'newstories':
			urlReq = api.newstories.url;
			type = api.newstories.type;
			break;
			case 'newcomments':
			urlReq = api.topstories.url;
			type = api.topstories.type;
			break;
			case 'show':
			urlReq = api.show.url;
			type = api.show.type;
			break;
			case 'ask':
			urlReq = api.ask.url;
			type = api.ask.type;
			break;
			case 'jobs':
			urlReq = api.jobs.url;
			type = api.jobs.type;
			break;
			default:
			urlReq = api.topstories.url; // Top stories is the default and homepage
			type = api.topstories.type; // Top stories is the default and homepage
		}
	}else{
		// console.log(`We are entering a specific item page`)
		const id = string.substr(string.indexOf("?")+1, string.length) // Get the ID after the questionmark
		urlReq = `https://hacker-news.firebaseio.com/v0/item/${id}/kids.json`;
		type = `items`;
	}
	
	// console.log(`Corresponding url: ${urlReq}`)
	ajax(urlReq)
}


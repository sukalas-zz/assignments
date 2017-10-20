function processItem (event) {
	let item = JSON.parse(event.currentTarget.response);
	num++;
	let list = h.q('.list-group');
	let comments = 0;
	let title;
	const alias = 'tap for the full question';
	let prevQuestion = '';

	try{ if(item.kids.length>=1)comments = item.kids.length }catch(err){}
	try{ if(item.url) url = item.url }catch(err){ item.url = 'hell'}
	try{ if(item.title) title = item.title }catch(err){}
	try{ item.text = cleanText = item.text.replace(/(<p[^>]+?>|<p>|<\/p>)/img, "");}catch(err){item.text = 'So much emptyness...';}
	// console.log(item)

	if(type === `ask`){
		prevQuestion = title ;
		html = `
		<li class='list-group-item' onclick="askToggle(this)">
				<div class="col-11 text-truncate questions" id="togglableHight" title="${alias}">
					<h6>${title}</h6>
					${item.text}
					<br>
					<span class="subtitle"><i class="fa fa-thumbs-o-up" aria-hidden="true"></i>&nbsp; | &nbsp;${item.score} points &nbsp; | &nbsp; by&nbsp;<user>
					<a href="">${item.by}</a></user> &nbsp; | &nbsp;<a href="#comments?${item.id}"><i class="fa fa-comment-o" title="tap for comment area" aria-hidden="true"></i></a> ${comments}</span>
				</div>
		</li>`; 
	}
	else if(type === `show`){
		html = `
		<li class='list-group-item'>
			<div class="col-11 stories" title="tap for full story">
				<a href="${url}" target="_empty"> <h6>${title}</h6></a>
				<span class="subtitle"><i class="fa fa-thumbs-o-up" aria-hidden="true"></i>&nbsp; | &nbsp;${item.score} points &nbsp; | &nbsp; by <user><a href="">
				${item.by}</a></user> &nbsp; | &nbsp; <a href="#comments?${item.id}"><i class="fa fa-comment-o" aria-hidden="true"></i></a> ${comments}</span>
			</div>
		</li>`; 
	}
	else if(type === `newcomments`){
		html = `
		<li class='list-group-item'>${num}.
		</li>`; 
	}
	else if(type === `items`){
		html = `
		<li class='list-group-item'>
				<div class="col-11 comments">
					${item.text}
					<br>
					<span class="subtitle"><i class="fa fa-thumbs-o-up" aria-hidden="true"></i>&nbsp; | &nbsp;<small>comment by</small>&nbsp;<user>
					<a href="">${item.by}</a></user> &nbsp; | &nbsp;<a href="#comments?${item.id}"><i class="fa fa-comment-o" aria-hidden="true"></i></a> ${comments}</span>
				</div>
		</li>
		`; 
	}
	else{
		html = 
		`<li class='list-group-item'>
				<div class="col-11 stories" title="go to ${url}">
					<a href="${item.url}" target="_empty"> <h6>${title}</h6></a>
					<span class="subtitle"><i class="fa fa-thumbs-o-up" aria-hidden="true"></i>&nbsp; | &nbsp;${item.score} points &nbsp; | &nbsp; by &nbsp;<user>
					<a href=""> ${item.by}</a></user> &nbsp; | &nbsp;<a href="#comments?${item.id}"><i class="fa fa-comment-o" title="tap for comment area" aria-hidden="true"></i></a> ${comments}</span>
				</div>
		</li>`; 
	}

	list.innerHTML += html;

	fadeOut(`i`);
	fadeIn(`#app`);
	if(rpp.max >= num){
		fadeIn(`footer`);
	}
}

function renderItem (id) {
	// console.log(`Inside renderItem id is: ${id}`)
	let getItem = new XMLHttpRequest();
	getItem.addEventListener('load', processItem);
	getItem.open('GET', 'https://hacker-news.firebaseio.com/v0/item/' + id + '.json');
	getItem.send();
}
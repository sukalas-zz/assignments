function cleanUp(type, who){
	fadeIn(`i`);
	let prevDataList = h.q(`.list-group`); //Grab the parent of the list
	while (prevDataList.firstChild && !more) prevDataList.removeChild(prevDataList.firstChild) //Remove previous parsed data list
}

function limiter(items){
	data = items.slice(rpp.min, rpp.max);
	return data;
}

function askToggle(elem){
	let togglable = elem.firstChild.nextElementSibling;
	togglable.className = (togglable.classList.contains(`text-truncate`)) ? `col-11 text-wrap  questions` : `col-11 text-wrap text-truncate  questions`;
} 
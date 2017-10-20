function ajax(url){
	let xmlHttp = new XMLHttpRequest();
	xmlHttp.onreadystatechange = function() {
	    if (xmlHttp.readyState == 4 && xmlHttp.status == 200){
	    	respArr = xmlHttp.responseText;
	    	// console.log(respArr) 
	    }
	}
	xmlHttp.addEventListener('load', (respArr) => {
		processList(respArr);
	});

	xmlHttp.open('GET', url, true); //Asynchronous
	xmlHttp.send( null );
}

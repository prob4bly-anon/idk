let xhr = new XMLHttpRequest(); //for the sake of simplicity..

xhr.open('GET', '/article/xmlhttprequest/example/load');
xhr.send();
xhr.onload = function() {
  if (xhr.status != 200) { // analyze HTTP status of the response
    alert(`Error ${xhr.status}: ${xhr.statusText}`);
  } else { 
    alert(`Got ${xhr.response.length} bytes`); 
  }
};

xhr.onprogress = function(event) {
  if (event.lengthComputable) {
    alert(`Received ${event.loaded} of ${event.total} bytes`);
  } else {
    alert(`Received ${event.loaded} bytes`);
  }

};

xhr.onerror = function() {
  alert("Request failed");
};

xhr.open("POST", url, true);
xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
//xhr.setRequestHeader("Content-length", length);
//xhr.setRequestHeader("Connection", "close");

xhr.onreadystatechange = function() {
	if(http.readyState == 4 && http.status == 200) {
		alert(http.responseText);
	}
}
xhr.send(params);

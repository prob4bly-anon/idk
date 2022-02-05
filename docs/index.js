var xhr = new XMLHttpRequest();
if(window.location.endsWith("/server")){
xhr.onload = function () {
  // Request finished. Do processing here.
};
xhr.open('GET', test.html, true);
xhr.send('');
}

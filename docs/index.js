var xhr = new XMLHttpRequest();
xhr.open('GET', '/server', true);

xhr.onload = function () {
  // Request finished. Do processing here.
};

xhr.send("/test.html");

/*
 * popup.js is executed when the popup.html is clicked on. The api used to
 * grab trending headlines and put them into a conveinient JSON format is
 * provided by newsapi.org, and the news outlet choice is The Washington Post.
 */

var theNewScript = document.createElement("script");
theNewScript.type = "text/javascript";
theNewScript.src = "jquery.js";
var p = "";

window.onload = function() {
  // Debug
  console.log("window.onload");
  // Check for the various File API support.

}

window.addEventListener ("load", readfileautomatically, false);

function get() {
  p = document.getElementById('question');
  var x;

  x = new XMLHttpRequest();
  x.onload = xhttpResponse;
  x.open("GET", "links.txt", true);
  x.send();
}

function xhttpResponse() {
    p.innerHTML += this.responseText;
}

function readfileautomatically () {
  var client = new XMLHttpRequest();
  client.open('GET', '/links.txt');
  client.onreadystatechange = function()
  {
    if( client.responseText != '' )
    {
      var txt = client.responseText.split("\n");
      $.get(txt[0], function(data) {
        document.getElementById("question").innerHTML = data.description;
      })
    }
  }
  client.send();
}

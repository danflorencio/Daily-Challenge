/*
 * popup.js is executed when the popup.html is clicked on. This will work with
 * previously scraped links using script.py and allHTML.txt in the above
 * directory. All those links are then written to links.txt, and used to
 * grab JSON data from Codewars.
 */

var theNewScript = document.createElement("script");
theNewScript.type = "text/javascript";
theNewScript.src = "jquery.js";
var p = "";

window.onload = function() {
  // Debug
  console.log("window.onload");
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
    if(client.responseText != '')
    {
      var txt = client.responseText.split("\n");
      $.get(txt[0], function(data) {
        document.getElementById("question").innerHTML = data.description;
      })
    }
  }
  client.send();
}

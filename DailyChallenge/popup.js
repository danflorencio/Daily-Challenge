/*
 * popup.js is executed when the popup.html is clicked on. The api used to
 * grab trending headlines and put them into a conveinient JSON format is
 * provided by newsapi.org, and the news outlet choice is The Washington Post.
 */

var theNewScript = document.createElement("script");
theNewScript.type = "text/javascript";
theNewScript.src = "jquery.js";

window.onload = function() {
  // Debug
  console.log("window.onload");
  // Check for the various File API support.
  if (window.File && window.FileReader && window.FileList && window.Blob) {
    // Great success! All the File APIs are supported.
    console.log('awesome');
  } else {
    console.log('The File APIs are not fully supported in this browser.');
  }
  $.getJSON("working.json", function(json) {
    console.log(json); // this will show the info it in firebug console
  });
}

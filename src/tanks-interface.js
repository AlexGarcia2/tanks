document.getElementById("tank-board").src = "";
var xhr = $.get(`http://api.giphy.com/v1/gifs/search?q=${tank}&api_key=5J01tuwV3PgBGldhKJw3tqMhxfwgCP5u`);
xhr.done(function(data) {
  console.log(data);
  document.getElementById("table").src = data.data.images.original.url;
});




// $(document).ready(function() {
//   // $('#weatherLocation').click(function() {
//     const tank = $('#location').val();
//     $('#location').val("");
//
//     let request = new XMLHttpRequest();
//     const url = `http://api.giphy.com/v1/gifs/search?q=${tank}&api_key=5J01tuwV3PgBGldhKJw3tqMhxfwgCP5u`;
//
//     request.onreadystatechange = function() {
//       if (this.readyState === 4 && this.status === 200) {
//         const response = JSON.parse(this.responseText);
//         getElements(response);
//       }
//     }
//
//     request.open("GET", url, true);
//     request.send();
//
//    const getElements = function(response) {
//       $('.showTank').text(`${tank} ${response.data[0].url}%`);
//     }
  // });

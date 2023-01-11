
var horror_gif = "screaming";
var comedy_gif = "funny movies";
var action_gif = "action movie";
var animation_gif = "forzen";

// query url for horror giphy
var gifURL = "https://api.giphy.com/v1/gifs/search?q=" + horror_gif + "&api_key=Sq18IXpnMDWhyp5Js9XKFGDd3Iw5klN8&limit=01";
$.ajax({
 url: gifURL,
 method: "GET"
}).then(function (response) {
 var results = response.data;
 var gif_El = $("<img>");
 gif_El.attr("src", results[0].images.fixed_width_downsampled.url);

 $(".film-list-1").append(gif_El);
 console.log(i);

});

// query url for comedy giphy
var gifURL = "https://api.giphy.com/v1/gifs/search?q=" + comedy_gif + "&api_key=Sq18IXpnMDWhyp5Js9XKFGDd3Iw5klN8&limit=01";
$.ajax({
 url: gifURL,
 method: "GET"
}).then(function (response) {
 var results = response.data;
 var gif_El = $("<img>");
 gif_El.attr("src", results[0].images.fixed_width_downsampled.url);

 $(".film-list-2").append(gif_El);
 console.log(i);

});

// query url for action giphy
var gifURL = "https://api.giphy.com/v1/gifs/search?q=" + action_gif + "&api_key=Sq18IXpnMDWhyp5Js9XKFGDd3Iw5klN8&limit=01";
$.ajax({
 url: gifURL,
 method: "GET"
}).then(function (response) {
 var results = response.data;
 var gif_El = $("<img>");
 gif_El.attr("src", results[0].images.fixed_width_downsampled.url);

 $(".film-list-3").append(gif_El);

});

// query url for animation giphy
var gifURL = "https://api.giphy.com/v1/gifs/search?q=" + animation_gif + "&api_key=Sq18IXpnMDWhyp5Js9XKFGDd3Iw5klN8&limit=01";
$.ajax({
 url: gifURL,
 method: "GET"
}).then(function (response) {
 var results = response.data;
 var gif_El = $("<img>");
 gif_El.attr("src", results[0].images.fixed_width_downsampled.url);

 $(".film-list-4").append(gif_El);
 console.log(i);

});
var animationFilms = ["Toy Story", "Incredibles", "Up", "star wars clone wars", "Finding Nemo", "Monsters Inc", "Ratatouille", "A bugs life", "Toy Story 2", "Chicken Run"];

var comedyFilms = ["Happy Gilmore", "White Chicks", "Hear no evil, speak no evil", "Life of Brian", "Team America: World Police", "Borat", "Dumb and Dumber", "Zoolander", "Coming to America", "Austin Powers"];

var actionFilms = ["The Northman", "Wakanda Forever", "The Batman", "Thor", "Iron Man 2", "Death Race 2", "The Spy Next Door", "Shank", "13 Assassins", "The King of Fighters"]

var horrorFilms = ["The Evil Dead", "The Exorcist", "The Changeling", "The Sixth Sense", "Psycho", "The Texas Chain Saw Massarce", "Pieces", "Saw", "It", "Screem"]

$("#film-category").on("click", ".btn", function (event) {

 $("#film-list").empty();
 // get input
 var filmGenre = event.target.getAttribute('data-name');

 if (filmGenre === "horror") {

  seacrhCriteria = animationFilms;
  for (var i = 0; i < seacrhCriteria.length; i++) {
   var li = document.createElement("li");
   li.textContent = seacrhCriteria[i];
   $("#list-1").append(li);
  }
 };

 if (filmGenre === "comedy") {
  seacrhCriteria = comedyFilms;
  for (var i = 0; i < seacrhCriteria.length; i++) {
   var li = document.createElement("li");
   li.textContent = seacrhCriteria[i];
   $("#list-2").append(li);
  }
 }


 if (filmGenre === "action") {
  seacrhCriteria = actionFilms;
  for (var i = 0; i < seacrhCriteria.length; i++) {
   var li = document.createElement("li");
   li.textContent = seacrhCriteria[i];
   $("#list-3").append(li);
  }
 };

 if (filmGenre === "animation") {
  seacrhCriteria = animationFilms;
  for (var i = 0; i < seacrhCriteria.length; i++) {
   var li = document.createElement("li");
   li.textContent = seacrhCriteria[i];
   $("#list-4").append(li);
  }
 };


})
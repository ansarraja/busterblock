import { getMovie } from "./categorydisplay.js";

var animationFilms = ["Toy Story", "Incredibles", "Up", "star wars clone wars", "Finding Nemo", "Monsters Inc", "Ratatouille", "Frozen", "Toy Story 2", "Chicken Run"];

var comedyFilms = ["Happy Gilmore", "White Chicks", "Hear no evil, speak no evil", "Life of Brian", "Team America: World Police", "Borat", "Dumb and Dumber", "Zoolander", "Coming to America", "Austin Powers"];

var actionFilms = ["The Northman", "Wakanda Forever", "The Batman", "Thor", "Iron Man 2", "Death Race 2", "The Spy Next Door", "Shank", "13 Assassins", "The King of Fighters"]

var horrorFilms = ["The Evil Dead", "The Exorcist", "The Changeling", "The Sixth Sense", "Psycho", "The Texas Chain Saw Massacre", "Pieces", "Saw", "It", "Scream"]

$("#film-category").on("click", ".btn", function (event) {

  $("#film-list").empty();
  // get input
  var filmGenre = event.target.getAttribute('data-name');

  if (filmGenre === "horror") {

    let seacrhCriteria = horrorFilms;
    for (var i = 0; i < seacrhCriteria.length; i++) {
      //    var li = document.createElement("li");
      //    li.textContent = seacrhCriteria[i];
      //    $("#list-1").append(li);

      getMovie(seacrhCriteria[i]);
    }
  };

  if (filmGenre === "comedy") {
    let seacrhCriteria = comedyFilms;
    for (var i = 0; i < seacrhCriteria.length; i++) {
      //    var li = document.createElement("li");
      //    li.textContent = seacrhCriteria[i];
      //    $("#list-2").append(li);

      getMovie(seacrhCriteria[i]);

    }
  }


  if (filmGenre === "action") {
    let seacrhCriteria = actionFilms;
    for (var i = 0; i < seacrhCriteria.length; i++) {
      //    var li = document.createElement("li");
      //    li.textContent = seacrhCriteria[i];
      //    $("#list-3").append(li);

      getMovie(seacrhCriteria[i]);

    }
  };

  if (filmGenre === "animation") {
    let seacrhCriteria = animationFilms;
    for (var i = 0; i < seacrhCriteria.length; i++) {
      //    var li = document.createElement("li");
      //    li.textContent = seacrhCriteria[i];
      //    $("#list-4").append(li);

      getMovie(seacrhCriteria[i]);

    }
  };


})
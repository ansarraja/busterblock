//Initial References
var key = "1c7cf7f2";
let movieNameElement = document.getElementById("movie-name");
let searchBtn = document.getElementById("search-btn");
let result = document.getElementById("result");
let resultDisplay = $('#result');

//Function to fetch data from API
let getMovie = () => {
  resultDisplay.empty();
  let movieName = movieNameElement.value;
  let url = `https://www.omdbapi.com/?t=${movieName}&apikey=${key}`;
  //If input field is empty
  if (movieName.length <= 0) {
    result.innerHTML = `<h3 class="msg">Please Enter A Movie Name</h3>`;
  }
  //If input field is NOT empty
  else {
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        //If movie exists in database
        if (data.Response == "True") {
          let searchDisplay = $(`
            <div class="info">
                <img src=${data.Poster} class="poster">
                <div>
                    <h2 id="film-name">${data.Title}</h2>
                    <div class="rating">
                        <img src="./films/star-icon.svg">
                        <h4>${data.imdbRating}</h4>
                    </div>
                    <div class="details">
                        <span>${data.Rated}</span>
                        <span>${data.Year}</span>
                        <span>${data.Runtime}</span>
                    </div>
                    <div class="genre">
                        <div>${data.Genre.split(",").join("</div><div>")}</div>
                    </div>
                </div>
            </div>
            <h3>Plot:</h3>
            <p>${data.Plot}</p>
            <h3>Cast:</h3>
            <p>${data.Actors}</p> 
            <p class="add_btn" id="rent">Rent Charge: £1.99
            <button class="btn btn-primary" id="rent_btn">Add to cart</button>
            </p>           
        `).on('click', "#rent_btn", () => {
          console.log('clicked');

          let filmName = data.Title;

          let price = 1.99;

          let filmObj = {
            filmName: filmName,
            price: price
          };

          let basket = localStorage.getItem('basket') ? JSON.parse(localStorage.getItem('basket')) : [];

          basket.push(filmObj);

          let basketStr = JSON.stringify(basket);

          localStorage.setItem('basket', basketStr);

          let filmAddDisplay = document.getElementById('film-added');

          filmAddDisplay.classList.toggle('show');

          setTimeout(() => {
            filmAddDisplay.classList.toggle('show');
          }, 4000)
        
        });

        resultDisplay.append(searchDisplay);

        }
        //If movie does NOT exists in database
        else {
          result.innerHTML = `<h3 class='msg'>${data.Error}</h3>`;
        }
      })
      //If error occurs
      .catch(() => {
        result.innerHTML = `<h3 class="msg">Error Occured</h3>`;
      });
  }
};
searchBtn.addEventListener("click", getMovie);
window.addEventListener("load", getMovie);

var key = "1c7cf7f2";
// let movieNameElement = document.getElementById("movie-name");
let searchBtn = document.getElementById("search-btn");
// let result = document.getElementById("result");
let categoryDisplay = $("#film-display");

//Function to fetch data from API
export let getMovie = (moviename) => {
  let movieName = moviename;
  let url = `https://www.omdbapi.com/?t=${movieName}&apikey=${key}`;

  categoryDisplay.empty();

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
          let result = $(`
            <div class=" d-flex flex-column justify-content-center align-items-center col-12 col-sm-6 col-md-6 col-lg-3">
                <img src=${data.Poster} class="poster">
                <div class="film-heading">
                    <h2>${data.Title}</h2>
                    <div class="rating">
                        <img src="./films/star-icon.svg">
                        <h4>${data.imdbRating}</h4>
                    </div>
                    <div class="details">
                        <span>${data.Rated}</span>
                        <span>${data.Year}</span>
                        <span>${data.Runtime}</span>
                    </div>
                    <div class="genre d-flex justify-content-around align-items-center">
                        <div>${data.Genre.split(",").join("</div><div>")}</div>
                    </div>
                </div>
                <h3>Plot:</h3>
                <p>${data.Plot}</p>
                <h3>Cast:</h3>
                <p>${data.Actors}</p> 
                <p class="add_btn d-flex flex-column justify-content-around align-items-center" id="rent">Rent Charge: £1.99
                <button class="btn btn-primary" id="rent_btn">Add to cart</button>
                </p>           
            </div>
        `);

          categoryDisplay.append(result);

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
// searchBtn.addEventListener("click", getMovie);
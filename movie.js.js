let reviewContainerE1 = document.getElementById("reviewsContainer");
let titleInputE1 = document.getElementById("titleInput");
let reviewTextareaE1 = document.getElementById("reviewTextarea");
let addBtnE1 = document.getElementById("addBtn");


function onAddReview() {
    let movieTitle = titleInputE1.value;
    let movieReview = reviewTextareaE1.value;

    if (movieTitle === "") {
        alert("please enter a movie title");
        return;
    }
    let movieTitleE1 = document.createElement("hi");
    movieTitleE1.textContent = "Movie Title:" + movieTitle;
    movieTitleE1.classList.add("movie-title");
    reviewContainerE1.appendChild(movieTitleE1);

    let movieReviewE1 = document.createElement("p");
    movieReviewE1.textContent = "review" + movieReview;
    reviewContainerE1.appendChild(movieReviewE1);

    let horizontalLineE1 = document.createElement("hr");
    reviewContainerE1.appendChild(horizontalLineE1);
    titleInputE1.value = "";
    reviewTextareaE1.value = "";
}
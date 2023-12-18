// categories.js

// Function to handle genre box clicks
function redirectToGenrePage(genre) {
    // Redirect to the corresponding genre page
    window.location.href = genre + ".html";
}

// Add click event listeners to genre boxes
document.addEventListener('DOMContentLoaded', function () {
    var genreBoxes = document.querySelectorAll('.genre-box');

    genreBoxes.forEach(function (box) {
        box.addEventListener('click', function () {
            // Extract the genre from the 'data-genre' attribute
            var genre = this.getAttribute('data-genre');

            // Call the function to redirect to the genre page
            redirectToGenrePage(genre);
        });
    });
});

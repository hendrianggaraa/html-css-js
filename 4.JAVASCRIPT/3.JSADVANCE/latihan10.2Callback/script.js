$('.search-button').on('click', function () {
    $.ajax({
        url: 'http://www.omdbapi.com/?apikey=42020899&s=' + $('.input-keyword').val(),
        success: results => {
            // console.log(results);
            const movies = results.Search;
            // console.log(movies);
            let cards = '';
            movies.forEach(movie => {
                cards += showCard(movie)
            });
            $('.movie-container').html(cards);

            // ketika tombol Shows Details di-klik
            $('.modal-detail-button').on('click', function () {
                // console.log($(this).data('imdbid'))
                $.ajax({
                    url: 'http://www.omdbapi.com/?apikey=42020899&i=' + $(this).data('imdbid'),
                    success: movie => {
                        // console.log(movie);
                        const movieDetail = showMovieDetail(movie);

                        $('.modal-body').html(movieDetail);
                    },
                    error: (e) => {
                        console.log(e.response);
                    }
                });
            })

        },
        error: (e) => {
            console.log(e.response);
        }
    });
});



function showCard(movie) {
    return `<div class="col-sm-3 my-3">
        <div class="card">
            <img src="${movie.Poster}" class="card-img-top">
            <div class="card-body">
                <h5 class="card-title">${movie.Title}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${movie.Year}</h6>
                <a href="#" class="btn btn-primary modal-detail-button" data-bs-toggle="modal" data-bs-target="#movieDetailModal" data-imdbid="${movie.imdbID}">Show Details</a>
            </div>
        </div>
    </div>`;
}

function showMovieDetail(movie) {
    return `<div class="container-fluid">
    <div class="row">
        <div class="col-sm-4">
            <img src="${movie.Poster}" class="img-fluid">
        </div>
        <div class="col-sm">
            <ul class="list-group">
                <li class="list-group-item">
                    <h4>${movie.Title} (${movie.Year})</h4>
                </li>
                <li class="list-group-item"><strong>Director : </strong> ${movie.Director}</li>
                <li class="list-group-item"><strong>Actors : </strong> ${movie.Actors}</li>
                <li class="list-group-item"><strong>Writer : </strong> ${movie.Writer}</li>
                <li class="list-group-item"><strong>Plot : </strong><br> ${movie.Plot}</li>
            </ul>
        </div>
    </div>
</div>`;
}
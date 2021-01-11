// fetch
// fetch() adalah sebuah method pada API javascript untuk mengambil resources dari jaringan, dan mengembalikan promise yang selesai(fullfilled) ketika ada response yang tersedia.
// fetch(resources, init);
// resources bisa URL atau Request Object
// URL -> alamat dari sumber yang kita akan ambil
// Request Object -> representasi permintaan sumber

// Init (optional)
// Konfigurasi tambahan pada sebuah request berbentuk object
// method, headers, body, mode, cache, referrer, referrerPolicy, integrity, keepalive, signal

// response  -> hasil dari fetch, berupa promise
// response(property) -> headers, ok, redirected, status, statusText, type, url, body
// response(method) -> clone(), error(), redirect(), blob(), formData(), json(), text()


// const searchButton = document.querySelector('.search-button');
// searchButton.addEventListener('click', function () {

//     const inputKeyword = document.querySelector('.input-keyword');
//     fetch('http://www.omdbapi.com/?apikey=42020899&s=' + inputKeyword.value)
//         .then(response => response.json())
//         .then(response => {
//             const movies = response.Search;
//             let cards = '';
//             movies.forEach(m => cards += showCard(m));
//             const movieContainer = document.querySelector('.movie-container');
//             movieContainer.innerHTML = cards;


//             // ketika tombol detail di-klik
//             const modalDetaliButton = document.querySelectorAll('.modal-detail-button');
//             modalDetaliButton.forEach(btn => {
//                 btn.addEventListener('click', function () {
//                     // console.log(this);
//                     const imdbid = this.dataset.imdbid;
//                     // console.log(imdbid);
//                     fetch('http://www.omdbapi.com/?apikey=42020899&i=' + imdbid)
//                         .then(response => response.json())
//                         .then(m => {
//                             // console.log(movie);
//                             const movieDetail = showMovieDetail(m);
//                             const modalBody = document.querySelector('.modal-body');
//                             modalBody.innerHTML = movieDetail;
//                         });
//                 });
//             });
//         });
// });

const searchButton = document.querySelector('.search-button');
searchButton.addEventListener('click', async function () {
    const inputKeyword = document.querySelector('.input-keyword');
    const movies = await getMovies(inputKeyword.value);
    // console.log(movies);
    updateUI(movies);
});



// Tidak bisa pakai cara ini karena sudah terlebih dahulu oleh js sehingga event handlernya sudah jalan sebelum tombolnya tampil
// Event handlernya sudah jalan ketika tombol detailnya belum ada.
// const modalDetaliButton = document.querySelectorAll('.modal-detail-button');
// modalDetaliButton.forEach(btn => {
//     btn.addEventListener('click', function () {
//         console.log('ok');
//     });
// });




// event binding : ngebanding event yg awalnya gak ada tp nantinya ada.
// e -> isinya posisi cursor terhadap document
// e.target -> isinya mernarget elemen yg diklik
document.addEventListener('click', async function (e) {
    if (e.target.classList.contains('modal-detail-button')) {
        // console.log('ok');
        const imdbid = e.target.dataset.imdbid;
        const movieDetail = await getMovieDetail(imdbid);
        updateUIDetail(movieDetail);
    }
});

function getMovieDetail(imbdid) {
    return fetch('http://www.omdbapi.com/?apikey=42020899&i=' + imbdid)
        .then(response => response.json())
        .then(m => m);
}

function updateUIDetail(m) {
    const movieDetail = showMovieDetail(m);
    const modalBody = document.querySelector('.modal-body');
    modalBody.innerHTML = movieDetail;
}

function getMovies(keyword) {
    return fetch('http://www.omdbapi.com/?apikey=42020899&s=' + keyword)
        .then(response => response.json())
        .then(response => response.Search);
}

function updateUI(movies) {
    let cards = '';
    movies.forEach(m => cards += showCard(m));
    const movieContainer = document.querySelector('.movie-container');
    movieContainer.innerHTML = cards;
}


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
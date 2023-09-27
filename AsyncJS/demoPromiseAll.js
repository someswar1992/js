const query = "amar akbar";

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3OWM1MDFmZWViMTY0YjM4Y2VmZGRiNTNlMGFmOTBmNiIsInN1YiI6IjY1MDU0NmY3MTA5ZGVjMDE0ZjQwNjg4NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.h_VcHjbSRh4mQh-ohMPInCOR_zA78nC857kSxlRlsJE'
    }
};

function fetchData() {
    fetch("https://api.themoviedb.org/3/search/movie?query=" + query + "&include_adult=false&language=en-US&page=1", options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
}

fetchData()
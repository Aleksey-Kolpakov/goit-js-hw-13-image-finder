const key = '19945506-a6680bfa60c04d980657bbe54';
const apiUrl = 'https://pixabay.com/api/?image_type=photo&orientation=horizontal';
const searchQuerry = 'dog';
const pageNumber = 1;
fetch(`${apiUrl}&q=${searchQuerry}&page=${pageNumber}&per_page=12&key=${key}`)
    .then(response => response.json()).then(data => { console.log(data); });
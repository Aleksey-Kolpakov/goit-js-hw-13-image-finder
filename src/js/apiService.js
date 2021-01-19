const apiService = {
    key: '19945506-a6680bfa60c04d980657bbe54',
    apiUrl: 'https://pixabay.com/api/?image_type=photo&orientation=horizontal',
    searchQuerry: 'dog',
    pageNumber: 1,
    fetchApi() {
        return fetch(`${this.apiUrl}&q=${this.searchQuerry}&page=${this.pageNumber}&per_page=12&key=${this.key}`)
            .then(response => response.json())
            .then(({ hits }) => hits);
    }
};
apiService.fetchApi().then(data => { console.log(data); });
const apiService = {
    key: '19945506-a6680bfa60c04d980657bbe54',
    apiUrl: 'https://pixabay.com/api/?image_type=photo&orientation=horizontal',
    pageNumber: 1,
    resultsPerPage: 12,
    fetchApi(searchQuerry) {
        return fetch(`${this.apiUrl}&q=${searchQuerry}&page=${this.pageNumber}&per_page=${this.resultsPerPage}&key=${this.key}`)
            .then(response => response.json())
            .then(({ hits }) => {
                console.log(hits);
                return hits;
            });

    }
};
export default apiService;
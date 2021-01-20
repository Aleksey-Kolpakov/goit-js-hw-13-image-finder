import './styles.css';
import './js/apiService';

import formDataCollect from './js/formDataCollect';

import apiService from './js/apiService';
import photoCardtemplate from './templates/image-template.hbs';

const refs = {
    ulGallery: document.querySelector('.js-gallery'),
    searchButton: document.querySelector('#search-form-button'),
    loadMoreButton: document.querySelector('.load-more'),
    searchForm: document.querySelector('#search-form'),
    searchFormInput: document.querySelector('[name=query]'),
}

refs.searchForm.addEventListener('submit', event => {
    const searchQuerry = formDataCollect(event).query;
    apiService.pageNumber = 1;
    apiService.lastSearchQuerry = searchQuerry;
    apiService.fetchApi(searchQuerry).then(images => {
        console.log(images);
        const imagesMarkup = photoCardtemplate(images);
        refs.ulGallery.innerHTML = imagesMarkup;
        window.scrollTo({
            top: document.documentElement.offsetHeight,
            behavior: 'smooth'
        });
    })
});

refs.searchFormInput.addEventListener('dblclick', () => {
    refs.searchForm.reset();
    refs.ulGallery.innerHTML = '';
});

refs.loadMoreButton.addEventListener('click', () => {
    apiService.pageNumber += 1;
    apiService.fetchApi(apiService.lastSearchQuerry).then(images => {
        const imagesMarkup = photoCardtemplate(images);
        refs.ulGallery.insertAdjacentHTML('beforeend', imagesMarkup);
        console.log(refs.loadMoreButton.scrollTop);

        window.scrollTo({
            top: document.documentElement.offsetHeight,
            behavior: 'smooth'
        });
    });


});


import formDataCollect from './formDataCollect';

import apiService from './apiService';
import photoCardtemplate from '../templates/image-template.hbs';

export const refs = {
    ulGallery: document.querySelector('.js-gallery'),
    searchButton: document.querySelector('#search-form-button'),
    loadMoreButton: document.querySelector('.load-more'),
    searchForm: document.querySelector('#search-form'),
    searchFormInput: document.querySelector('[name=query]'),
}

function galleryCreating(images) {
    const imagesMarkup = photoCardtemplate(images);
    refs.ulGallery.insertAdjacentHTML('beforeend', imagesMarkup);
}
export function formGalleryCleaner() {
    refs.searchForm.reset();
    refs.ulGallery.innerHTML = '';
}

export function searcHandler(event) {
    apiService.pageNumber = 1;
    const searchQuerry = formDataCollect(event).query;
    apiService.lastSearchQuerry = searchQuerry;
    formGalleryCleaner();
    apiService.fetchApi(searchQuerry).then(galleryCreating);
};

export function loadMoreHandler() {
    apiService.pageNumber += 1;
    apiService.fetchApi(apiService.lastSearchQuerry).then(images => {
        galleryCreating(images);
        window.scrollTo({
            top: document.documentElement.offsetHeight,
            behavior: 'smooth',
        });
    });
}
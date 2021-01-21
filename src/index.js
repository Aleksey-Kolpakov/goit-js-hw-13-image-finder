import './styles.css';
import './js/apiService';

import formDataCollect from './js/formDataCollect';

import apiService from './js/apiService';
import photoCardtemplate from './templates/image-template.hbs';
import galeryLightBox from "./js/galeryLightBox"
import { searcHandler, formGalleryCleaner, loadMoreHandler, refs } from './js/imagesApiHandler';

refs.searchForm.addEventListener('submit', searcHandler);
refs.searchFormInput.addEventListener('dblclick', formGalleryCleaner);
refs.loadMoreButton.addEventListener('click', loadMoreHandler);
refs.ulGallery.addEventListener('click', galeryLightBox);

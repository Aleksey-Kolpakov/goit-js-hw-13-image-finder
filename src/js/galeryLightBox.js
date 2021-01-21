import * as basicLightbox from 'basiclightbox';
import "../../node_modules/basiclightbox/dist/basicLightbox.min.css"

function galeryLightBox(event) {
    if (event.target.nodeName === "IMG") {
        const image = event.target.dataset.largeimage;
        const instan = basicLightbox.create(`
    <img src="${image}" width="100%" height="100%">
`);
        instan.show();
    }
};
export default galeryLightBox;
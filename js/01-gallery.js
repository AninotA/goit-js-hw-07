import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);
console.log(basicLightbox);

const imgList = document.querySelector(".gallery");


// imgList.innerHTML = markup;

imgList.addEventListener("click", onClick);

const createMarkup = galleryItems.map(({ preview, original, description }) => 
`<div class ="gallery__item">
<a class="gallery__link" href="${original}">
<img class="gallery__image" 
src="${preview}"
data-source="${original}"
alt="${description}"/>
</a>
</div>`) 
 
imgList.insertAdjacentHTML('beforeend', createMarkup.join(''))
    

  



let instance = "";
function onClick(event) {
  event.preventDefault();
   
  instance = basicLightbox.create(`<img src=${event.target.dataset.source}>`);
  instance.show();
  document.addEventListener("keydown", onEscapeCloseModal);
}
function onEscapeCloseModal(evt) {
  if (evt.code === "Escape") {
    instance.close();
    document.removeEventListener("keydown", onEscapeCloseModal);
  }
}

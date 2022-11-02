import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);
console.log(basicLightbox);

const imgList = document.querySelector(".gallery");
const markup = createMarkUp(galleryItems);

imgList.innerHTML = markup;

imgList.addEventListener("click", onClick);

function createMarkUp(galleryItems) {
  return galleryItems
    .map((item) => {
      return `<div class ="gallery__item">
        <a class="gallery__link" href="${item.original}">
        <img class="gallery__image" 
        src="${item.preview}"
        data-source="${item.original}"
        alt="${item.description}"/>
        </a>
        </div>`;
    })
    .join("");
}
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

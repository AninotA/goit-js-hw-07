import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const imgList = document.querySelector(".gallery");
const markup = createMarkUp(galleryItems);

imgList.innerHTML = markup;

imgList.addEventListener("click", onClick);

function createMarkUp(galleryItems) {
  return galleryItems
    .map((item) => {
      return `<div class ="gallery__item">
      <a class="gallery__item" href="${item.original}">
      <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
    </a>
        </div>`;
    })
    .join("");
}
function onClick(event) {
    event.preventDefault();
}

let gallery = new SimpleLightbox('.gallery a');
gallery.on('show.simplelightbox', function () {
	// do something…
});
import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const imgList = document.querySelector(".gallery");

imgList.addEventListener("click", onClick);

const createMarkup = galleryItems.map(
  ({ preview, original, description }) =>
    `<div class ="gallery__item">
<a class="gallery__link" href="${original}">
<img class="gallery__image" 
src="${preview}"
data-source="${original}"
alt="${description}"/>
</a>
</div>`
);

imgList.insertAdjacentHTML("beforeend", createMarkup.join(""));


function onClick(event) {
  event.preventDefault();
}

// new SimpleLightbox(".some-element a", {
//   /* options */
// });

imgList = new SimpleLightbox('.gallery a');
imgList.on('show.simplelightbox', function () {
	// do something…
});

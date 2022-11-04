import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const imgList = document.querySelector(".gallery");

// imgList.addEventListener("click", onClick);

const createMarkup = galleryItems.map(
  ({ preview, original, description }) =>
    `<li class ="gallery__item">
    <a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" />
  </a>
</li>`
);

imgList.insertAdjacentHTML("beforeend", createMarkup.join(""));

// function onClick(event) {
//   event.preventDefault();
// }

// new SimpleLightbox(".some-element a", {
//   /* options */
// });

let gallery = new SimpleLightbox(".gallery a", {
  captions: true,
  captionDelay: 250,
  captionSelector: "img",
  captionsData: "alt",
  captionPosition: "bottom",
});

import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);
// console.log(basicLightbox);

const imgList = document.querySelector(".gallery");



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

const clickImg = (document.querySelectorAll("gallery__image").onClick = (
  event
) => {
  event.preventDefault();

  const html = `<img src="${event.target.dataset.source}" alt="${event.target.dataset.description}">`;
  const instance = basicLightbox.create(html, {
    onShow: () => {
      document.addEventListener("keydown", onEscapeCloseModal);
    },
    onClose: () => {
      document.removeEventListener("keydown", onEscapeCloseModal);
    },
  });

  if (event.target.nodeName === "IMG") {
    instance.show();
  }

  function onEscapeCloseModal(evt) {
    if (evt.code === "Escape") {
      instance.close();
    }
  }
});
imgList.addEventListener("click", clickImg);

console.log(galleryItems);

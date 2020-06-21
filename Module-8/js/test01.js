"use strict";
import imgs from "./gallery-items.js";

const galleryList = document.querySelector(".js-gallery");
const lightbox = document.querySelector(".js-lightbox");
const lightboxImage = document.querySelector(".lightbox__image");
const clsButton = document.querySelector(
  ".lightbox__button[data-action='close-lightbox']"
);
function getGalleryString({ preview, original, description }) {
  const galleryItem = `<li class="gallery__item">
<a
  class="gallery__link"
     href="${original}"
>
  <img
    class="gallery__image"
    src="${preview}"
    data-source="${original}"
    alt="${description}"
  />
</a>
</li>`;
  return galleryItem;
}
function getImgs(imgs) {
  return imgs.map((img) => getGalleryString(img)).join("");
}

const markup = getImgs(imgs);

galleryList.insertAdjacentHTML("afterbegin", markup);

function openWindow(e) {
  e.preventDefault();
  const img = e.target;
  if (img === e.currentTarget) {
    returtn;
  }

  lightbox.classList.add("is-open");

  const sourceWay = img.getAttribute("data-source");
  const description = img.getAttribute("alt");

  lightboxImage.setAttribute("src", sourceWay);
  lightboxImage.setAttribute("alt", description);
  window.addEventListener("keydown", closeWindow);
}

function closeWindow(e) {
  lightbox.classList.remove("is-open");
  window.removeEventListener("keydown", KeyboardEscape);
  lightboxImage.setAttribute("src", "");
  lightboxImage.setAttribute("alt", "");
}

galleryList.addEventListener("click", openWindow);
clsButton.addEventListener("click", closeWindow);

function KeyboardEscape({ code }) {
  if (code !== "Escape") {
    return;
  }
  closeWindow();
}

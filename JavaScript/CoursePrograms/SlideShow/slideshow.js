"use strict";

const $ = selector => document.querySelector(selector);

document.addEventListener("DOMContentLoaded", () => {
    const caption = $("#caption");
    const mainImage = $("#main_image")

    const links = $("#image_list").querySelectorAll("a");

    const imageCache = [];
    let image = null;

    for (let link of links)
    {
        image = new Image();
        image.src = link.href;
        image.alt = link.title;

        imageCache[imageCache.length] = image;
    }

    let imageCounter = 0;

    setInterval( () => {
        imageCounter = (imageCounter + 1) % imageCache.length;

        image = imageCache[imageCounter];

        mainImage.src = image.src;
        mainImage.alt = image.alt;
        caption.textContent = image.alt;
    }, 2000);
});

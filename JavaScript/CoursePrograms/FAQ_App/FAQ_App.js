"use strict";

const toggle = evt => {
    const h2Element = evt.currentTarget;
    const divElement = h2Element.nextElementSibling;

    h2Element.classList.toggle("minus");
    divElement.classList.toggle("open");

    evt.preventDefault();
};

document.addEventListener("DOMContentLoaded", () => {
    const h2Elements = document.querySelectorAll("#faqs h2");

    for (let h2Element of h2Elements) {
        h2Element.addEventListener("click", toggle);
    }

    h2Elements[0].firstChild.focus();
})
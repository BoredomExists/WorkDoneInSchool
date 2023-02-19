"use strict";
const $ = selector => document.querySelector(selector);

const displayErrorMsgs = msgs => {
    const ul = document.createElement("ul");
    ul.classList.add("messages");

    for(let msg of msgs) {
        const li = document.createElement("li");
        const text = document.createTextNode(msg);
        li.appendChild(text)
        ul.appendChild(li);
    }

    const node = $("ul");
    if (node == null) {
        const form = $("form");
        form.parentNode.insertBefore(ul, form);
    }
    else {
        node.parentNode.replaceChild(ul, node);
    }
}

const processEntries = () => {
    const email = $("#email_address");
    const phone = ($("#phone"));
    const country = $("#country");
    const terms = $("#terms");
    const textarea = $("#comment");

    const msgs = [];

    if (email.value == "") {
        msgs[msgs.length] = "The email field is required.";
    }
    if (phone.value == "") {
        msgs[msgs.length] = "The phone field is required.";
    }
    if (country.value == "") {
        msgs[msgs.length] = "Please select a country.";
    }
    if(textarea.value == "")
    {
        msgs[msgs.length] = "Enter a comment to register";
    }
    if (terms.checked == false) {
        msgs[msgs.length] = "You must agree to the terms of service.";
    }

    if(msgs.length == 0)
    {
        $("form").submit();
    }
    else
    {
        displayErrorMsgs(msgs);
    }

};

const resetForm = () => {
    $("form").reset();
    $("ul").remove();
    $("#email_address").focus();
};


document.addEventListener("DOMContentLoaded", () => {
    $("#register").addEventListener("click", processEntries);
    $("#reset_form").addEventListener("click", resetForm);
    $("#email_address").focus();
});
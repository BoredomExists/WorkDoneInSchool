"use strict";

const $ = selector => document.querySelector(selector);

const processEntries = () => {
    const email = $("#email_address");
    const phone = ($("#phone"));
    const country = $("#country");
    const terms = $("#terms");

    let isValid = true;
    if (email.value == "") {
        email.nextElementSibling.textContent = "This field is required.";
        isValue = false;
    } else {
        email.nextElementSibling.textContent = "";
    }
    if (phone.value == "") {
        phone.nextElementSibling.textContent = "This field is required.";
        isValid = false;
    } else {
        phone.nextElementSibling.textContent = "";
    }
    if (country.value == "") {
        country.nextElementSibling.textContent = "Please select a country.";
        isValid = false;
    } else {
        country.nextElementSibling.textContent = "";
    }
    if (terms.checked == false) {
        terms.nextElementSibling.textContent = "This box must be checked.";
        isValid = false;
    } else {
        terms.nextElementSibling.textContent = "";
    }

    if(isValid == true)
    {
        $("form").submit();
    }

};

const resetForm = () => {
    $("form").reset();
    $("#email_address").nextElementSibling.textContent = "*";
    $("#phone").nextElementSibling.textContent = "*";
    $("#country").nextElementSibling.textContent = "*";
    $("#email_address").focus();
};


document.addEventListener("DOMContentLoaded", () => {
    $("#register").addEventListener("click", processEntries);
    $("#reset_form").addEventListener("click", resetForm);
    $("#email_address").focus();
});
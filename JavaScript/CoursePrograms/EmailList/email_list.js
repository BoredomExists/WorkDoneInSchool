const $ = selector => document.querySelector(selector);

const joinList = evt => {
    //get user entries from text boxes
    const email1 = $("#email_1").value;
    const email2 = $("#email_2").value;
    const firstName = $("#first_name").value;

    //check user entries
    let isValid = true;
    if (email1 == "") {
        $("#email_1_error").textContext = "Email is required.";
        isValid = false;
    } else {
        $("#email_1_error").textContext = "";
    }
    if(email1 != email2) {
        $("#email_2_error").textContext = "Emails must match.";
        isValid = false;
    } else {
        $("#email_2_error").textContext = "";
    }
    if(firstName == "") {
        $("#first_name_error").textContext = "First name is required.";
        isValid = false;
    } else {
        $("#first_name_error").textContext = "";
    }

    //cancel form submit if any user entries are invalid
    if (!isValid)
    {
        evt.preventDefault();
    }
};

const clearForm = () =>{
    //clear text boxes
    $("#email_1").value = "";
    $("#email_2").value = "";
    $("#first_name").value = "";

    //clear span elements
    $("#email_1").textContext = "*";
    $("#email_2").textContext = "*";
    $("#first_name").textContext = "*";

    //set focus on first text box after resetting the form
    $("#email_1").focus();
};

document.addEventListener("DOMContentLoaded", () => {
    //hook up and click events for both buttons
    $("#join_list").addEventListener("click", joinList);
    $("#clear_form").addEventListener("click", clearForm);

    //set focus on first text box after the form loads
    $("#email_1").focus();
});
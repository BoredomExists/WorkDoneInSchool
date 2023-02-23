<<<<<<< HEAD
"use strict";

$(document).ready( () => {
    $("#image_list a").each( (index, link) => {
        const image = new Image();
        image.src = link.href;
    });

    $("#image_list a").click( evt => {
        const link = evt.currentTarget;

        $("#image").attr("src", link.href);

        $("#caption").text(link.title);

        evt.preventDefault();
    });
=======
"use strict";

$(document).ready( () => {
    $("#image_list a").each( (index, link) => {
        const image = new Image();
        image.src = link.href;
    });

    $("#image_list a").click( evt => {
        const link = evt.currentTarget;

        $("#image").attr("src", link.href);

        $("#caption").text(link.title);

        evt.preventDefault();
    });
>>>>>>> db7f900ec20372baee5e3e499e0b445f3f8cf9d4
});
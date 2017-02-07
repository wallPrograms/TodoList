// Check off specific todos by clicking
$("ul").on("click", "li", function() {
    /* the long version
    // if li is gray
    if ($(this).css("color") === "rgb(128, 128, 128)") {
        // turn it black
        $(this).css({
            color: "black",
            textDecoration: "none"
        });
    } else {
        // turn it gray
        $(this).css({
            color: "gray",
            textDecoration: "line-through"
        });
    }
    */
    
   $(this).toggleClass("completed");
});

// Click on X to delete Todo
$("ul").on("click", "span", function(event) {
    $(this).parent().fadeOut(500, function() {
        $(this).remove();
    })
    event.stopPropagation(); // This will stop the event bubbling into parent elements
})

$("input[type='text']").keypress(function(event) {
    if (event.which === 13) {
        // Grabbing new todo text from input
        var todoText = $(this).val();
        
        $(this).val("");
        
        // Create a new li and add to ul
        $("ul").append("<li><span>X</span> " + todoText + "</li>"); // append takes a string of html
    }
});

/*
Notes
click() adds listeners for existing elements only
on() will add listeners for all potential future elements
We can only add a listener using jQuery on elements that exist when the code is ran the first time
*/
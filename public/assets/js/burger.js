// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".devour").on("click", function(event) {
        event.preventDefault();
        // get the id of the item clicked
        
        // change the devoured field to true
    
        // remove item from left column

        // add item to the right devoured column
    });
    
    //Get new user input value
    $(".create-form").on("submit", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();
    
        var newBurger = {
            burger_name: $("#burgerInput").val().trim(),
            devoured: 0
        };
        console.log(newBurger);
  
        // add new user value to the database
        $.ajax("/", {
            type: "POST",
            data: newBurger
        }).then(
            function() {
            console.log("created new burger");
            // Reload the page to get the updated list
            location.reload();
            }
        );
    });
});
  
$(function() {
    $(".devour").on("click", function(event) {
        var id = $(this).data("id");
        //var isDevoured = $(this).data("isDevoured");
    
        var isDevoured = {
          devoured: true
        }
    
        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
          type: "PUT",
          data: isDevoured
        }).then(
          function() {
            console.log("changed burger to", isDevoured);
            // Reload the page to get the updated list
            location.reload();
          }
        );
      });
  
    
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
    
      event.preventDefault();
  
      var newBurger = {
          name: $("#bur").val().trim()
          //devoured: $("[name=devoured]:checked").val().trim()
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
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


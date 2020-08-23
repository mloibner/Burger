// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(() => {
  $(".change-burger").on("click", function(event) {
      const id = $(this).data("id");
      const newburger = $(this).data("newburger");

      const newBurgerState = {
          devour: newburger
      };

      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
          type: "PUT",
          data: newBurgerState
      }).then(
          () => {
              console.log("changed burger to", newburger);
              // Reload the page to get the updated list
              location.reload();
          }
      );
  });

  $(".create-form").on("submit", (event) => {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();

      const newBurger = {
          burger_name: $("#bu").val().trim(),
          devour: $("[name=devour]:checked").val().trim()
      };

      // Send the POST request.
      $.ajax("/api/burgers", {
          type: "POST",
          data: newBurger
      }).then(
          () => {
              console.log("created new burger");
              // Reload the page to get the updated list
              location.reload();
          }
      );
  });


});
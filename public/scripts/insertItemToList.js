const addToList = (input) => {
  const $newItem = $(`
    <li class="listitems">
      <div class="text" id="">${input}</div>
    </li>
  `);
  $(".Books-container").append($newItem);
};

$(document).ready(() => {
  const $form = $("#input-form");
  console.log("document ready");
  $form.on("submit", function (event) {
    let input = $("#myInput").val();

    event.preventDefault();
    console.log("Submiting");
    $.ajax({
      type: "POST",
      url: `/api/books`,
      data: { todo_input: input },
      success: () => {
        addToList(input);
      },
    });
  });

  const renderItems = (items) => {
    for (let item of items) {
      addToList(item.item_name);
    }
  };
  
  $.ajax({
    type: "GET",
    url: `/api/books`,
    success: (items) => {
      console.log(items);
      renderItems(items);
    },
  });

  $(document).on("dblclick", "li", function() {
    let nameToDelete = $(this).text();
    console.log("delete", nameToDelete);
    $(this).toggleClass("strike").fadeOut("slow");
    $.ajax({
      type: "DELETE",
      url: `/api/books`,
      data: { deleteBook: nameToDelete },
      success: () => {
        console.log('Removed book:', nameToDelete);
      },
    });
  });
});

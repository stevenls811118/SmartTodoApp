const addToBookList = (input) => {
  const $newItem = $(`
    <li class="listitems">
      <div class="text" id="">${input}</div>
    </li>
  `);
  $(".Books-container").append($newItem);
};

const addToMovieList = (input) => {
  const $newItem = $(`
    <li class="listitems">
      <div class="text" id="">${input}</div>
    </li>
  `);
  $(".Movies-container").append($newItem);
};

const addToProductList = (input) => {
  const $newItem = $(`
    <li class="listitems">
      <div class="text" id="">${input}</div>
    </li>
  `);
  $(".Products-container").append($newItem);
};

const addToRestaurantList = (input) => {
  const $newItem = $(`
    <li class="listitems">
      <div class="text" id="">${input}</div>
    </li>
  `);
  $(".Restaurants-container").append($newItem);
};

const addToOtherList = (input) => {
  const $newItem = $(`
    <li class="listitems">
      <div class="text" id="">${input}</div>
    </li>
  `);
  $(".Others-container").append($newItem);
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
      url: `/api/movies`,
      data: { todo_input: input },
      success: () => {
        $(".allLists").empty();

        $.ajax({
          type: "GET",
          url: `/api/movies`,
          success: (items) => {
            console.log(items);
            renderItems(items);
          },
        });
      },
    });
  });

  const renderItems = (items) => {
    for (let item of items) {
      if (item.list_id === 1) {
        addToMovieList(item.item_name);
      } else if (item.list_id === 2) {
        addToRestaurantList(item.item_name);
      } else if (item.list_id === 3) {
        addToBookList(item.item_name);
      } else if (item.list_id === 4) {
        addToProductList(item.item_name);
      } else if (item.list_id === 5) {
        addToOtherList(item.item_name);
      }
    }
  };

  $.ajax({
    type: "GET",
    url: `/api/movies`,
    success: (items) => {
      console.log(items);
      renderItems(items);
    },
  });

  $(document).on("dblclick", "li", function () {
    let nameToDelete = $(this).text();
    console.log("delete", nameToDelete);
    $(this).toggleClass("strike").fadeOut("slow");
    $.ajax({
      type: "DELETE",
      url: `/api/movies`,
      data: { deleteBook: nameToDelete },
      success: () => {
        console.log("Removed book:", nameToDelete);
      },
    });
  });
});

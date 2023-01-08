const addToList = (input) => {
  const $newItem = $(`
    <li class="listitems">
      <div class ="text">${input} to read</div>
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
  $.ajax({
    type: "GET",
    url: `/api/books`,
    success: (items) => {
      renderItems(items);
      console.log("items", items);
    },
  });

  const renderItems = (items) => {
    for (let item of items) {
      addToList(item.item_name);
    }
  };

  console.log($("li"));
  $(document).on("dblclick", "li", function () {
    console.log("delete");
    $(this).toggleClass("strike").fadeOut("slow");
  });
});

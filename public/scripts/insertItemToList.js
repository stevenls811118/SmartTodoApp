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

const title = (input) => {
  let array = input.split(" ");
  for (let i = 0; i < array.length; i++) {
    array[i] = array[i][0].toUpperCase() + array[i].slice(1, array[i].length);
  }
  let result = array.join(" ");
  return result;
};

$(document).ready(() => {
  // PESUDO CODE
  // $bookButton = false;
  // $movieButton = false;
  // $restaurantButton = false;

  const $form = $("#input-form");
  console.log("document ready");
  $form.on("submit", function (event) {
  
    $(".fa-solid").hide();
    let input = title($("#myInput").val());
    console.log(input);
    event.preventDefault();
    console.log("Submiting");
    $.ajax({
      type: "POST",
      url: `/api/items`,
      data: { name: input },
      success: () => {
        $("#myInput").val("");
        $(".allLists").empty();

        $.ajax({
          type: "GET",
          url: `/api/items`,
          success: (items) => {
            renderItems(items);
          },
        });
      },
      error: (err) => {
        const category = err.responseJSON?.category;
        console.log(category);
        // PSUEDO COD
        $(".fa-solid").hide();
        for (const obj of category) {
          if (obj === "movie") {
            $("#movieButton").show("fast");
          }
          if (obj === "restaurant") {
            $("#restaurantButton").show("fast");
          }
          if (obj === "book") {
            $("#bookButton").show("fast");
          }
          if (obj === "product") {
            $("#shoppingButton").show("fast");
          } 
          else {
            $("movieButton", "restaurantButton", "#bookButton", "#shoppingButton").hide();
          }
        }
      }
    })
  });

  $(document).on("click", "i", function () {
    inputType = $(this).text().toLowerCase().trim();
    console.log("type is: ", inputType);
    $(".fa-solid").hide();
    let name = $("#myInput").val();
    console.log("name is: ", name);
    let data = { name: name, type: inputType, finalResult: true}
    console.log("data is: ", data);
    $("#myInput").val('');
    $.ajax({
      type: "POST",
      url: `/api/items`,
      data: data,
      success: () => {
        $.ajax({
          type: "GET",
          url: `/api/items`,
          success: (items) => {
            $(".allLists").empty();
            return renderItems(items);
          },
        });
      }
    });
  })

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
    url: `/api/items`,
    success: (items) => {
      renderItems(items);
    },
  });

  $(document).on("dblclick", "li", function () {
    let nameToDelete = $(this).text();
    console.log("delete", nameToDelete);
    $(this).toggleClass("strike").fadeOut("slow");
    $.ajax({
      type: "DELETE",
      url: `/api/items`,
      data: { delete: nameToDelete },
      success: () => {
               
      },
    });
  });
})

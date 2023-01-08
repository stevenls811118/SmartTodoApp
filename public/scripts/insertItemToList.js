
const addToList = () => {
  let input = $('#myInput').val();
  const $newItem = $(`
    <li class="listitems">
      <div class ="text">${input} to read</div>
    </li>
  `);
  $('.Books-container').append($newItem);
};

$(document).ready(() => {
  const $form = $('#input-form');
  console.log('document ready');
  $form.on('submit', function(event) {
    event.preventDefault();
    console.log('Submiting');
    $.ajax({
      type: "POST",
      url: `/api/books`,
      data: $form.serialize(),
      success: () => {
        addToList();
      }
    });
  });
});

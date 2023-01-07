const addToList = () => {
  let input = $('#myInput').val();
  const $newItem = $(`
    <li class="listitems">
      <div class ="text">${input} to read</div>
    </li>
  `);
  $('.Books-container').append($newItem);
};

const $form = $('#input-form');

$form.on('submit', function(event) {
  event.preventDefault();
  addToList();
});
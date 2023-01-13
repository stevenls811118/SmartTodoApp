let dragBox = document.querySelectorAll(".allLists");

for (let i = 0; i < dragBox.length; i++) {
  new Sortable(dragBox[i], {
    animation: 400,
  });
}

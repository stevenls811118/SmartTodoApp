let dragBox = document.querySelectorAll(".all-containers");

for (let i = 0; i < dragBox.length; i++) {
  new Sortable(dragBox[i], {
    animation: 400,
  });
}

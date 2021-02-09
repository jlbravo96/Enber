/* |||| |||| ---- MENU INTERACTION ---- |||| |||| */

const $menuIcon = document.getElementById("menuIcon"),
  $pageNav = document.getElementById("pageNav"),
  $body = document.getElementById("body");

$menuIcon.addEventListener("click", function () {
  $menuIcon.firstElementChild.classList.toggle("d-none");
  $menuIcon.lastElementChild.classList.toggle("d-none");

  $menuIcon.classList.toggle("fixed");

  $pageNav.classList.toggle("menuExpand");

  $body.classList.toggle("overflow-y-hidden");
});

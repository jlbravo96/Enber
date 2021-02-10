/* |||| |||| ---- MENU ---- |||| |||| */

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

/* |||| |||| ---- SLIDE ---- |||| |||| */

const $slideImage = document.getElementById("slideImage");

let i = 0,
  images = [],
  time = 2000;

images[0] = "assets/images/slide-img1.webp";
images[1] = "assets/images/slide-img2.webp";
images[2] = "assets/images/slide-img3.webp";

function changeImg() {
  $slideImage.src = images[i];

  if (i < images.length - 1) {
    i++;
  } else {
    i = 0;
  }

  setTimeout("changeImg()", time);
}

changeImg();

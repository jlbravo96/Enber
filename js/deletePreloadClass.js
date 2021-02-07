function deleteBodyClass() {
  const tagBody = document.body;
  tagBody.classList.remove("preload");
}
window.onload = function () {
  deleteBodyClass();
};

/*
  title tab
*/
const docTitle = document.title;
window.addEventListener("blur", () => {
  document.title = "Yahh.. ko keluar:(";
});
window.addEventListener("focus", () => {
  document.title = docTitle;
});

/* Runs in <head> so the saved theme is applied before the page paints (no flash). */
(function () {
  var t = null;
  try { t = localStorage.getItem("ms_theme"); } catch (e) {}
  if (t !== "dark" && t !== "light") {
    t = window.matchMedia && matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  document.documentElement.setAttribute("data-theme", t);
})();

/* Shared navigation, footer, theme toggle and CV viewer for every page. */
(function () {
  var CV = "cv/Mahesh_Sutar_Resume.pdf";
  var page = document.body.getAttribute("data-page") || "home";

  var main = [
    ["home", "index.html", "Home"],
    ["projects", "index.html#projects", "Projects"],
    ["experience", "index.html#experience", "Experience"],
    ["contact", "index.html#contact", "Contact"]
  ];
  var more = [
    ["blog", "blog.html", "Daily Thoughts"],
    ["poems", "poems.html", "Poems"],
    ["practice", "practice.html", "React Lab"]
  ];
  var li = function (l) {
    return '<li><a href="' + l[1] + '"' + (l[0] === page ? ' class="active" aria-current="page"' : "") + ">" + l[2] + "</a></li>";
  };

  var SUN = '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>';
  var MOON = '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>';
  var BURGER = '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 6h16M4 12h16M4 18h16"/></svg>';

  var nav = document.getElementById("site-nav");
  if (nav) {
    nav.innerHTML =
      '<nav class="site-nav"><div class="wrap bar">' +
      '<a class="logo" href="index.html">MS<b>.</b></a>' +
      '<div class="nav-right">' +
      '<div class="menu" id="menu">' +
      '<ul class="main">' + main.map(li).join("") + "</ul>" +
      '<ul class="more">' + more.map(li).join("") + "</ul>" +
      '<div class="actions"><button class="btn sm" type="button" data-cv-open>View CV</button></div>' +
      "</div>" +
      '<button class="icon-btn" id="themeBtn" type="button"></button>' +
      '<button class="icon-btn burger" id="burger" type="button" aria-label="Open menu" aria-expanded="false">' + BURGER + "</button>" +
      "</div></div></nav>";
  }

  var foot = document.getElementById("site-footer");
  if (foot) {
    foot.innerHTML = "<footer>&copy; " + new Date().getFullYear() + " Mahesh Tukaram Sutar &middot; Senior Frontend Developer &middot; Mumbai, India</footer>";
  }

  /* ----- theme toggle ----- */
  var root = document.documentElement;
  var btn = document.getElementById("themeBtn");
  function paint() {
    if (!btn) return;
    var dark = root.getAttribute("data-theme") === "dark";
    btn.innerHTML = dark ? SUN : MOON;
    btn.setAttribute("aria-label", dark ? "Switch to light theme" : "Switch to dark theme");
    btn.title = dark ? "Light theme" : "Dark theme";
  }
  paint();
  if (btn) btn.addEventListener("click", function () {
    var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try { localStorage.setItem("ms_theme", next); } catch (e) { }
    paint();
  });

  /* ----- mobile menu ----- */
  var burger = document.getElementById("burger"), menu = document.getElementById("menu");
  if (burger && menu) {
    burger.addEventListener("click", function () {
      var open = menu.classList.toggle("open");
      burger.setAttribute("aria-expanded", open ? "true" : "false");
    });
    menu.addEventListener("click", function (e) { if (e.target.closest("a")) menu.classList.remove("open"); });
  }

  /* ----- CV viewer (any element with data-cv-open) ----- */
  var dlg = document.createElement("dialog");
  dlg.id = "cvDialog";
  dlg.setAttribute("aria-label", "Resume");
  dlg.innerHTML =
    '<div class="cv-head"><strong>Mahesh Tukaram Sutar &mdash; Resume</strong>' +
    '<div class="actions"><a class="btn primary sm" href="' + CV + '" download="Mahesh_Sutar_Resume.pdf">Download CV</a>' +
    '<button class="btn sm" type="button" id="cvClose">Close</button></div></div>' +
    '<iframe title="Resume PDF" loading="lazy"></iframe>' +
    '<div class="cv-foot">Preview not showing? <a href="' + CV + '" target="_blank" rel="noopener">Open the PDF in a new tab</a> or use Download CV.</div>';
  document.body.appendChild(dlg);

  var frame = dlg.querySelector("iframe");
  function openCV() {
    if (!frame.getAttribute("src")) frame.setAttribute("src", CV + "#view=FitH");
    if (dlg.showModal) dlg.showModal(); else window.open(CV, "_blank");
  }
  document.addEventListener("click", function (e) {
    if (e.target.closest("[data-cv-open]")) { e.preventDefault(); openCV(); }
  });
  dlg.querySelector("#cvClose").addEventListener("click", function () { dlg.close(); });
  dlg.addEventListener("click", function (e) { if (e.target === dlg) dlg.close(); });
})();

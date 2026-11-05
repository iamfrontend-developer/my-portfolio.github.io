/* =====================================================================
   POEMS: add your own at the TOP of the list.
   Each poem: { title, lang: "en" | "mr", text: "line 1\nline 2\n\nnext verse" }
   "Poem of the day" rotates automatically through this list.
   These are original drafts. Replace or edit them with your own poems anytime.
   ===================================================================== */
const POEMS = [
  {
    title: "Pixel by Pixel", lang: "en",
    text: "I build the small things first:\na button, a border, a line,\nand trust that the patient rows of them\nwill one day become a design.\n\nNothing arrives all at once.\nThe page you admire was blank,\nthen a heading, then a grid,\nthen a hundred small corrections."
  },
  {
    title: "Morning Commit", lang: "en",
    text: "Before the city wakes, my screen\nis a quiet, glowing lake.\nI drop in one honest line of code\nand watch the ripples take.\n\nTomorrow's me will read it\nand hope to understand.\nThat is most of craftsmanship:\na kindness for the next hand."
  },
  {
    title: "रोजची सुरुवात", lang: "mr",
    text: "सकाळी उठून एक पाऊल टाकावं,\nकालच्यापेक्षा थोडं पुढे जावं.\nमोठं स्वप्न असलं तरी चालत राहावं,\nरोजच्या छोट्या कष्टांतच यश पाहावं."
  },
  {
    title: "The Bug", lang: "en",
    text: "For hours it hid in plain sight,\none comma, one misspelt name.\nI swore the fault was something grand.\nIt never is. The small ones are to blame.\n\nSo breathe, and read the line again.\nThe answer was never far away;\nit only waited for me to slow down\nand meet it halfway."
  },
  {
    title: "सह्याद्रीचा नाद", lang: "mr",
    text: "सह्याद्रीच्या कुशीत घुमतो एकच नाद,\nस्वराज्याच्या स्वप्नाला होती सर्वांची साद.\nनिष्ठा, जिद्द आणि शिस्त असेल सोबत,\nतर कठीण वाट होते सोपी, मनात असेल जर हिम्मत."
  },
  {
    title: "Sahyadri Mornings", lang: "en",
    text: "The Sahyadri holds the morning sky,\nits forts like patient guards of stone.\nEach wall was built on a single belief:\nthat a people's will is never alone.\n\nCourage there was never loud;\nit was planning, trust and care,\nand a promise to the land and its people\nthat still hangs in the mountain air."
  },
  {
    title: "Light Mode, Dark Mode", lang: "en",
    text: "Light mode for the morning,\ndark mode for the night.\nThe code beneath is the same code,\ndressed up in a different light.\n\nBe like that, my friend: the same at heart\nin every light you're seen.\nChange the theme as often as you like,\nbut keep your values clean."
  },
  {
    title: "चहा आणि कोड", lang: "mr",
    text: "सकाळचा चहा, समोर स्क्रीन,\nबग शोधताना विसरतो तहानभूक.\nपण एक ओळ चालली की मन होतं तृप्त,\nहेच तर आहे आपल्या कामाचं सुख."
  }
];

function poemOfTheDay() {
  var d = new Date();
  var doy = Math.floor((d - new Date(d.getFullYear(), 0, 0)) / 864e5);
  return POEMS[doy % POEMS.length];
}
function poemCard(p, opts) {
  opts = opts || {};
  var esc2 = function (s) { return String(s).replace(/[&<>"']/g, function (c) { return ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]; }); };
  return '<span class="tag">' + (opts.tag || "Poem") + '</span><span class="lang">' + (p.lang === "mr" ? "मराठी" : "English") + "</span>" +
    "<h3>" + esc2(p.title) + "</h3>" +
    '<div class="verse' + (p.lang === "mr" ? " mr-text" : "") + '">' + esc2(p.text) + "</div>";
}

/* =====================================================================
   DATA FILE: edit this to add content. No build step needed.
   ===================================================================== */

/* 1) DATED BLOG POSTS: a post appears on/after its date (YYYY-MM-DD).
      Add a new object at the top to publish a new thought. */
const THOUGHT_POSTS = [
  { date: "2026-11-02", title: "Small steps, every day", text: "Consistency beats intensity. One component practised daily teaches more than a weekend of tutorials." },
  { date: "2026-11-01", title: "Write code for the next reader", text: "Clear names and small functions are a kindness to your future self." },
  { date: "2026-10-30", title: "Design is how it works", text: "A pixel-perfect screen that is slow or confusing is still a bad screen. Build for feel as well as for look." }
];

/* 2) THOUGHT OF THE DAY: rotates automatically by day of the year. */
const THOUGHT_POOL = [
  "Progress is quiet. Keep showing up.",
  "Make it work, make it right, then make it fast.",
  "Good UI removes questions, not adds them.",
  "Read the error message slowly. It is usually telling the truth.",
  "Learn the fundamentals deeply. Frameworks come and go.",
  "A small reusable component today saves ten copy-pastes tomorrow.",
  "Be patient with bugs and with yourself.",
  "Accessibility is not an extra. It is part of quality.",
  "Discipline is choosing what you want most over what you want now.",
  "Ship, learn, improve. Repeat.",
  "Teach what you learn. It is the fastest way to understand it.",
  "Rest is part of the work. Sharp minds write better code.",
  "Simple solutions take more thought than complicated ones.",
  "Compare yourself with who you were yesterday."
];

/* 3) CHHATRAPATI SHIVAJI MAHARAJ: DIN VISHESH (key = "MM-DD").
      Dates follow commonly cited Gregorian dates. Historians sometimes differ
      (tithi / Julian calendar), so please verify before publishing widely. */
const SHIVAJI_EVENTS = {
  "02-03": { year: 1661, en: "Battle of Umberkhind: Maratha forces defeated the Mughal army of Kartalab Khan.", mr: "उंबरखिंडीची लढाई: कारतलब खानाच्या सैन्याचा पराभव." },
  "02-04": { year: 1670, en: "Sinhagad (Kondhana) won back for Swarajya; Tanaji Malusare fell in battle.", mr: "सिंहगड (कोंढाणा) स्वराज्यात परत; तानाजी मालुसरे यांचे बलिदान." },
  "02-19": { year: 1630, en: "Birth of Chhatrapati Shivaji Maharaj at Shivneri Fort (Shiv Jayanti).", mr: "छत्रपती शिवाजी महाराज यांचा शिवनेरी किल्ल्यावर जन्म (शिवजयंती)." },
  "04-03": { year: 1680, en: "Mahanirvan of Chhatrapati Shivaji Maharaj at Raigad.", mr: "रायगड येथे छत्रपती शिवाजी महाराजांचे महानिर्वाण." },
  "04-05": { year: 1663, en: "Raid on Shaista Khan at Lal Mahal, Pune.", mr: "पुण्यातील लाल महालात शाहिस्तेखानावर छापा." },
  "05-12": { year: 1666, en: "Shivaji Maharaj attends Aurangzeb's court at Agra.", mr: "आग्रा येथे औरंगजेबाच्या दरबारात उपस्थिती." },
  "06-06": { year: 1674, en: "Rajyabhishek at Raigad: Shivaji Maharaj crowned Chhatrapati (Shivrajyabhishek Din).", mr: "रायगडावर राज्याभिषेक: शिवराज्याभिषेक दिन." },
  "06-11": { year: 1665, en: "Treaty of Purandar signed with Mirza Raje Jai Singh.", mr: "मिर्झाराजे जयसिंग यांच्यासोबत पुरंदरचा तह." },
  "06-17": { year: 1674, en: "Rajmata Jijabai passes away at Pachad.", mr: "राजमाता जिजाऊ यांचे पाचाड येथे निधन." },
  "07-13": { year: 1660, en: "Battle of Pavan Khind: Baji Prabhu Deshpande holds the pass so Maharaj can reach Vishalgad.", mr: "पावनखिंडीची लढाई: बाजीप्रभू देशपांडे यांचे बलिदान, महाराज विशाळगडावर सुखरूप." },
  "08-17": { year: 1666, en: "Shivaji Maharaj's daring escape from Agra.", mr: "आग्र्याहून महाराजांची धाडसी सुटका." },
  "09-24": { year: 1674, en: "Second (Tantric) coronation held at Raigad.", mr: "रायगडावर दुसरा (तांत्रिक) राज्याभिषेक." },
  "11-10": { year: 1659, en: "Encounter with Afzal Khan at Pratapgad.", mr: "प्रतापगडावर अफझलखानाचा वध." }
};

/* 4) On days with no listed event, one of these is shown (rotates daily). */
const SHIVAJI_FACTS = [
  { en: "Raigad served as the capital of the Maratha kingdom after the 1674 coronation.", mr: "१६७४ च्या राज्याभिषेकानंतर रायगड स्वराज्याची राजधानी होती." },
  { en: "He took the title Chhatrapati and founded Hindavi Swarajya, a state built on local governance and justice.", mr: "त्यांनी छत्रपती पदवी धारण करून हिंदवी स्वराज्याची स्थापना केली." },
  { en: "The Ashtapradhan Mandal, a council of eight ministers, helped run the administration.", mr: "अष्टप्रधान मंडळ या आठ मंत्र्यांच्या मंडळाने राज्यकारभारात मदत केली." },
  { en: "Mother Jijabai shaped his values and upbringing from childhood.", mr: "माता जिजाऊ यांनी लहानपणापासून महाराजांवर संस्कार घडवले." },
  { en: "The Mavle soldiers of the Maval region were the backbone of his early army.", mr: "मावळ प्रांतातील मावळे हे महाराजांच्या सैन्याचा कणा होते." },
  { en: "He built a navy to protect the Konkan coast and strengthened sea forts such as Sindhudurg.", mr: "कोकण किनारपट्टीच्या रक्षणासाठी आरमार उभारले आणि सिंधुदुर्गसारखे जलदुर्ग बळकट केले." },
  { en: "Ganimi kava, his fast guerrilla style of warfare, used terrain and surprise to beat larger armies.", mr: "गनिमी कावा: भूप्रदेश आणि अचानकपणाचा वापर करून मोठ्या सैन्यावर मात." },
  { en: "Chroniclers record his orders to protect farmers, women and places of worship during campaigns.", mr: "मोहिमांमध्ये शेतकरी, महिला आणि प्रार्थनास्थळांचे रक्षण करण्याचे आदेश इतिहासकार नोंदवतात." },
  { en: "Hill forts were central to his strategy: they guarded the land, the people and the trade routes.", mr: "डोंगरी किल्ले हे महाराजांच्या रणनीतीचा केंद्रबिंदू होते." },
  { en: "He used Marathi and Sanskrit in administration and issued the Rajmudra seal for state documents.", mr: "राज्यकारभारात मराठी व संस्कृतचा वापर केला आणि राजमुद्रा सुरू केली." }
];

/* ---------------- helpers (no need to edit) ---------------- */
const pad = n => String(n).padStart(2, "0");
function todayInfo(d = new Date()) {
  const key = pad(d.getMonth() + 1) + "-" + pad(d.getDate());
  const doy = Math.floor((d - new Date(d.getFullYear(), 0, 0)) / 864e5);
  return { key, doy, iso: d.getFullYear() + "-" + key, d };
}
function thoughtOfTheDay() { const t = todayInfo(); return THOUGHT_POOL[t.doy % THOUGHT_POOL.length]; }
function dinVisheshToday() {
  const t = todayInfo();
  const ev = SHIVAJI_EVENTS[t.key];
  return ev ? { type: "event", ...ev } : { type: "fact", ...SHIVAJI_FACTS[t.doy % SHIVAJI_FACTS.length] };
}
function esc(s) { return String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c])); }
function dinVisheshHTML() {
  const t = todayInfo(), v = dinVisheshToday();
  const date = t.d.toLocaleDateString("mr-IN", { day: "numeric", month: "long" });
  return `<span class="tag">आजचा दिनविशेष · ${v.type === "event" ? v.year : "इतिहासातील नोंद"}</span>
    <h3>${esc(date)}</h3><p>${esc(v.en)}</p><p class="mr">${esc(v.mr)}</p>`;
}

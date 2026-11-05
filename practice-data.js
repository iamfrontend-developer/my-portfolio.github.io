/* =====================================================================
   REACT PRACTICE COMPONENTS: add your own here.

   HOW TO ADD A NEW COMPONENT
   1. Copy one object below and paste it at the end of the PRACTICE array.
   2. Give it a unique id, a title, the concepts you practise, and your code.
   3. Your code MUST define a function named  Demo  (the page renders <Demo />).
   4. Hooks are available directly: useState, useEffect, useRef, useMemo, useCallback.
   5. Inside the code string do NOT use backticks or ${...}. Use normal quotes
      and string concatenation instead, e.g. "Hello " + name.

   You can also try code instantly in the Playground at the bottom of the page.
   ===================================================================== */

const PRACTICE = [
  {
    id: "counter",
    title: "Counter",
    concepts: ["useState", "events"],
    code: `function Demo() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p style={{ fontSize: 32, margin: 0 }}>{count}</p>
      <button onClick={() => setCount(count - 1)}>-</button>{" "}
      <button onClick={() => setCount(0)}>Reset</button>{" "}
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}`
  },
  {
    id: "toggle",
    title: "Show / Hide Toggle",
    concepts: ["useState", "conditional rendering"],
    code: `function Demo() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setOpen(!open)}>{open ? "Hide" : "Show"} details</button>
      {open && <p style={{ marginTop: 10 }}>Conditional rendering with &&.</p>}
    </div>
  );
}`
  },
  {
    id: "todo",
    title: "Todo List",
    concepts: ["lists & keys", "controlled input", "immutable state"],
    code: `function Demo() {
  const [items, setItems] = useState(["Practice hooks"]);
  const [text, setText] = useState("");
  const add = () => {
    if (!text.trim()) return;
    setItems([...items, text.trim()]);
    setText("");
  };
  return (
    <div>
      <input value={text} onChange={e => setText(e.target.value)} placeholder="New task" />{" "}
      <button onClick={add}>Add</button>
      <ul style={{ marginTop: 10, paddingLeft: 18 }}>
        {items.map((it, i) => (
          <li key={i}>{it}{" "}
            <button onClick={() => setItems(items.filter((_, j) => j !== i))}>x</button>
          </li>
        ))}
      </ul>
    </div>
  );
}`
  },
  {
    id: "accordion",
    title: "Accordion",
    concepts: ["useState", "map", "props-style data"],
    code: `function Demo() {
  const data = [
    { q: "What is JSX?", a: "A syntax extension that looks like HTML inside JavaScript." },
    { q: "What is state?", a: "Data that changes over time and triggers a re-render." },
    { q: "What are keys?", a: "Stable ids that help React track list items." }
  ];
  const [open, setOpen] = useState(0);
  return (
    <div>
      {data.map((d, i) => (
        <div key={i} style={{ borderBottom: "1px solid #ddd", padding: "8px 0" }}>
          <b style={{ cursor: "pointer" }} onClick={() => setOpen(open === i ? -1 : i)}>
            {open === i ? "- " : "+ "}{d.q}
          </b>
          {open === i && <p style={{ margin: "6px 0 0" }}>{d.a}</p>}
        </div>
      ))}
    </div>
  );
}`
  },
  {
    id: "timer",
    title: "Stopwatch",
    concepts: ["useEffect", "cleanup", "setInterval"],
    code: `function Demo() {
  const [sec, setSec] = useState(0);
  const [run, setRun] = useState(false);
  useEffect(() => {
    if (!run) return;
    const id = setInterval(() => setSec(s => s + 1), 1000);
    return () => clearInterval(id);
  }, [run]);
  return (
    <div>
      <p style={{ fontSize: 28, margin: 0 }}>{sec}s</p>
      <button onClick={() => setRun(!run)}>{run ? "Pause" : "Start"}</button>{" "}
      <button onClick={() => { setRun(false); setSec(0); }}>Reset</button>
    </div>
  );
}`
  },
  {
    id: "filter",
    title: "Live Search Filter",
    concepts: ["useMemo", "derived state", "controlled input"],
    code: `function Demo() {
  const all = ["React", "Next.js", "JavaScript", "TypeScript", "Tailwind", "GSAP", "Sass"];
  const [q, setQ] = useState("");
  const shown = useMemo(
    () => all.filter(x => x.toLowerCase().includes(q.toLowerCase())),
    [q]
  );
  return (
    <div>
      <input value={q} onChange={e => setQ(e.target.value)} placeholder="Search skills..." />
      <ul style={{ paddingLeft: 18, marginTop: 8 }}>
        {shown.map(x => <li key={x}>{x}</li>)}
        {shown.length === 0 && <li>No match</li>}
      </ul>
    </div>
  );
}`
  }
];

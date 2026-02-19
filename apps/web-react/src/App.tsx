export function App() {
  const cards = [
    { title: "Active Members", value: "42" },
    { title: "Hours Exchanged", value: "318" },
    { title: "Pending Confirmations", value: "7" },
    { title: "Disputes", value: "1" }
  ];

  return (
    <main className="page">
      <header>
        <h1>Timebank Protocol</h1>
        <p>Coordinator dashboard shell (React).</p>
      </header>
      <section className="grid">
        {cards.map((card) => (
          <article key={card.title} className="card">
            <h2>{card.value}</h2>
            <p>{card.title}</p>
          </article>
        ))}
      </section>
    </main>
  );
}

import { useEffect, useMemo, useState } from "react";

type Alert = {
  member: string;
  code: string;
  message: string;
};

type Snapshot = {
  network: string;
  maxNegativeHours: number;
  balances: Record<string, number>;
  alerts: Alert[];
};

const fallback: Snapshot = {
  network: "pilot-neighborhood-01",
  maxNegativeHours: -5,
  balances: { ana: -0.5, luis: 1, maria: -0.5 },
  alerts: [{ member: "ana", code: "LOW_BALANCE", message: "Member near negative threshold" }]
};

export function App() {
  const [snapshot, setSnapshot] = useState<Snapshot | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch("http://localhost:8080/api/ledger/balances");
        if (!res.ok) throw new Error(`Request failed with status ${res.status}`);
        const data = (await res.json()) as Snapshot;
        setSnapshot(data);
      } catch (err) {
        setSnapshot(fallback);
        setError(err instanceof Error ? err.message : "Unknown API error");
      }
    }
    load();
  }, []);

  const metrics = useMemo(() => {
    if (!snapshot) {
      return [
        { title: "Active Members", value: "-" },
        { title: "Hours Exchanged", value: "-" },
        { title: "Alerts", value: "-" },
        { title: "Threshold", value: "-" }
      ];
    }

    const memberCount = Object.keys(snapshot.balances).length;
    const hoursExchanged = Object.values(snapshot.balances)
      .reduce((acc, value) => acc + Math.abs(value), 0)
      .toFixed(1);

    return [
      { title: "Active Members", value: String(memberCount) },
      { title: "Hours Exchanged", value: hoursExchanged },
      { title: "Alerts", value: String(snapshot.alerts.length) },
      { title: "Threshold", value: String(snapshot.maxNegativeHours) }
    ];
  }, [snapshot]);

  return (
    <main className="page">
      <header>
        <h1>Timebank Protocol</h1>
        <p>Coordinator dashboard (React + API integration).</p>
      </header>

      {error ? <p className="note">API unavailable, showing fallback sample. Reason: {error}</p> : null}

      <section className="grid">
        {metrics.map((card) => (
          <article key={card.title} className="card">
            <h2>{card.value}</h2>
            <p>{card.title}</p>
          </article>
        ))}
      </section>

      <section className="tableCard">
        <h2>Member Balances</h2>
        <div className="tableWrap">
          <table>
            <thead>
              <tr>
                <th>Member</th>
                <th>Balance</th>
              </tr>
            </thead>
            <tbody>
              {snapshot
                ? Object.entries(snapshot.balances).map(([member, balance]) => (
                    <tr key={member}>
                      <td>{member}</td>
                      <td>{balance.toFixed(2)}</td>
                    </tr>
                  ))
                : null}
            </tbody>
          </table>
        </div>
      </section>

      <section className="tableCard">
        <h2>Risk Alerts</h2>
        <ul>
          {snapshot?.alerts.map((alert) => (
            <li key={`${alert.member}-${alert.code}`}>
              <strong>{alert.member}</strong> [{alert.code}]: {alert.message}
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

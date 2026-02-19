import { readFileSync } from "node:fs";

function applyTransaction(balances, tx) {
  if (typeof tx.hours !== "number" || tx.hours <= 0) {
    throw new Error(`Invalid hours in transaction ${tx.id}`);
  }
  balances[tx.from] = (balances[tx.from] ?? 0) - tx.hours;
  balances[tx.to] = (balances[tx.to] ?? 0) + tx.hours;
}

function main() {
  const inputPath = process.argv[2] ?? "examples/ledger.json";
  const raw = readFileSync(inputPath, "utf8");
  const ledger = JSON.parse(raw);

  if (!Array.isArray(ledger.transactions)) {
    throw new Error("Ledger must include transactions array.");
  }

  const balances = {};
  for (const tx of ledger.transactions) {
    applyTransaction(balances, tx);
  }

  const minAllowed = Number(ledger.maxNegativeHours ?? -5);
  const offenders = Object.entries(balances)
    .filter(([, value]) => value < minAllowed)
    .map(([member, value]) => ({ member, value }));

  console.log("Balances:");
  console.log(JSON.stringify(balances, null, 2));

  if (offenders.length > 0) {
    console.log("Policy breach: negative limit exceeded");
    console.log(JSON.stringify(offenders, null, 2));
    process.exit(1);
  }

  console.log("Ledger validation passed.");
}

main();

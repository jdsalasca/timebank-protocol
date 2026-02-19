# System Prompt for Gemini Agents

You are implementing features in Timebank Protocol.

Rules:

1. Respect architecture:
   - Java backend owns ledger, reputation, and anti-abuse rules.
   - React frontend presents API state and workflows.
   - OpenAPI is source of truth for integration.
2. Execute one `agent-ready` issue end-to-end.
3. Keep PRs focused, testable, and documented.
4. Do not introduce opaque trust logic.
5. Update examples/docs for all behavior changes.
6. Report blockers with concrete options.

Output format required at end of task:

- Files changed
- Protocol behavior changes
- Commands run + results
- Open risks
- Follow-up tasks

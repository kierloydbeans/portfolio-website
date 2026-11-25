# Graph Report - portfolio  (2026-11-26)

## Corpus Check
- 4 files · ~281,113 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 3 file(s) not represented in the graph (top: (none) 2, .css 1)

## Summary
- 23 nodes · 25 edges · 3 communities
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- app.js
- services
- app.py

## God Nodes (most connected - your core abstractions)
1. `services` - 7 edges
2. `copyText()` - 3 edges
3. `index()` - 2 edges
4. `profile()` - 2 edges
5. `health()` - 2 edges
6. `escapeHTML()` - 2 edges
7. `renderProfile()` - 2 edges
8. `showToast()` - 2 edges
9. `setupInteractions()` - 2 edges
10. `state` - 1 edges

## Surprising Connections (you probably didn't know these)
- None detected - all connections are within the same source files.

## Import Cycles
- None detected.

## Communities (3 total, 0 thin omitted)

### Community 0 - "app.js"
Cohesion: 0.36
Nodes (6): copyText(), escapeHTML(), renderProfile(), setupInteractions(), showToast(), state

### Community 1 - "services"
Cohesion: 0.25
Nodes (7): services, buildCommand, healthCheckPath, name, runtime, startCommand, type

### Community 2 - "app.py"
Cohesion: 0.38
Nodes (3): health(), index(), profile()

## Suggested Questions
_Not enough signal to generate questions. This usually means the corpus has no AMBIGUOUS edges, no bridge nodes, no INFERRED relationships, and all communities are tightly cohesive. Add more files or run with --mode deep to extract richer edges._
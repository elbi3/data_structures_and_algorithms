# Algorithms & Data Structures Homework

Sorting algorithms and linked-list homeworks, with tests written live.
JavaScript + Vitest, no front-end tooling.

## Running tests

```bash
npm install        # first time only
npm test           # run all tests once
npm run test:watch # re-run on save — good for live recording
```
To run a single homework's tests make sure you are in the root of the project.
Refer to the correct homework folder and file:

```bash
npx vitest .\homeworks\merged_linked_lists\mergeLinkedLists.test.js
```


## Notes

- `globals: true` is set in `vitest.config.js`, so `describe`, `it`, `expect`, etc. are available in test files without imports.
- replace `it.todo(...)` placeholders when ready: these show up as "todo" in the test output without failing the run.
- replace them with real `it(...)` blocks as you write tests live.
- each `solution.js` throws `Not implemented` (or is an empty class) —
  replace with your real implementation.
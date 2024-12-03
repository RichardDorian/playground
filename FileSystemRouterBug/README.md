# Bun FileSystemRouter bug

When file `routes/[a]/test/index.ts` is present, the router will make the `a` an array in the `params` object.

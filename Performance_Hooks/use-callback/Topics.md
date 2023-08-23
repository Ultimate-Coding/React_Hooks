# useCallback

useCallback is a React Hook that lets you cache a function definition between re-renders.

# Returns

- On the initial render, useCallback returns the fn function you have passed.

- During subsequent renders, it will either return an already stored fn function from the last render (if the dependencies haven’t changed), or return the fn function you have passed during this render.

# What will we cover in this hook?

- Skipping re-rendering of components
- Updating state from a memoized callback

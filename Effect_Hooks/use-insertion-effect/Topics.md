# useInsertionEffect

useInsertionEffect allows inserting elements into the DOM before any layout effects fire.

# Returns

useInsertionEffect returns undefined.

# Notes

- useInsertionEffect is for CSS-in-JS library authors. Unless you are working on a CSS-in-JS library and need a place to inject the styles, you probably want useEffect or useLayoutEffect instead.

- useInsertionEffect is better than inserting styles during useLayoutEffect or useEffect because it ensures that by the time other Effects run in your components, the <style> tags have already been inserted.

- By the time useInsertionEffect runs, refs are not attached yet.

# Why do we need this hook?

- Injecting dynamic styles from CSS-in-JS libraries

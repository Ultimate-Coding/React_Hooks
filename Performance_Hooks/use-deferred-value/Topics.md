# useDeferredValue

useDeferredValue is a React Hook that lets you defer updating a part of the UI.

# Returns

- During the initial render, the returned deferred value will be the same as the value you provided.
- During updates, React will first attempt a re-render with the old value (so it will return the old value), and then try another re-render in background with the new value (so it will return the updated value).

# Notes

- You can also apply useDeferredValue as a performance optimization. It is useful when a part of your UI is slow to re-render, there’s no easy way to optimize it, and you want to prevent it from blocking the rest of the UI.

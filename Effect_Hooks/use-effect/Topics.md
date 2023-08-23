# useEffect

useEffect is a React Hook that lets you synchronize a component with an external system.

## External System means any piece of code that’s not controlled by React, such as:

- A timer managed with setInterval() and clearInterval().
- An event subscription using window.addEventListener() and window.removeEventListener().

# Returns

- useEffect returns undefined.

You need to pass two arguments to useEffect:

1. A setup function with setup code that connects to that system.
   . It should return a cleanup function with cleanup code that disconnects from that system.

2. A list of dependencies including every value from your component used inside of those functions.
   . Every reactive value used by your Effect’s code must be declared as a dependency.
   . Reactive values include props and all variables and functions declared directly inside of your component.

# Notes

- If you’re not trying to synchronize with some external system, you probably don’t need an Effect.
- Effects only run on the client. They don’t run during server rendering.

# What will we cover in this hook?

- Connecting to an external system
- Updating state based on previous state from an Effect
- Removing unnecessary object dependencies
- Removing unnecessary function dependencies

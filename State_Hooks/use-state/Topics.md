# useState

useState is a React Hook that lets you add a state variable to your component.

# Returns

1. The current state. During the first render, it will match the initialState you have passed.
2. The set function that lets you update the state to a different value and trigger a re-render.

# Notes

- The set function only updates the state variable for the next render.
- If the new value you provide is identical to the current state, as determined by an Object.is comparison, React will skip re-rendering the component and its children.
- React batches state updates. It updates the screen after all the event handlers have run and have called their set functions.

# What will we cover in this hook?

- Adding state to a component
- Updating state based on the previous state
- Updating objects and arrays in state
- Avoiding recreating the initial state
- Resetting state with a key
- Storing information from previous renders

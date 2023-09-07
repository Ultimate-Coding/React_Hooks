# useReducer

useReducer is a React Hook that lets you add a reducer to your component.

# Returns

1. The current state. During the first render, it’s set to init(initialArg) or initialArg (if there’s no init).
2. The dispatch function that lets you update the state to a different value and trigger a re-render.

# Notes

- The dispatch function only updates the state variable for the next render.
- If the new value you provide is identical to the current state, as determined by an Object.is comparison, React will skip re-rendering the component and its children.
- React batches state updates. It updates the screen after all the event handlers have run and have called their set functions.

# What will we cover in this hook?

- Adding a reducer to a component

# useTransition

useTransition is a React Hook that lets you update the state without blocking the UI.

# Returns

useTransition returns an array with exactly two items:

1. The isPending flag that tells you whether there is a pending transition.
2. The startTransition function that lets you mark a state update as a transition.

# Notes

- A state update marked as a transition will be interrupted by other state updates.
- The function we pass to startTransition executes immediately, but any state updates scheduled while it is running are marked as transitions.

# Why do we need this hook?

- Marking a state update as a non-blocking transition: (Transitions let you keep the user interface updates responsive even on slow devices.)

# useSyncExternalStore

useSyncExternalStore is a React Hook that lets you subscribe to an external store.

# Returns

It returns the snapshot of the data in the store. You need to pass two functions as arguments:

1. The subscribe function should subscribe to the store and return a function that unsubscribes.
2. The getSnapshot function should read a snapshot of the data from the store

# Notes

- The useSyncExternalStore API is mostly useful if you need to integrate with existing non-React code.

# What will we cover in this hook?

- Subscribing to a browser API

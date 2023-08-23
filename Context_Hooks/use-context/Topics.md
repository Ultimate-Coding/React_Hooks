# useContext

useContext is a React Hook that lets you read and subscribe to context from your component.

# Returns

useContext returns the context value for the calling component. It is determined as the value passed to the closest SomeContext.Provider above the calling component in the tree. If there is no such provider, then the returned value will be the defaultValue you have passed to createContext for that context.

# Notes

- React automatically re-renders all the children that use a particular context starting from the provider that receives a different value.

# What will we cover in this hook?

- Passing data deeply into the tree

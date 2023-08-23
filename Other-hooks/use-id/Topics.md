# useId

useId is a React Hook for generating unique IDs that can be passed to accessibility attributes.

# Returns

useId returns a unique ID string associated with this particular useId call in this particular component.

# Notes

- useId should not be used to generate keys in a list. it is recommended to use unique identifiers from your data as keys for the list items because each item in the list has a stable and unique key.

- Hardcoding IDs like is not a good practice in React. A component may be rendered more than once on the page—but IDs have to be unique! Instead of hardcoding an ID, generate a unique ID with useId.

# What will we cover in this hook?

- Generating unique IDs for accessibility attributes

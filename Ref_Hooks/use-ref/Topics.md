# useRef

useRef is a React Hook that lets you reference a value that’s not needed for rendering.

# Returns

- useRef returns an object with a single property:

current: Initially, it’s set to the initialValue you have passed. You can later set it to something else. If you pass the ref object to React as a ref attribute to a JSX node, React will set its current property.

On the next renders, useRef will return the same object.

# Notes

- You can mutate the ref.current property. Unlike state, it is mutable. However, if it holds an object that is used for rendering (for example, a piece of your state), then you shouldn’t mutate that object.

- When you change the ref.current property, React does not re-render your component. React is not aware of when you change it because a ref is a plain JavaScript object.

# What will we cover in this hook?

- Referencing a value with a ref
- Manipulating the DOM with a ref
- Exposing a ref to your own component

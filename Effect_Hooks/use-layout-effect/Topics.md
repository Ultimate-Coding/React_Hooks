# useLayoutEffect

useLayoutEffect is a version of useEffect that fires before the browser repaints the screen.

# Returns

useLayoutEffect returns undefined.

# Notes

- useLayoutEffect can hurt performance. Prefer useEffect when possible.

# Why do we need this hook?

- Imagine a tooltip that appears next to some element on hover. If there’s enough space, the tooltip should appear above the element, but if it doesn’t fit, it should appear below. In order to render the tooltip at the right final position, you need to know its height (i.e. whether it fits at the top).

To do this, you need to render in two passes:

1. Render the tooltip anywhere (even with a wrong position).
2. Measure its height and decide where to place the tooltip.
3. Render the tooltip again in the correct place.

All of this needs to happen before the browser repaints the screen. You don’t want the user to see the tooltip moving. Call useLayoutEffect to perform the layout measurements before the browser repaints the screen:

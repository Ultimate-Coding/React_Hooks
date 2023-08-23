import React, { useRef, forwardRef, useImperativeHandle } from "react";

const MyInput = forwardRef((props, ref) => {
  const inputRef = useRef(null);

  useImperativeHandle(
    ref,
    () => {
      return {
        focus() {
          inputRef.current.focus();
        },
      };
    },
    []
  );

  return <input {...props} ref={inputRef} />;
});

export default function CustomTextInput() {
  const ref = useRef(null);

  const handleFocus = () => {
    ref.current.focus();
  };
  return (
    <div>
      <MyInput ref={ref} />
      <button onClick={handleFocus}>Focus the input field</button>
    </div>
  );
}

// import React, { useRef, forwardRef } from "react";

// const MyInput = forwardRef((props, ref) => {
//   return <input {...props} ref={ref} />;
// });

// export default function CustomTextInput() {
//   const ref = useRef(null);

//   const handleFocus = () => {
//     ref.current.focus();
//   };
//   return (
//     <div>
//       <MyInput ref={ref} />
//       <button onClick={handleFocus}>Focus the input field</button>
//     </div>
//   );
// }

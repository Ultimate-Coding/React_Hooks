import React, { useRef, forwardRef } from "react";

const MyInput = forwardRef((props, ref) => {
  return <input {...props} ref={ref} />;
});

function CustomTextInput() {
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

export default CustomTextInput;

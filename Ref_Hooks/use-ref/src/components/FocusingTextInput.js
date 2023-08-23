import React, { useRef } from "react";

function FocusingTextInput() {
  const ref = useRef(null);

  const handleFocus = () => {
    ref.current.focus();
  };
  return (
    <div>
      <input ref={ref} />
      <button onClick={handleFocus}>Focus the input field</button>
    </div>
  );
}

export default FocusingTextInput;

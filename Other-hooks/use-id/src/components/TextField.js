import React, { Fragment, useId, useState } from "react";

function TextField() {
  const [text, setText] = useState("My name is");
  const hint = useId;

  return (
    <Fragment>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        aria-describedby={hint}
      />

      <button onClick={() => setText("My name is")}>Reset</button>
      <p id={hint}>Full Name</p>
    </Fragment>
  );
}

export default TextField;

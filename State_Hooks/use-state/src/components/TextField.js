import React, { Fragment, useState } from "react";

function TextField() {
  const [text, setText] = useState("My name is");

  return (
    <Fragment>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <br />
      {text}
      <br />
      <button onClick={() => setText("My name is")}>Reset</button>
    </Fragment>
  );
}

export default TextField;

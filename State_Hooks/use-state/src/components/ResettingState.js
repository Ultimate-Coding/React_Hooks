import React, { useState, Fragment } from "react";
import Form from "./Form";

function ResettingState() {
  const [version, setVersion] = useState(0);

  return (
    <Fragment>
      <button onClick={() => setVersion(version + 1)}>Reset</button>
      <br />
      <Form key={version} />
    </Fragment>
  );
}

export default ResettingState;

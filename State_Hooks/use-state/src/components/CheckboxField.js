import React, { Fragment, useState } from "react";

function CheckboxField() {
  const [agree, setAgree] = useState(false);
  return (
    <Fragment>
      <label>
        <input
          type="checkbox"
          checked={agree}
          onChange={(e) => setAgree(e.target.checked)}
        />
        You {agree ? "agreed" : "disagreed"} with the decision.
      </label>
    </Fragment>
  );
}

export default CheckboxField;

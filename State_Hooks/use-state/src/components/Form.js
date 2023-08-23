import React, { useState, Fragment } from "react";

function Form() {
  const [info, setInfo] = useState({
    name: "",
    address: {
      state: "",
      city: "",
    },
  });
  return (
    <Fragment>
      <label>
        Name:
        <input
          value={info.name}
          onChange={(e) => setInfo({ ...info, name: e.target.value })}
        />
      </label>
      <br />
      <label>
        State:
        <input
          value={info.address.state}
          onChange={(e) =>
            setInfo({
              ...info,
              address: { ...info.address, state: e.target.value },
            })
          }
        />
      </label>
      <br />
      <label>
        City:
        <input
          value={info.address.city}
          onChange={(e) =>
            setInfo({
              ...info,
              address: { ...info.address, city: e.target.value },
            })
          }
        />
      </label>
      <p>
        {info.name} located in {info.address.state} {info.address.city}
      </p>
    </Fragment>
  );
}

export default Form;

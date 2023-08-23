import React, { useState, useReducer, Fragment } from "react";

const initialState = {
  name: "",
  address: {
    state: "",
    city: "",
  },
};

function reducer(state, action) {
  switch (action.type) {
    case "name": {
      return {
        ...state,
        name: action.value,
      };
    }

    case "state": {
      return {
        ...state,
        address: { ...state.address, state: action.value },
      };
    }

    case "city": {
      return {
        ...state,
        address: { ...state.address, city: action.value },
      };
    }
  }

  throw Error("Unknown action:" + action.type);
}

function Form() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Fragment>
      <label>
        Name:
        <input
          value={state.name}
          onChange={(e) => dispatch({ type: "name", value: e.target.value })}
        />
      </label>
      <br />
      <label>
        State:
        <input
          value={state.address.state}
          onChange={(e) => dispatch({ type: "state", value: e.target.value })}
        />
      </label>
      <br />
      <label>
        City:
        <input
          value={state.address.city}
          onChange={(e) => dispatch({ type: "city", value: e.target.value })}
        />
      </label>
      <p>
        {state.name} located in {state.address.state} {state.address.city}
      </p>
    </Fragment>
  );
}

export default Form;
//////////////////////////////////////////////////////////////////////////////
// import React, { useState, Fragment } from "react";

// function Form() {
//   const [info, setInfo] = useState({
//     name: "",
//     address: {
//       state: "",
//       city: "",
//     },
//   });
//   return (
//     <Fragment>
//       <label>
//         Name:
//         <input
//           value={info.name}
//           onChange={(e) => setInfo({ ...info, name: e.target.value })}
//         />
//       </label>
//       <br />
//       <label>
//         State:
//         <input
//           value={info.address.state}
//           onChange={(e) =>
//             setInfo({
//               ...info,
//               address: { ...info.address, state: e.target.value },
//             })
//           }
//         />
//       </label>
//       <br />
//       <label>
//         City:
//         <input
//           value={info.address.city}
//           onChange={(e) =>
//             setInfo({
//               ...info,
//               address: { ...info.address, city: e.target.value },
//             })
//           }
//         />
//       </label>
//       <p>
//         {info.name} located in {info.address.state} {info.address.city}
//       </p>
//     </Fragment>
//   );
// }

// export default Form;

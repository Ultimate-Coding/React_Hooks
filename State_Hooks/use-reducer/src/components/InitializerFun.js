import React, { Fragment, useState, useReducer } from "react";

const initialState = (product) => {
  const items = [];
  for (let i = 0; i <= 20; i++) {
    items.push({
      id: i,
      name: product + i,
    });
  }
  return items;
};

function reducer(state, action) {
  switch (action.type) {
    case "added": {
      return [
        ...state,
        {
          id: state.length,
          name: action.value + state.length,
        },
      ];
    }

    default: {
      throw Error("Unknown action:" + action.type);
    }
  }
}

function InitializerFun() {
  const [state, dispatch] = useReducer(reducer, "item", initialState);

  const [text, setText] = useState("");

  return (
    <Fragment>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={() => dispatch({ type: "added", value: text })}>
        Add
      </button>
      <br />
      <ul>
        {state.map((item) => {
          return <li key={item.id}>{item.name}</li>;
        })}
      </ul>
    </Fragment>
  );
}

export default InitializerFun;

// import React, { Fragment, useState } from "react";

// const initialItems = () => {
//   const items = [];
//   for (let i = 0; i <= 20; i++) {
//     items.push({
//       id: i,
//       name: "item" + i,
//     });
//   }
//   return items;
// };

// function InitializerFun() {
//   const [items, setItems] = useState(initialItems);
//   const [text, setText] = useState("");

//   const handleAdd = () => {
//     setItems([
//       ...items,
//       {
//         id: items.length,
//         name: text + items.length,
//       },
//     ]);
//   };

//   return (
//     <Fragment>
//       <input value={text} onChange={(e) => setText(e.target.value)} />
//       <button onClick={handleAdd}>Add</button>
//       <br />
//       <ul>
//         {items.map((item) => {
//           return <li key={item.id}>{item.name}</li>;
//         })}
//       </ul>
//     </Fragment>
//   );
// }

// export default InitializerFun;

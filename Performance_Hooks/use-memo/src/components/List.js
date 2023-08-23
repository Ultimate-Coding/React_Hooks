import React, { Fragment, memo, useMemo, useState } from "react";

const initialItems = () => {
  const items = [];
  for (let i = 0; i <= 10000; i++) {
    items.push({
      id: i,
      name: "item" + i,
    });
  }
  return items;
};

export default function List() {
  const items = useMemo(() => initialItems(), []);

  const [isBought, setIsBought] = useState(false);

  return (
    <Fragment>
      <button onClick={() => setIsBought(!isBought)}>Change State</button>
      <Display items={items} />
    </Fragment>
  );
}

const Display = memo(function Display({ items }) {
  return (
    <Fragment>
      {items.map((item) => {
        return <p key={item.id}>{item.name}</p>;
      })}
    </Fragment>
  );
});

//////////////////////////////////////////////////////////////////////////////////////////////////

// import React, { Fragment, useState, useReducer } from "react";

// const initialState = [
//   {
//     id: 1,
//     name: "milk",
//     bought: false,
//   },
//   {
//     id: 2,
//     name: "oil",
//     bought: false,
//   },
//   {
//     id: 3,
//     name: "rice",
//     bought: true,
//   },
// ];

// function reducer(state, action) {
//   switch (action.type) {
//     case "checked": {
//       const newList = state.map((item) => {
//         if (item.id === action.id) {
//           return { ...item, bought: !item.bought };
//         } else {
//           return item;
//         }
//       });
//       return newList;
//     }

//     case "changed": {
//       const newList = state.map((item) => {
//         if (item.id === action.id) {
//           return { ...item, name: action.value };
//         } else {
//           return item;
//         }
//       });
//       return newList;
//     }

//     case "deleted": {
//       const newList = state.filter((item) => item.id !== action.id);
//       return newList;
//     }

//     case "added": {
//       return [
//         ...state,
//         {
//           id: ++nextId,
//           name: action.value,
//           bought: false,
//         },
//       ];
//     }

//     default: {
//       throw Error("Unknown action: " + action.type);
//     }
//   }
// }

// let nextId = 3;

// function List() {
//   const [state, dispatch] = useReducer(reducer, initialState);
//   const [text, setText] = useState("");
//   const [editId, setEditId] = useState(null);

//   return (
//     <Fragment>
//       <input value={text} onChange={(e) => setText(e.target.value)} />
//       <button onClick={() => dispatch({ type: "added", value: text })}>
//         Add
//       </button>
//       <br />
//       {state.map((item) => {
//         return (
//           <Fragment key={item.id}>
//             <label>
//               <input
//                 type="checkbox"
//                 checked={item.bought}
//                 onChange={() => dispatch({ type: "checked", id: item.id })}
//               />
//               {editId === item.id ? (
//                 <input
//                   value={item.name}
//                   onChange={(e) =>
//                     dispatch({
//                       type: "changed",
//                       id: item.id,
//                       value: e.target.value,
//                     })
//                   }
//                 />
//               ) : (
//                 item.name
//               )}
//             </label>

//             {editId === item.id ? (
//               <button onClick={() => setEditId(null)}>Save</button>
//             ) : (
//               <button onClick={() => setEditId(item.id)}>Edit</button>
//             )}

//             <button
//               onClick={() =>
//                 dispatch({
//                   type: "deleted",
//                   id: item.id,
//                 })
//               }
//             >
//               Delete
//             </button>
//             <br />
//           </Fragment>
//         );
//       })}
//     </Fragment>
//   );
// }

// export default List;
/////////////////////////////////////////////////////////////////////////////////////////////////////////
// import React, { Fragment, useState } from "react";

// const initialItems = [
//   {
//     id: 1,
//     name: "milk",
//     bought: false,
//   },
//   {
//     id: 2,
//     name: "oil",
//     bought: false,
//   },
//   {
//     id: 3,
//     name: "rice",
//     bought: true,
//   },
// ];

// let nextId = 3;

// function List() {
//   const [items, setItems] = useState(initialItems);
//   const [text, setText] = useState("");
//   const [editId, setEditId] = useState(null);

//   const handleChange = (itemId) => {
//     const newList = items.map((item) => {
//       if (item.id === itemId) {
//         return { ...item, bought: !item.bought };
//       } else {
//         return item;
//       }
//     });
//     setItems(newList);
//   };

//   const handleEdit = (value, itemId) => {
//     const newList = items.map((item) => {
//       if (item.id === itemId) {
//         return { ...item, name: value };
//       } else {
//         return item;
//       }
//     });
//     setItems(newList);
//   };

//   const handleDelete = (itemId) => {
//     const newList = items.filter((item) => item.id !== itemId);
//     setItems(newList);
//   };

//   const handleAdd = () => {
//     setItems([
//       ...items,
//       {
//         id: ++nextId,
//         name: text,
//         bought: false,
//       },
//     ]);
//   };

//   console.log(items);

//   return (
//     <Fragment>
//       <input value={text} onChange={(e) => setText(e.target.value)} />
//       <button onClick={handleAdd}>Add</button>
//       <br />
//       {items.map((item) => {
//         return (
//           <Fragment key={item.id}>
//             <label>
//               <input
//                 type="checkbox"
//                 checked={item.bought}
//                 onChange={() => handleChange(item.id)}
//               />
//               {editId === item.id ? (
//                 <input
//                   value={item.name}
//                   onChange={(e) => handleEdit(e.target.value, item.id)}
//                 />
//               ) : (
//                 item.name
//               )}
//             </label>

//             {editId === item.id ? (
//               <button onClick={() => setEditId(null)}>Save</button>
//             ) : (
//               <button onClick={() => setEditId(item.id)}>Edit</button>
//             )}

//             <button onClick={() => handleDelete(item.id)}>Delete</button>
//             <br />
//           </Fragment>
//         );
//       })}
//     </Fragment>
//   );
// }

// export default List;

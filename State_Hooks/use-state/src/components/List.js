import React, { Fragment, useState } from "react";

const initialItems = [
  {
    id: 1,
    name: "milk",
    bought: false,
  },
  {
    id: 2,
    name: "oil",
    bought: false,
  },
  {
    id: 3,
    name: "rice",
    bought: true,
  },
];

let nextId = 3;

function List() {
  const [items, setItems] = useState(initialItems);
  const [text, setText] = useState("");
  const [editId, setEditId] = useState(null);

  const handleChange = (itemId) => {
    const newList = items.map((item) => {
      if (item.id === itemId) {
        return { ...item, bought: !item.bought };
      } else {
        return item;
      }
    });
    setItems(newList);
  };

  const handleEdit = (value, itemId) => {
    const newList = items.map((item) => {
      if (item.id === itemId) {
        return { ...item, name: value };
      } else {
        return item;
      }
    });
    setItems(newList);
  };

  const handleDelete = (itemId) => {
    const newList = items.filter((item) => item.id !== itemId);
    setItems(newList);
  };

  const handleAdd = () => {
    setItems([
      ...items,
      {
        id: ++nextId,
        name: text,
        bought: false,
      },
    ]);
  };

  console.log(items);

  return (
    <Fragment>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={handleAdd}>Add</button>
      <br />
      {items.map((item) => {
        return (
          <Fragment key={item.id}>
            <label>
              <input
                type="checkbox"
                checked={item.bought}
                onChange={() => handleChange(item.id)}
              />
              {editId === item.id ? (
                <input
                  value={item.name}
                  onChange={(e) => handleEdit(e.target.value, item.id)}
                />
              ) : (
                item.name
              )}
            </label>

            {editId === item.id ? (
              <button onClick={() => setEditId(null)}>Save</button>
            ) : (
              <button onClick={() => setEditId(item.id)}>Edit</button>
            )}

            <button onClick={() => handleDelete(item.id)}>Delete</button>
            <br />
          </Fragment>
        );
      })}
    </Fragment>
  );
}

export default List;

import React from "react";
import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
const Content = () => {
  const [items, setItems] = useState([
    {
      id: 111,
      checked: false,
      item: "One half pound of cocao covered almonds unsalted",
    },

    {
      id: 112,
      checked: true,
      item: "Item 2",
    },

    {
      id: 113,
      checked: false,
      item: "item 3",
    },
  ]);

  const handleCheck = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);
  };

  return (
    <main>
      <ul>
        {items.map((item) => (
          <li key={item.id} className="item">
            <input
              type="checkbox"
              onChange={() => handleCheck(item.id)}
              checked={item.checked}
            />
            <label>{item.item}</label>
            <FaTrashAlt role="button" tabIndex="0" />
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Content;

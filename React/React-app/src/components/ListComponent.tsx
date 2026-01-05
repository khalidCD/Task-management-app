import { useState } from "react";
interface prop {
  items: string[];
}

function List({ items }: prop) {
  const [selectedItems, setSelectedItems] = useState(-1);
  return (
    <>
      <h1>List of items:</h1>
      <ul className="list-group">
        {items.map((item, index) => {
          return (
            <li
              className={
                selectedItems === index ? "list-group-item active" : "list-group-item"
              }
              key={index}
              onClick={() => {
                setSelectedItems(index);
              }}
            >
              {item}
            </li>
          );
        })}
      </ul>
    </>
  );
}
export default List;

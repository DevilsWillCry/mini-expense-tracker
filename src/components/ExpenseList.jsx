import React, { useState, useEffect } from "react";
import RemoveIcon from "../assets/borrar.png";
import ExpenseItem from "./ExpenseItem";
export default function ExpenseSummary({
  isLocalStorageChanged,
  onRemoveItem,
}) {
  const [items, setItems] = useState([]);

  function handleRemoveItem(id) {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
    localStorage.setItem("items", JSON.stringify(updatedItems));
    onRemoveItem();
  }

  useEffect(() => {
    const storedItems = localStorage.getItem("items");
    if (storedItems) {
      setItems(JSON.parse(storedItems));
    }
  }, [isLocalStorageChanged]);

  function handleSearchItems(event) {
    console.log(event.target.value);
    const searchTerm = event.target.value.toLowerCase();
    const filteredItems = items.filter((item) => item.description.toLowerCase().includes(searchTerm));
    setItems(filteredItems);
    if (searchTerm === '') {
      const storedItems = localStorage.getItem("items");
      if (storedItems) {
        setItems(JSON.parse(storedItems));
      }
    }
  }

  return (
    <div className="expense-list">
     <input type="text" placeholder="Buscar..." className="search-input" onChange={handleSearchItems} />
      <h2>Lista de Gastos</h2>

      {items.length === 0 && <p>No hay gastos en la lista</p>}
      {items.map((item) => (
        <div key={item.id}>
          <ExpenseItem
            id={item.id}
            description={item.description}
            amount={item.amount}
            removeIcon={RemoveIcon}
            onRemoveItem={handleRemoveItem}
          />
        </div>
      ))}
    </div>
  );
}

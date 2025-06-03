import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";

export default function ExpenseInput({ onLocalStorageChange }) {
  const [items, setItems] = useState([]);

  const {
    register,
    handleSubmit,
    reset,
    //formState: { errors },
  } = useForm({
    defaultValues: {
      description: "",
      amount: "",
    },
  });

  const onSubmit = (data) => {
    if (!data.description || !data.amount) {
      return;
    }
    const newItem = { id: uuidv4(), ...data };
    setItems([...items, newItem]);

    const storedItems = localStorage.getItem("items");
    if (storedItems) {
      localStorage.setItem("items", JSON.stringify([...JSON.parse(storedItems), newItem]));
    }

    onLocalStorageChange();
    // Reset the form
    reset({
      description: "",
      amount: "",
    });
  };

  useEffect(() => {
    const storedItems = localStorage.getItem("items");
    if (!storedItems) {
        localStorage.setItem("items", JSON.stringify(items));
    }
  }, [items]);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="expense-form">
        <label htmlFor="description"></label>
        <input
          className="description"
          type="text"
          defaultValue=""
          {...register("description")}
        />

        <label htmlFor="amount"></label>
        <input
          className="amount"
          type="number"
          defaultValue=""
          {...register("amount")}
        />

        <button type="submit">Agregar</button>
      </form>
    </>
  );
}

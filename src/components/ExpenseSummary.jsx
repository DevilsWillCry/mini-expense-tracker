import React, { useEffect, useState } from "react";

export default function ExpenseSummary({
  isLocalStorageChanged,
  isItemRemoved,
}) {
  const [amount, setAmount] = useState(0);

  useEffect(() => {
    const storedItems = localStorage.getItem("items");
    if (storedItems) {
      const items = JSON.parse(storedItems);
      const totalAmount = items.reduce(
        (acc, item) => acc + Number(item.amount),
        0
      );
      setAmount(totalAmount);
    }
  }, [isLocalStorageChanged, isItemRemoved]);

  return (
    <>
      <h3>Gastos Totales: {amount} </h3>
    </>
  );
}

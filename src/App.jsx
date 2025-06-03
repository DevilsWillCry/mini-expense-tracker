import { useState } from 'react';
import './App.css'
import ExpenseInput from './components/ExpenseInput'
import ExpenseList from './components/ExpenseList'
import ExpenseSummary from './components/ExpenseSummary';

function App() {
  const [isLocalStorageChanged, setIsLocalStorageChanged] = useState(false);
  const [itemHasBeenRemoved, setItemHasBeenRemoved] = useState(false);

  function handleLocalStorage() {
    setIsLocalStorageChanged(!isLocalStorageChanged);
  }

  function handleRemoveItem() {
    setItemHasBeenRemoved(!itemHasBeenRemoved);
  }

  return (
    <>
      <h1>Mini-Expense-Tracker</h1>
      {/* FORMULARIO CON 2 CAMPOS: DESCRIPCIÓN Y MONTO */}
      <ExpenseInput onLocalStorageChange={handleLocalStorage} />
      {/* LISTA DE GASTOS */}
      <ExpenseList isLocalStorageChanged={isLocalStorageChanged} onLocalStorageChange={handleLocalStorage} onRemoveItem={handleRemoveItem} />
      {/* TOTAL */}
      <ExpenseSummary isLocalStorageChanged={isLocalStorageChanged} isItemRemoved={itemHasBeenRemoved} onRemoveItem={handleRemoveItem}/>
    </>
  )
}

export default App

import React from 'react'
import RemoveIcon from '../assets/borrar.png'

export default function ExpenseItem({ id, description, amount, onRemoveItem }) {
  return (
    <div className='item-summary'>
      <p>Descripción: {description}</p>
      <p>Monto: {amount}</p>
      <img src={RemoveIcon} alt="Borrar" className='remove-icon' onClick={() => onRemoveItem(id)} />
    </div>
  )
}

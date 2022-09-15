import React from 'react'
import { useState } from 'react'
import { useNavigate } from "react-router-dom";



const EditToppings = () => {
    const [addTop, setAddTop] = useState('')
    const [deleteTop, setDeleteTop] = useState('')

    const navigate = useNavigate()

    const handleAdd = (e) => {
        e.preventDfault()
        
        fetch("http://localhost:3010/api/toppings", {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(addTop)
        }).then(() => {
            console.log('topping added')
            navigate('/owner')
        })
        
      }
  return (
    <div className ='edit-topping container'>
    <h2>edit toppings</h2>
      <div>
        <form onSubmit={handleAdd}>
        <label>topping</label><br/>
        <input 
        required
        type='text'
        value={addTop}
        onChange={(e) => setAddTop(e.target.value)}
        />
        <button>Add topping</button>
        </form>

        
      </div>
  </div>
  )
}

export default EditToppings
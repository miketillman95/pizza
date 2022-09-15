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
        }).catch(error => {
            error.status(500).json({
            message: error
            });
        })
           
      }

      const handleDelete = (e) => {
        e.preventDfault()
        
        fetch("http://localhost:3010/api/toppings", {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(deleteTop)
        }).then(() => {
            console.log('topping deleted')
            navigate('/owner')
        }).catch(error => {
            error.status(500).json({
            message: error
            });
        })
    }

  return (
    <div className ='edit-topping container'>
    <h2>edit toppings</h2>
      <div>
        <form onSubmit={handleAdd}>
        <label>Add topping</label><br/>
        <input 
        required
        type='text'
        value={addTop}
        onChange={(e) => setAddTop(e.target.value)}
        />
        <button>Add</button>
        </form>
      </div>

      <div>
      <form onSubmit={handleDelete}>
        <label>delete toppings</label><br/>
        <input 
        required
        type='text'
        value={deleteTop}
        onChange={(e) => setDeleteTop(e.target.value)}
        />
        <button>Add</button>
        </form>
      </div>
  </div>
  )
}

export default EditToppings
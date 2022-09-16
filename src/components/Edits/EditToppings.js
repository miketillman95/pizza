import React from 'react'
import { useState } from 'react'
import { useNavigate, Link } from "react-router-dom";
import axios from 'axios'



const EditToppings = () => {
    const [type, setType] = useState('')
    const [deleteType, setDeletetype] = useState('')
    const navigate = useNavigate()

    const handleAdd = async (e) => {
        e.preventDefault()
        try{
          const res = await axios.post("http://localhost:3010/api/toppings", {type:type})
          console.log(res.data)
          
          navigate('/owner')
        } catch(err){

          console.log(err.response)
        }
      }



      const handleDelete = async  (e) => {
        e.preventDefault()
        

        try{
          const res = await axios.delete(`http://localhost:3010/api/topping/:id`, {type: deleteType})
          console.log(res.data)
          navigate('/owner')
        } catch(err){

          console.log(err.response)
        }

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
        value={type}
        onChange={(e) => setType(e.target.value)}
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
        value={deleteType}
        onChange={(e) => setDeletetype(e.target.value)}
        />
        <button>Delete</button>
        </form>
        <br/>
        <Link to='/updatetoppings'> Update Toppings</Link>
       
      </div>
  </div>
  )
}

export default EditToppings
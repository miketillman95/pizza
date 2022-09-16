import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'



const EditPizza = () => {
    const [type, setType] = useState('')
    const [deleteType, setDeletetype] = useState('')
    const navigate = useNavigate()

    const handleAdd = async (e) => {
        e.preventDefault()
        try{
          const res = await axios.post("http://localhost:3010/api/pizza", {type:type, })
          console.log(res.data)
          
          navigate('/chef')
        } catch(err){

          console.log(err.response)
        }
      }



      const handleDelete = async  (e) => {
        e.preventDefault()
        

        try{
          const res = await axios.delete(`http://localhost:3010/api/pizza/:id`, {type:deleteType,} )
          console.log(res.data)
          navigate('/chef')
        } catch(err){

          console.log(err.response)
        }

    }

  return (
    <div className ='edit-pizza container'>
    <h2>edit pizza</h2>
      <div>
        <form onSubmit={handleAdd}>
        <label>Add pizza</label><br/>
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
       
    </div>
      <div>
      <form onSubmit={handleDelete}>
        <label>delete pizza</label><br/>
        <input 
        required
        type='text'
        value={deleteType}
        onChange={(e) => setDeletetype(e.target.value)}
        />
        <button>Delete</button>
        </form>
      </div>

     {/* <div>
        <form onSubmit={handleAdd}>
        <label>Add toppings</label><br/>
   

        <input
        required
        type='text'
        value={toppings}
        onChange={(e) => setToppings(e.target.value)}
        />
        <button>Add</button>
        </form>
      </div>
<br/> */}

<br/>
       <Link to='/updatepizza'> <button> Update pizza</button></Link>

  </div>
  )
}

export default EditPizza
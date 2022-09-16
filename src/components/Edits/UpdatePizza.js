import axios from "axios";
import { useState, useEffect } from "react";

const Home = () => {
  const [pizza, setPizza] = useState([]);
  const apiEndPoint = "http://localhost:3010/api/pizza";
  useEffect(() => {
    const getPizza = async () => {
      const { data: res } = await axios.get(apiEndPoint, {type:pizza});
      setPizza(res);
    };
    getPizza();
  }, [pizza]);

  

  const handleUpdate = async (pizza) => {
    pizza.type = "Updated";
    await axios.put(apiEndPoint + "/" + pizza.id);
    const pizzaClone = [...pizza];
    const index = pizzaClone.indexOf(pizza);
    pizzaClone[index] = { ...pizza };
    setPizza(pizzaClone);
  };

//   const handleDelete = async (pizza) => {
//     await axios.delete(apiEndPoint + "/" + pizza.id + pizza);
//     setPizza(pizza.filter((p) => p.id !== pizza.id));
//   };

  if (pizza.length === 0) return <h2> there are no pizza in the Database </h2>;
  return (
    <>
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th>type</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            
            {pizza.map((update) => (
      
              <tr>
                <td> {update.type} </td>
                <td>
            <form>
                <input
                required
                type='text'
              >
                </input>
                  <button
                    onClick={() => handleUpdate(pizza)}
                    className="btn btn-info btn-sm"
                  >
                    Update
                  </button>
                </form>
                </td>
                <td>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Home;
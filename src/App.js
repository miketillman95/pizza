import './index.css'
import AppRouter from './AppRouter';




function App() {
  return (
    <div className='navbar'>
      <ul>
        <li><a href="/">Home</a></li>
        <br/>
        <li><a href="/owner">Pizza Owner(Toppings)</a></li>
        <br/>
        <li><a href="/edittoppings">Edit toppings</a></li>
        <br/>
        <li><a href="/chef">Pizza Chef(Pizza)</a></li>
        <br/>
        <li><a href="/editpizza">Edit Pizzas</a></li>
      </ul>
    <AppRouter/>
    </div>
  );
}

export default App;
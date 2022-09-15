
import AppRouter from './AppRouter';




function App() {
  return (

    <div>
      <ul>
      <li><a href="/">Home</a></li>
        <li><a href="/owner">Owner</a></li>
        <li><a href="/edit">Edit toppings</a></li>
        <li><a href="/chef">Chef</a></li>
      </ul>
    <AppRouter/>
    </div>

  );
}

export default App;
 

import AppRouter from './AppRouter';




function App() {
  return (

    <div>
      <ul>
      <li><a href="/">Home</a></li>
      <br/>
        <li><a href="/owner">Pizza Owner</a></li>
        <br/>
        <li><a href="/edit">Edit toppings</a></li>
        <br/>
        <li><a href="/chef">Pizza Chef</a></li>
      </ul>
    <AppRouter/>
    </div>

  );
}

export default App;
 
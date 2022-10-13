import './index.css'
import AppRouter from './AppRouter';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'
import Footer from './components/Footer';




function App() {
return (
<>
	<div className='navbar-header'>
		<Navbar bg="dark" variant="dark">
			<Container>
			<Navbar.Brand href="/">Home</Navbar.Brand>
				<Nav className="me-auto">
				<Nav.Link href="/owner">Pizza Owner(Toppings)</Nav.Link>
				<Nav.Link href="/edittoppings">Edit toppings</Nav.Link>
				<Nav.Link href="/chef">Pizza Chef(Pizza)</Nav.Link>
				<Nav.Link href="/editpizza">Edit Pizzas</Nav.Link>
				</Nav>
			</Container>
		</Navbar>
	</div>
	<div className='app-wrap'>
    <AppRouter/>
	</div>
	<Footer/>
	{/* <div className='footer'>
		<h3>Zia Lucia's!</h3>
	</div> */}
</>

);
}

export default App;
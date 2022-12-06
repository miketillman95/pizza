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
				<Nav.Link href="/chef">Pizza Chef(Pizza)</Nav.Link>
				</Nav>
			</Container>
		</Navbar>
	</div>
	<div className='app-wrap'>
    <AppRouter/>
	</div>
	<Footer/>
	
</>

);
}

export default App;
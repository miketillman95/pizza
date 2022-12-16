import React from 'react'
import {Link} from 'react-router-dom'
import './../Home.css'


const Home = () => {
  return (
    <div>
        <h1>Ciao! Welcome to Zia Lucia pizza management</h1>
        <section>
            <div className='header-container'>
                <div className='title-head'>
                    <Link style={{color: 'black', textDecoration:'underline'}}to='/owner'> Pizza Owner</Link>
                    <br/>
                    <Link  style={{color: 'black', textDecoration:'underline'}} to='/chef'> Pizza chef</Link>
                </div>
            </div>
        </section>
        <img className='pizza' src="https://ciaoflorentina.com/wp-content/uploads/2011/01/Rustic-Pizza-Dough-11.jpg" alt='brown pizza'/>
    </div>
  )
}

export default Home
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
                    <Link style={{color: 'black'}}to='/owner'> Pizza Owner</Link>
                    <br/>
                    <Link  style={{color: 'black'}} to='/chef'> Pizza chef</Link>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Home
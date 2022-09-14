import React from 'react'
import {Link} from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <h1>Pizza management page</h1>
        <section>
            <div className='heaer-container'>
                <div className='title-head'>
                    <Link to='/owner'> Pizza Owner</Link>
                    <br/>
                    <Link to='/chef'> Pizza chef</Link>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Home
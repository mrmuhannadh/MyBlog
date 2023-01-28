import React from 'react'
import BodyTop from '../Components/Home/BodyTop'
import TopNav from '../Components/TopNav/TopNav'
import bg from '../images/mybg.jpg'

const Home = () => {
    return (
        <div
        style={{ 
            backgroundImage: bg
          }}
        >
            <TopNav className='other'/>
            <BodyTop className='other' />
        </div>
    )
}

export default Home

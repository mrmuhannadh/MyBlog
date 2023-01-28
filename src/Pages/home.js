import React from 'react'
import Footer from '../Components/Footer/Footer'
import BodyTop from '../Components/Home/BodyTop'
import MoreAboutMe from '../Components/Home/MoreAboutMe'
import Slider from '../Components/Home/Slider'
import TopNav from '../Components/TopNav/TopNav'
import bg from '../images/mybg.jpg'

const Home = () => {
    return (
        <div>
            <div
                style={{
                    backgroundImage: `url("https://img.freepik.com/free-photo/office-table-with-cup-coffee-keyboard-notepad_1220-4617.jpg?w=740&t=st=1674907078~exp=1674907678~hmac=f82d205ebb4111a649c5aa40afc88a8b43246fdc924e5bee9d7a55e0e15ea753")`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                    
                }}
                className='HomeBgClass'
            >
                <TopNav />
                <BodyTop />

            </div>
            <div
                style={{
                    backgroundColor: '#E0E0E0'
                }}
            >
                <MoreAboutMe />
                <h2>Certificates</h2>
                <Slider/>
                <Footer/>
            </div>
        </div>

    )
}

export default Home

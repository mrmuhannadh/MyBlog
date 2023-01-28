import React from 'react'
import Current from '../Components/Education/Current'
import TopEdu from '../Components/Education/TopEdu'
import Footer from '../Components/Footer/Footer'
import Slider from '../Components/Home/Slider'
import TopNav from '../Components/TopNav/TopNav'

const EducationPage = () => {
    return (
        <div
            style={{
                backgroundImage: `url("https://images.unsplash.com/photo-1567201864585-6baec9110dac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80")`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}
        >
            <TopNav />
            <TopEdu/>
            <Slider />
            <Current />
            <Footer />

        </div>
    )
}

export default EducationPage

import React from 'react'
import Footer from '../Components/Footer/Footer'
import TechnicalSkills from '../Components/Skills/TechnicalSkills'
import TopNav from '../Components/TopNav/TopNav'

const SkillsPage = () => {
    return (
        <>
            <div
                style={{
                    backgroundImage: `url("https://images.unsplash.com/photo-1567201864585-6baec9110dac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80")`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                }}
            >
                <TopNav />
                <TechnicalSkills/>
                <Footer />
            </div>
        </>
    )
}

export default SkillsPage
import React from 'react'
import bulb from '../../images/Gifs/bulb.gif'
import './styleSkills.css'
import DevIcon from "devicon-react-svg";

const TechnicalSkills = () => {
    return (
        <>
            <div className='Top'>
                <div className='row'>
                    <h2>Skills</h2>
                </div>
            </div>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12 techSkills'>
                        <h4>Technical Skills</h4>
                    </div>
                    <div className='col-md-1'>
                        <DevIcon icon="react" />
                    </div>
                    <div className='col-md-1'>
                        <DevIcon icon="java" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default TechnicalSkills
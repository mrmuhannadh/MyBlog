import React from 'react'
import img from '../../images/myimage.PNG'

const BodyTop = () => {
    return (
        <div>
            <div className='container'>
                <div className='row myFirstRow'>
                    <div className='col-md-5'>
                        <img src={img} alt="myLogo" className='myImage' />
                    </div>
                    <div className='col-md-7 mydatadiv'>
                        <h1>
                            M.R. Muhannadh
                        </h1>
                        <p>
                            Undergraduate at Univeristy of Ruhuna, Sri Lanka
                        </p>
                        <p className='text-left py-4'>
                            I am Mohamed Razick Muhannadh from Kandy, Sri Lanka. I am currently reading Information and Communication Technology(Hons) Degree at 
                            Faculty of Technology, Univeristy of Ruhuna. 
                            <br/>
                        </p>
                        <p>
                            A good, creative, self-driven person who consistently worked on the task at hand to finish it in the allotted time. 
                            I aspire to have a career where I will experience new challenges at every point of work and would convert all my abilities, knowledge, and 
                            interest into a meaningful contribution to the company
                        </p>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default BodyTop

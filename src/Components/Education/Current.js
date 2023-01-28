import React from 'react'
import logo from '../../images/Logo/LOGO_OF_RUHUNA.jpg'
import './EduStyle.css'
import bg from '../../images/bgEdu.jpg'

const Current = () => {
    return (
        <div>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-9 mySet'>
                        <h4>Undergraduate at Univeristy of Ruhuna</h4>
                        <p>
                            I am reading Information and Communication Technology at Faculty of Technology,
                            University of Ruhuna, Sri Lanka. This is an 4 years degree Programme.
                            For the last 5 semester I am having CGPA as <b>3.81</b> out of <b>4.0</b> I have learned many Soft Skills
                            and ICT knowledge.
                        </p>
                    </div>
                    <div className='col-md-3'>
                        <img
                            src={logo}
                            alt="UOR"
                            className='UOR'
                        />
                    </div>
                </div>
                <div className='row nextSet'>
                    <div className='col-md-6 mySet'>
                        <h4>Advanced Level</h4>
                        <p className='AL'>
                            I have done my Advanced Level at Al-Manar National School, Handessa, Kandy
                            And i have done the Science and Technology stream in my Advanced Level. in that stream
                            I have done and my result is,
                            <ul>
                                <li>Information Communication Technology - C</li>
                                <li>Engineering Technology - C</li>
                                <li>Science for Technology - C</li>
                            </ul>
                            The Z-Score is <b>1.384</b>
                        </p>
                    </div>

                </div>
                <div className='row nextSet'>
                    <div className='col-md-6 mySet'>
                        <h4>Ordinery Level</h4>
                        <p className='AL'>
                            I have done my Ordinery Level at K/D/Al-Azhar National School, Dehianga, Kandy.
                            <br />
                            My result is,
                            <ul>
                                <li>Tamil - A</li>
                                <li>Islam - A</li>
                                <li>History - A</li>
                                <li>Information and Communication Technology - B</li>
                                <li>Art - B</li>
                                <li>Scinece - C</li>
                                <li>Maths - C</li>
                                <li>Commerce - C</li>
                                <li>English - C</li>
                            </ul>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Current

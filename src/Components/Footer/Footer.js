import React from 'react'
import img from '../../images/myimage.PNG'
import './footerStyle.css'

const Footer = () => {
    return (
        <div>
            <div className='row myFooter'>
                <div className='col-md-5'>
                    <div className='row'>
                        <div className='col-md-4'>
                            <img src={img}
                                alt="myimage"
                                className='logoFooter'
                            />
                        </div>
                        <div className='col-md-8'>
                            <p>
                                This is my personal blog, That i have created to express about my self,
                                You are feel free to give me positive or negative feedback about my site.
                                <h5>Thanks for the visit</h5>
                            </p>
                        </div>
                    </div>


                </div>
                <div className='col-md-2'>
                    <h6>Quick Links</h6>
                    <ul className='myList myListFooter'>
                    <li>
                            <a href='/' className='footerLink'>Home</a>
                        </li>
                        <li>
                            <a href='/Education' className='footerLink'>Education</a>
                        </li>
                        <li>
                            <a href='/Skills' className='footerLink'>Skills</a>
                        </li>
                        <li>
                            <a href='/Projects' className='footerLink'>Projects</a>
                        </li>
                        <li>
                            <a href='/Education' className='footerLink'>Contact</a>
                        </li>
                    </ul>
                </div>
                <div className='col-md-5'>

                </div>
            </div>
        </div>
    )
}

export default Footer

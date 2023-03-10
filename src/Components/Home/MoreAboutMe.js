import React from 'react'
import Table from 'react-bootstrap/Table';
import * as Icon from 'react-bootstrap-icons';

const MoreAboutMe = () => {
    return (
        <div className='moreME'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6 myDetails'>
                        <h2>About Me</h2>
                        <Table striped hover className='tbl'>
                            <tbody>
                                <tr>
                                    <td>Name in Full</td>
                                    <td>Mohamed Razick Muhannadh</td>
                                </tr>
                                <tr>
                                    <td>Date of Birth</td>
                                    <td>15th of June, 1998</td>
                                </tr>
                                <tr>
                                    <td>Gender</td>
                                    <td>Male</td>
                                </tr>
                                <tr>
                                    <td>Marital Status</td>
                                    <td>Unmarried</td>
                                </tr>
                                <tr>
                                    <td>Address</td>
                                    <td>76, Dehianga North<br />Muruthalawa,<br />Kandy,<br />Sri Lanka</td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                    <div className='col-md-4 mx-4 my-5 divRight'>
                        <Table className='tableTwo'>
                            <tbody>
                                <tr>
                                    <td>
                                        <Icon.PhoneFill size={40} />
                                    </td>
                                    <td>
                                        (+94) 754092934
                                        <br />
                                        (+94) 766649866
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <Icon.Whatsapp size={40} />
                                    </td>
                                    <td className='tdSet'>
                                        (+94) 754092934
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <Icon.EnvelopeAtFill size={40} />
                                    </td>
                                    <td className='tdSet'>
                                        mrmuhannadh@gmail.com
                                    </td>
                                </tr>
                                <br />
                                <tr className='myRow'>
                                    <td colSpan={2}>
                                        <div className='row'>
                                            <div className='col-md-2'>
                                            <div class="badge-base LI-profile-badge" data-locale="en_US" data-size="medium" data-theme="light" data-type="HORIZONTAL" data-vanity="razick-muhannadh" data-version="v1"><a class="badge-base__link LI-simple-link" href="https://lk.linkedin.com/in/razick-muhannadh?trk=profile-badge" className='myLink'><Icon.Linkedin size={30} /></a></div>
                                            </div>
                                            <div className='col-md-2'>
                                                <Icon.Facebook size={30} />
                                            </div>
                                            <div className='col-md-2'>
                                                <Icon.Instagram size={30} />
                                            </div>
                                            <div className='col-md-2'>
                                                <Icon.Twitter size={30} />
                                            </div>
                                            <div className='col-md-2'>
                                                <a href="https://github.com/mrmuhannadh" className='myLink' target="_blank" rel="noopener noreferrer">
                                                    <Icon.Github size={30} />
                                                </a>
                                            </div>
                                            <div className='col-md-2'>
                                                <a href="https://www.youtube.com/@mnhtechidea4291" className='myLink' target="_blank" rel="noopener noreferrer">
                                                    <Icon.Youtube size={30} />
                                                </a>
                                            </div>
                                        </div>
                                    </td>
                                </tr>

                            </tbody>
                        </Table>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default MoreAboutMe

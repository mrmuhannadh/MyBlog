import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../../images/Certificates/AdaGrad.PNG'
import img2 from '../../images/Certificates/CloudSkillsChallange.PNG'
import img3 from '../../images/Certificates/imun.jpeg'
import img4 from '../../images/Certificates/ProfessionalDevelopment.PNG'
import img5 from '../../images/Certificates/UnderstaningBigPicture.PNG'

const Slider = () => {
    return (
        <div className='container mySliderSec'>
            <Carousel variant="dark" className='sliderSec'>
                <Carousel.Item>
                    <img
                        className="d-block w-100 imgSlider"
                        src={img1}
                        alt="First slide"
                    />
                    <Carousel.Caption className='detailsSection'>
                        <h5>AdaGrad' 21 - Introduction to Machine Learning</h5>
                        <p>IEEE Computer Society Student Branch of SLTC</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 imgSlider"
                        src={img2}
                        alt="Second slide"
                    />
                    <Carousel.Caption className='detailsSection'>
                        <h5>Cloud Skills Challange</h5>
                        <p>Univeristy of Ruhuna & Microsoft Students Learn Ambassador</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 imgSlider"
                        src={img3}
                        alt="Third slide"
                    />
                    <Carousel.Caption className='detailsSection'>
                        <h5>IMUN Online Conference 61.0</h5>
                        <p>
                            UNDP, UNESCO, International Model United Nations, IOM
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 imgSlider"
                        src={img4}
                        alt="Third slide"
                    />
                    <Carousel.Caption className='detailsSection'>
                        <h5>Professional Development Programme</h5>
                        <p>
                            Univeristy of Ruhuna & Ceylon Chamber of Commerce
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 imgSlider"
                        src={img5}
                        alt="Third slide"
                    />
                    <Carousel.Caption className='detailsSection'>
                        <h5>Understanding Big Picture</h5>
                        <p>
                            Microsoft Learn Student Ambassadors
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Slider

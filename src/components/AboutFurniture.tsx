import React from 'react';
import img1 from '../assets/images/image-about-dark.jpg'
import img2 from '../assets/images/image-about-light.jpg'

const AboutFurniture: React.FC = () => {
    return (
        <>
            <div className="about-furniture-container">
                <div className="image-container dark">
                    <img src={img1} alt="image_dark" className='image_dark' />
                </div>
                <div className="about-text-container">
                    <h3>About our furniture</h3>
                    <p>Our multifunctional collection blends design and function to suit your individual taste. Make each room unique, or pick a cohesive theme that best expresses your interests and what inspires you. Find the furniture pieces you need, from traditional to contemporary styles or anything in between. Product specialists are available to help you create your dream space.</p>
                </div>
                <div className="image-container light">
                    <img src={img2} alt="image_light" className='image_light' />
                </div>
            </div>
        </>
    );
}

export default AboutFurniture;
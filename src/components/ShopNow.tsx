import React, { useEffect, useState } from 'react';
import { img1, img2, img3, img1Mobile, img2Mobile, img3Mobile } from '../assets/images';
import { arrow, angleleft, angleright} from '../assets/icons'

interface ImageDescription {
    image: string;
    desktopImage: string;
    mobileImage: string;
    heading: string;
    caption: string;
}

const imageDescription: ImageDescription[] = [
    {
        image: img1,
        desktopImage: img1,
        mobileImage: img1Mobile,
        heading: "Discover innovative ways to decorate",
        caption: "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love."
    },
    {
        image: img2,
        desktopImage: img2,
        mobileImage: img2Mobile,
        heading: "We are available all across the globe",
        caption: "  With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today."
    },
    {
        image: img3,
        desktopImage: img3,
        mobileImage: img3Mobile,
        heading: "Manufactured with the best materials",
        caption: "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office."
    }
]
const ShopNow: React.FC = () => {
    const[currentImage, setCurrentImage] = useState(0);

    const previousImage = () => {
        setCurrentImage(prevIndex => (prevIndex === 0 ? imageDescription.length - 1 : prevIndex - 1));
    };

    const nextImage = () => {
        setCurrentImage(prevIndex => (prevIndex === imageDescription.length - 1 ? 0 : prevIndex + 1));
    };

    useEffect(() => {
        const detectKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'ArrowLeft') {
                previousImage();
            } else if (e.key === 'ArrowRight') {
                nextImage();
            }
        };

        document.addEventListener('keydown', detectKeyDown, true);
        return () => {
            document.removeEventListener('keydown', detectKeyDown, true);
        };
    }, []);

    return (
        <>
            <div className="shop-now-container">
                <div className="shop-now-image-container">
                    <img
                        src={window.innerWidth <= 768 ? imageDescription[currentImage].mobileImage : imageDescription[currentImage].desktopImage}
                        alt="Product"
                        className="product-image"
                    />
                    <div className="arrow-container-mobile">
                        <img src={angleleft} alt="Mobile Left Arrow" className="arrow left-arrow" onClick={previousImage} />
                        <img src={angleright} alt="Mobile Right Arrow" className="arrow right-arrow" onClick={nextImage} />
                    </div>
                </div>
                <div className="content-container">
                    <div className="arrow-container">
                        <img src={angleleft} alt="Left Arrow" className="arrow left-arrow" onClick={previousImage} />
                        <img src={angleright} alt="Right Arrow" className="arrow right-arrow" onClick={nextImage} />
                    </div>
                    <div className="text-container">
                        <h1>{ imageDescription[currentImage].heading }</h1>
                        <p>{ imageDescription[currentImage].caption }</p>
                        <div className="shopnow">
                            <p>Shop now</p>
                            <img src={ arrow } alt="arrow" className="shop-now-arrow"/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ShopNow;
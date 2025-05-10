import React, {useRef, useState, useEffect} from "react";
import "./productGallary.css";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
const images = [
    {
        original: "https://admin.spaworlduae.com/upload/product/1737449933pro_img_372.jpg",
        thumbnail: "https://admin.spaworlduae.com/upload/product/1737449933pro_img_372.jpg",
    },
    {
        original: "https://admin.spaworlduae.com/upload/product/1710402117pro_img_321.jpg",
        thumbnail: "https://admin.spaworlduae.com/upload/product/1710402117pro_img_321.jpg",
    },
    {
        original: "https://admin.spaworlduae.com/upload/product/pro_img_377.jpg",
        thumbnail: "https://admin.spaworlduae.com/upload/product/pro_img_377.jpg",
    },
    {
        original: "https://admin.spaworlduae.com/upload/product/pro_img_376.jpg",
        thumbnail: "https://admin.spaworlduae.com/upload/product/pro_img_376.jpg",
    },
];
const ProductGallary = () => {
    const imageGalleryRef = useRef(null);
    const [fullscreen, setFullscreen] = useState(false);
    const [showNav, setShowNav] = useState(window.innerWidth < 1000);

    useEffect(() => {
        // Add an event listener for window resize
        const handleResize = () => {
            setShowNav(window.innerWidth < 1000);
        };

        window.addEventListener("resize", handleResize);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
  return (
    <div className="image-gallery-container">
            <div ref={imageGalleryRef}>
                <ImageGallery
                    items={images}
                    infinite={true}
                    showPlayButton={false}
                    showFullscreenButton={false}
                    lazyLoad={true}
                    showNav={showNav}
                    slideDuration={300}
                />
            </div>
        </div>
  )
}

export default ProductGallary
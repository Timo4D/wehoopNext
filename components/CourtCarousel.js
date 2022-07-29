/* eslint-disable @next/next/no-img-element */
import Carousel from "react-bootstrap/Carousel";
import Image from "next/image";

const CourtCarousel = () => {
    return (
        <Carousel interval={10000}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://mein.toubiz.de/api/v1/article/a790735f-10af-4b83-a6b8-65dd45036871/mainImage?format=image/jpeg&width=1900"
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://mein.toubiz.de/api/v1/article/a790735f-10af-4b83-a6b8-65dd45036871/mainImage?format=image/jpeg&width=1900"
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://mein.toubiz.de/api/v1/article/a790735f-10af-4b83-a6b8-65dd45036871/mainImage?format=image/jpeg&width=1900"
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    );
};

export default CourtCarousel;

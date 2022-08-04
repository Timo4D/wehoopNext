/* eslint-disable @next/next/no-img-element */
import Carousel from "react-bootstrap/Carousel";
import Image from "next/image";

const CourtCarousel = (props) => {
    return (
        <>
            <Carousel interval={10000}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={props.images}
                        alt="First slide"
                    />
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default CourtCarousel;

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

const categories = [
    "SPOTS_NATURE.png",
    "SPOTS_PARKING.png",
    "SPOTS_PRIVATE_LAND.png",
    "SPOTS_REST_AERA.png",
    "UTILS_COMPOST.png",
    "UTILS_GARAGE.png",
    "UTILS_OIL.png",
    "UTILS_SHOWER.png",
    "UTILS_TECHNICAL_CONTROL.png",
    "UTILS_WAREHOUSE.png",
    "UTILS_WATER.png",
    "UTILS_WOOD_DUST.png",
]

const Clients = (props) => {
    return (
        <section id="clients" className={props.className}>

            {/* <!-- Container --> */}
            <Container>

                <Row>

                    <Swiper
                        className="clients-slider"
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false
                        }}
                        breakpoints={{
                            320: {
                                spaceBetween: 20,
                                slidesPerView: 2
                            },
                            768: {
                                spaceBetween: 30,
                                slidesPerView: 3
                            },
                            1024: {
                                spaceBetween: 40,
                                slidesPerView: 5
                            }
                        }}
                        modules={[Autoplay]}
                    >

                        {categories.map((category, index) => (
                            <SwiperSlide className="client" key={index}>
                                <a href="#">
                                    <img src={`/images/categories/${category}`} alt={`Category ${index + 1}`} />
                                </a>
                            </SwiperSlide>
                        ))}

                    </Swiper>

                </Row>

            </Container>

        </section>
    );
}

export default Clients;
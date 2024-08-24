import React, { useEffect, useRef, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CountUp from 'react-countup';
const Counters = () => {
    const parallax = useRef(null);
    const [places, setPlaces] = useState(0);
    const [users, setUsers] = useState(0);

    const startDate = new Date('2021-01-05');
    const currentDate = new Date();
    const timeDifference = Math.abs(currentDate - startDate);
    const daysDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

    const [counter, setCounter] = useState(false);

    useEffect(() => {
        const scrollHandler = () => {
            const counterId = document.querySelector('#counters');
            const pos = window.scrollY;

            if (counterId) {
                if (counterId.offsetTop - 150 <= pos && counterId.offsetTop + counterId.clientHeight >= pos) {
                    setCounter(true);
                }
            }
        };

        window.addEventListener('scroll', scrollHandler);
        return () => window.removeEventListener('scroll', scrollHandler);
    });

    const handleFetchData = async () => {
        const places = await fetch('https://backend.lacartonomades.fr/api/places?pagination%5Bpage%5D=1&pagination%5BpageSize%5D=1&fields=id')
        const placesData = await places.json()
        const { total } = placesData.meta.pagination
        setPlaces(total)
        const users = await fetch('https://backend.lacartonomades.fr/api/users/count')
        const usersData = await users.json()
        setUsers(usersData)
    }

    useEffect(() => {
        handleFetchData()
    }, [])

    return (
        <section id="counters" className="parallax" data-image="/images/parallax/counters.jpg" ref={parallax}>

            {/* <!-- Overlay --> */}
            <div className="overlay"></div>

            {/* <!-- Container --> */}
            <Container>

                <Row>

                    {/* <!-- Counter 1 --> */}
                    <Col className="col-12 col-md-6 col-lg-3">
                        <div className="counter wow fadeInUp" data-wow-offset="10" data-wow-duration="1s" data-wow-delay="0">
                            <div className="icon icon-basic-geolocalize-01"></div>
                            <div className="counter-content res-margin">

                                <CountUp start={0} end={places} delay={0} duration={2}>
                                    {({ countUpRef, start }) => {
                                        if (counter) {
                                            start();
                                        }

                                        return (
                                            <h5>
                                                <span ref={countUpRef} className="number-count">0</span>
                                            </h5>
                                        );
                                    }}
                                </CountUp>

                                <p>Lieux aujourd'hui</p>
                            </div>
                        </div>
                    </Col>

                    {/* <!-- Counter 2 --> */}
                    <Col className="col-12 col-md-6 col-lg-3">
                        <div className="counter wow fadeInUp" data-wow-offset="10" data-wow-duration="1s" data-wow-delay="0.3s">
                            <div className="icon icon-basic-heart"></div>
                            <div className="counter-content res-margin">

                                <CountUp start={0} end={users} delay={0} duration={2}>
                                    {({ countUpRef, start }) => {
                                        if (counter) {
                                            start();
                                        }

                                        return (
                                            <h5>
                                                <span ref={countUpRef} className="number-count">0</span>
                                            </h5>
                                        );
                                    }}
                                </CountUp>

                                <p>Utilisateurs sur la version 2</p>
                            </div>
                        </div>
                    </Col>

                    {/* <!-- Counter 3 --> */}
                    <Col className="col-12 col-md-6 col-lg-3">
                        <div className="counter wow fadeInUp" data-wow-offset="10" data-wow-duration="1s" data-wow-delay="0.6s">
                            <div className="icon icon-basic-spread-text"></div>
                            <div className="counter-content res-margin">

                                <CountUp start={0} end={851508} delay={0} duration={2}>
                                    {({ countUpRef, start }) => {
                                        if (counter) {
                                            start();
                                        }

                                        return (
                                            <h5>
                                                <span ref={countUpRef} className="number-count">0</span>
                                            </h5>
                                        );
                                    }}
                                </CountUp>

                                <p>Lignes de code</p>
                            </div>
                        </div>
                    </Col>

                    {/* <!-- Counter 3 --> */}
                    <Col className="col-12 col-md-6 col-lg-3">
                        <div className="counter wow fadeInUp" data-wow-offset="10" data-wow-duration="1s" data-wow-delay="0.6s">
                            <div className="icon icon-basic-spread-text"></div>
                            <div className="counter-content res-margin">

                                <CountUp start={0} end={daysDifference} delay={0} duration={2}>
                                    {({ countUpRef, start }) => {
                                        if (counter) {
                                            start();
                                        }

                                        return (
                                            <h5>
                                                <span ref={countUpRef} className="number-count">0</span>
                                            </h5>
                                        );
                                    }}
                                </CountUp>

                                <p>Jours d'existence</p>
                            </div>
                        </div>
                    </Col>



                </Row>

            </Container>

        </section>
    );
}

export default Counters;
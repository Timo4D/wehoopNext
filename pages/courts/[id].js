import { useRouter } from "next/router";
import styles from "../../styles/coutds.module.css";
import Container from "react-bootstrap/Container";
import CourtCarousel from "../../components/CourtCarousel";
import dynamic from "next/dynamic";
import { Col, Row } from "react-bootstrap";

import React, { useState } from "react";

const MapWithNoSSR = dynamic(() => import("../../components/maps/Map"), {
    ssr: false,
});

const Courts = () => {
    const router = useRouter();
    const { id } = router.query;

    return (
        <>
            <Container fluid className={styles.main}>
                <h1 className={styles.title}>CourtName</h1>

                <Container>
                    <CourtCarousel />
                    <h2>Beschreibung:</h2>
                    <p className={styles.description}>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore et
                        dolore magna aliquyam erat, sed diam voluptua. At vero
                        eos et accusam et justo duo dolores et ea rebum. Stet
                        clita kasd gubergren, no sea takimata sanctus est Lorem
                        ipsum dolor sit amet. Lorem ipsum dolor sit amet,
                        consetetur sadipscing elitr, sed diam nonumy eirmod
                        tempor invidunt ut labore et dolore magna aliquyam erat,
                        sed diam voluptua. At vero eos et accusam et justo duo
                        dolores et ea rebum. Stet clita kasd gubergren, no sea
                        takimata sanctus est Lorem ipsum dolor sit amet.
                    </p>
                    <hr />
                    <h2>Location</h2>

                    <div className={styles.map}>
                        <MapWithNoSSR
                            lat={48.811565221026825}
                            lng={9.433921753375984}
                            size={"25vw"}
                        />
                    </div>
                </Container>
            </Container>
        </>
    );
};

export default Courts;

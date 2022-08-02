import { useRouter } from "next/router";
import styles from "../../styles/coutds.module.css";
import Container from "react-bootstrap/Container";
import CourtCarousel from "../../components/CourtCarousel";
import dynamic from "next/dynamic";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";

import React, { useState } from "react";

import { PrismaClient } from "@prisma/client";

const MapWithNoSSR = dynamic(() => import("../../components/maps/Map"), {
    ssr: false,
});

const Courts = ({ court }) => {
    const [show, setShow] = useState(false);
    const [rating, setRating] = useState(0);
    const router = useRouter();
    const { id } = router.query;

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    const handleSaveClose = () => {
        handleClose();
        console.log("Rating:" + rating);
        //TODO: Handle the change in Rating
    };
    const handleRangeChange = (e) => {
        setRating(e.target.value);
    };

    return (
        <>
            <Container fluid className={styles.main}>
                <div className={styles.title}>
                    <h1>{court.name}</h1>
                    <Button variant="primary" onClick={handleShow}>
                        Rating: {court.rating}/10
                    </Button>
                </div>

                <Container>
                    <CourtCarousel />
                    <h2>Beschreibung:</h2>
                    <p className={styles.description}>
                        Hallo {court.description}
                    </p>
                    <hr />
                    <h2>Location</h2>

                    <div className={styles.map}>
                        <MapWithNoSSR
                            lat={court.latitude}
                            lng={court.longitude}
                            size={"25vw"}
                        />
                    </div>
                </Container>
            </Container>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Rate {court.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                        >
                            <Form.Label>Rating</Form.Label>
                            <Form.Range
                                name="ratingRange"
                                id="ratingRange"
                                step={1}
                                min="0"
                                max="10"
                                value={rating}
                                onChange={handleRangeChange}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleClose} variant="secondary">
                        Close
                    </Button>
                    <Button onClick={handleSaveClose} variant="primary">
                        Save Rating
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export async function getServerSideProps(context) {
    const prisma = new PrismaClient();
    const court = await prisma.court.findUnique({
        where: {
            id: parseInt(context.query.id),
        },
    });
    console.log(court);
    console.log("-------");

    return { props: { court } };
}

export default Courts;

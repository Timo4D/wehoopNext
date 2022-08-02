import { useRouter } from "next/router";
import styles from "../../styles/coutds.module.css";
import Container from "react-bootstrap/Container";
import CourtCarousel from "../../components/CourtCarousel";
import dynamic from "next/dynamic";
import { Col, Row } from "react-bootstrap";

import React, { useState } from "react";

import { PrismaClient, Prisma } from "@prisma/client";

const MapWithNoSSR = dynamic(() => import("../../components/maps/Map"), {
    ssr: false,
});

const Courts = ({ res }) => {
    const router = useRouter();
    const { id } = router.query;
    return (
        <>
            <Container fluid className={styles.main}>
                <h1 className={styles.title}>{res.name}</h1>

                <Container>
                    <CourtCarousel />
                    <h2>Beschreibung:</h2>
                    <p className={styles.description}>Hallo {res.description}</p>
                    <hr />
                    <h2>Location</h2>

                    <div className={styles.map}>
                        <MapWithNoSSR
                            lat={res.latitude}
                            lng={res.longitude}
                            size={"25vw"}
                        />
                    </div>
                </Container>
            </Container>
        </>
    );
};

export async function getServerSideProps(context) {
    const prisma = new PrismaClient();
    const res = await prisma.court.findUnique({
        where: {
            id: parseInt(context.query.id),
        },
    });
    console.log(res);
    console.log("-------");

    return { props: { res } };
}

export default Courts;

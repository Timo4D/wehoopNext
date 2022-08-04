import dynamic from "next/dynamic";
import { Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import styles from "../../styles/CourtAdd.module.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Router from "next/router";
import { useState } from "react";

const MapWithNoSSR = dynamic(
    () => import("../../components/maps/CustomMarkerMap"),
    {
        ssr: false,
    }
);

const CoutAdd = () => {

    const [errorMsg, setErrorMsg] = useState("");

    let location;

    function setLocation(newLocation) {
        location = newLocation;
        console.log(location);
    }

    const submitCourt = async (event) => {
        event.preventDefault();

        if(location) {
            const name = event.target.name.value;
            const desc = event.target.desc.value;

            console.log("Sorry but Images are not supported as of now");
    
            const res = await fetch("/api/courtForm", {
                body: JSON.stringify({
                    name: name,
                    description: desc,
                    latitude: location.lat,
                    longitude: location.lng
                }),
                headers: {
                    "Content-Type": "application/json",
                },
                method: "POST",
            });
            Router.push("/courts");
        } else {
            setErrorMsg("Please select the location again")
        }

    };

    return (
        <Container className="mb-3">
            <Row>
                <MapWithNoSSR
                    sendData={(data) => {
                        setLocation(data);
                    }}
                    lat={48.811565221026825}
                    lng={9.433921753375984}
                    size={"600px"}
                />
            </Row>
            <Form onSubmit={submitCourt} className={styles.formContainer}>
                <Form.Group className="mb-3">
                    <Form.Label>Court Name</Form.Label>
                    <Form.Control
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Court Name"
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                        id="desc"
                        name="desc"
                        as="textarea"
                        rows={3}
                    />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Add some images</Form.Label>
                    <Form.Control
                        id="pics"
                        name="pics"
                        type="file"
                    />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <p>{errorMsg}</p>
        </Container>
    );
};

export default CoutAdd;

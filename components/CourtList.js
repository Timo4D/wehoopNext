import CourtCard from "./CourtCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../styles/CourtList.module.css";
import { Button } from "react-bootstrap";

const CourtList = () => {
    return (
        <Container className={styles.main}>
            <Row>
                <Col>
                    <CourtCard />
                </Col>
                <Col>
                    <CourtCard />
                </Col>
                <Col>
                    <CourtCard />
                </Col>
                <Col>
                    <CourtCard />
                </Col>
            </Row>
            <Row>
                <Col>
                    <CourtCard />
                </Col>
                <Col>
                    <CourtCard />
                </Col>
                <Col>
                    <CourtCard />
                </Col>
                <Col>
                    <CourtCard />
                </Col>
            </Row>
        </Container>
    );
};

export default CourtList;

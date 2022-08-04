/* eslint-disable @next/next/no-img-element */
import { useSession } from "next-auth/react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../styles/Account.module.css";

const Account = () => {
    const { data: session } = useSession({ required: true });

    if (session) {
        return (
            <Container className={styles.main}>
                <Row>
                    <p>Welcome {session.user.name}</p>
                    <img
                        className="profilePic"
                        alt="profile picture"
                        src="https://image.geo.de/31475914/t/si/v3/w1440/r1/-/sebastian-vettel-72214145.jpg"
                    />
                </Row>
            </Container>
        );
    }

    return (
        <div>
            <p>You are not logged in.</p>
        </div>
    );
};

export default Account;

/* eslint-disable @next/next/no-img-element */
import { PrismaClient } from "@prisma/client";
import { Container, Row, Col, Collapse, Button } from "react-bootstrap";
import styles from "../../styles/Account.module.css";
import CourtList from "../../components/CourtList";
import { useState } from "react";
import { useSession } from "next-auth/react";

const Account = ({ user }) => {
    const [posts, setPosts] = useState(true);
    const [courts, setCourts] = useState(true);
    const { data: session } = useSession();

    return (
        <Container className={styles.main}>
            <Row>
                <Col fluid>
                    <img
                        className={styles.profilePic}
                        alt="profile picture"
                        src={user.image}
                    />
                    <h2>{user.name}</h2>
                    <p>User Bio</p>
                    {session && user.name == session.user.name  && <Button>Edit Profile</Button>}
                </Col>

                <h3 onClick={() => setCourts(!courts)}>Main Courts</h3>
                <Collapse in={courts}>
                    <div id="court-colapse">
                        <CourtList />
                    </div>
                </Collapse>

                <h3 onClick={() => setPosts(!posts)}>Posts</h3>
                <Collapse in={posts}>
                    <div id="posts-colapse">
                        <p>Post</p>
                        <p>Post</p>
                        <p>Post</p>
                    </div>
                </Collapse>
            </Row>
        </Container>
    );
};

export async function getServerSideProps(context) {
    console.log(context.query.username);
    const prisma = new PrismaClient();
    const user = await prisma.user.findUnique({
        where: {
            name: context.query.username,
        },
    });
    //console.log(user);
    return { props: { user } };
}

export default Account;

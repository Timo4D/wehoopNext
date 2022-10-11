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
    const [edit, setEdit] = useState(false);
    const [editButtonText, setEditButtonText] = useState("Edit Profile");
    const [bio, setBio] = useState(user.bio);
    const [newBio, setNewBio] = useState(bio);
    const { data: session } = useSession();

    function editProfile(event) {
        setEdit(!edit);
        if (edit) {
            setEditButtonText("Edit Profile");
            handleSave();
            console.log("save");
        } else {
            setEditButtonText("Save Changes");
        }
        console.log("Edit profile " + edit);
    }

    async function handleSave() {
        setBio(newBio);
        console.log(document.getElementById("bioField").value);
        const res = await fetch("/api/user/updateBio", {
            body: JSON.stringify({
                bio: newBio,
                name: session.user.name,
            }),
            headers: {
                "Content-Type": "application/json",
            },
            method: "POST",
        });
    }

    function bioChange(event) {
        setNewBio(event.target.value);
    }

    return (
        <Container className={styles.main}>
            <Row>
                <Col>
                    <img
                        className={styles.profilePic}
                        alt="profile picture"
                        src={user.image}
                    />
                    <h2>{user.name}</h2>
                    {!edit && <p id="bio">{bio}</p>}
                    {edit && (
                        <form>
                            <textarea
                                id="bioField"
                                className={styles.textArea}
                                value={newBio}
                                onChange={bioChange}
                            />
                        </form>
                    )}
                    {session && user.name == session.user.name && (
                        <Button onClick={editProfile}>{editButtonText}</Button>
                    )}
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
    return { props: { user } };
}

export default Account;

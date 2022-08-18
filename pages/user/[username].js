/* eslint-disable @next/next/no-img-element */
import { PrismaClient } from "@prisma/client";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../../styles/Account.module.css";

const Account = ({ user }) => {
    const router = useRouter();

    return (
        <Container className={styles.main}>
            <Row>
                <h2>{user.name}</h2>
                <img
                    className={styles.profilePic}
                    alt="profile picture"
                    src={user.image}
                />
            </Row>
        </Container>
    );
};

export async function getServerSideProps(context) {
    console.log(context.query.name);
    const prisma = new PrismaClient();
    const user = await prisma.user.findUnique({
        where: {
            name: "Timo4D",
        },
    });
    console.log(user);
    return { props: { user } };
}

export default Account;

import CourtList from "../../components/CourtList";
import { Button } from "react-bootstrap";
import styles from "../../styles/coutds.module.css";

const Courts = () => {
    return (
        <>
            <div className={styles.main} style={{paddingTop: "20px"}}>
                <Button href="/courts/add">Add Court</Button>
            </div>

            <CourtList />
            <CourtList />
        </>
    );
};

export default Courts;

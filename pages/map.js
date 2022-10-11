import dynamic from "next/dynamic";
import styles from "../styles/coutds.module.css";

const MapWithNoSSR = dynamic(() => import("../components/maps/Map"), {
    ssr: false,
});

export default function Home() {
    return (
        <div style={{width: "100%"}}>
            <MapWithNoSSR
                lat={48.811565221026825}
                lng={9.433921753375984}
                size={"1000px"}
            />
        </div>
    );
}

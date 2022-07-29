import dynamic from "next/dynamic";

const MapWithNoSSR = dynamic(() => import("../../components/maps/CustomMarkerMap"), {
    ssr: false,
});

const coutAdd = () => {
    return <MapWithNoSSR height={"500px"}/>;
};

export default coutAdd;

import { useFetch } from "../hooks/useFetch";
import Personaje from "./Personaje";
import Loading from "./Loading";

const PintarPersonajes = ({ nombre }) => {
    const [personajes, loading] = useFetch(nombre);

    if (loading) {
        return <Loading />;
    }

    return (
        <div className="row mt-2">
            {personajes.map((item) => (
                <Personaje key={item.id} character={item} />
            ))}
        </div>
    );
};

export default PintarPersonajes;

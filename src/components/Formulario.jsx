import { useFormulario } from "../hooks/useFormulario";
import Swal from "sweetalert2";

const Formulario = ({ setNombre }) => {
    const [inputs, handleChange, reset] = useFormulario({
        nombre: "",
    });
    const { nombre } = inputs;

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!nombre.trim()) {
            return Swal.fire({
                title: "Error!",
                text: "Nombre ogligatorio",
                icon: "error",
            });
        }

        setNombre(nombre.trim().toLowerCase());

        reset();
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={nombre}
                onChange={handleChange}
                className="form-control mb-2"
                name="nombre"
                placeholder="Ingrese Character"
            />
            <button className="btn btn-info" type="submit">
                Buscar
            </button>
        </form>
    );
};

export default Formulario;

import {useNavigate} from "react-router-dom";

export function EventCard({event}) {

    const navigate = useNavigate();
    return(
        <div style={{background: "black"}}
            onClick={() =>
                navigate(`/Event/${event.id}`)
            }
        >
            <h1>{event.title}</h1>
            <p>Descripcion: {event.description}</p>
            <p>Fecha: {event.date}</p>
            <p>Ubicacion: {event.location}</p>
            <hr/>
        </div>
    );
}
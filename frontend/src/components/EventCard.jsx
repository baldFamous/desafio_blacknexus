import {useNavigate} from "react-router-dom";

/**
 * EventCard es un componente funcional que muestra los detalles de un evento.
 * Utiliza el hook useNavigate de react-router-dom para navegar a la página del evento cuando se hace clic en la tarjeta.
 *
 * @param {Object} props - Las propiedades pasadas al componente.
 * @param {Object} props.event - El objeto del evento.
 * @param {string} props.event.title - El título del evento.
 * @param {string} props.event.description - La descripción del evento.
 * @param {string} props.event.date - La fecha del evento.
 * @param {string} props.event.location - La ubicación del evento.
 *
 * @returns {JSX.Element} Un elemento JSX que representa la tarjeta del evento.
 */
export function EventCard({event}) {

    const navigate = useNavigate();
    return(
        <div className="bg-zinc-800 p-4 rounded-3xl hover:bg-zinc-700 hover:cursor-pointer"
            onClick={() =>
                navigate(`/Event/${event.id}`)
            }
        >
            <h1 className="font-bold uppercase text-2xl ">{event.title}</h1>
            <p className="text-slate-500 ">Descripción: {event.description}</p>
            <p className="text-slate-500 ">Fecha: {event.date}</p>
            <p className="text-slate-500 ">Ubicación: {event.location}</p>

        </div>
    );
}

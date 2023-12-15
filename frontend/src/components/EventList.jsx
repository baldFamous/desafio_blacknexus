import {useEffect, useState} from "react";
import {getEvents} from "../api/Events.api.js";
import {EventCard} from "./EventCard.jsx";

/**
 * EventList es un componente funcional que muestra una lista de eventos.
 * Utiliza el hook useState para mantener un estado con la lista de eventos.
 * Utiliza el hook useEffect para cargar los eventos cuando el componente se monta.
 *
 * @returns {JSX.Element} Un elemento JSX que representa la lista de eventos.
 */
export function EventList(){
    const [events, setEvents] = useState([]);

    useEffect(() => {
        async function loadEvents(){
            const res = await getEvents();
            setEvents(res.data);
            console.log(res)
        }
        loadEvents();
    }, []);

    return <div className="grid grid-cols-3 gap-4">
        {events.map(event => (
            <EventCard key={event.id} event={event} />
        ))}
    </div>
}

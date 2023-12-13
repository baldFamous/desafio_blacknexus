import {useEffect, useState} from "react";
import {getEvents} from "../api/Events.api.js";
import {EventCard} from "./EventCard.jsx";

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

    return <div>
        {events.map(event => (
            <EventCard key={event.id} event={event} />
        ))}
    </div>

}
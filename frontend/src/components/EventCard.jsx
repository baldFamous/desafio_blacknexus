import {useNavigate} from "react-router-dom";

export function EventCard({event}) {

    const navigate = useNavigate();
    return(
        <div className="bg-zinc-800 p-4 rounded-3xl hover:bg-zinc-700 hover:cursor-pointer"
            onClick={() =>
                navigate(`/Event/${event.id}`)
            }
        >
            <h1 className="font-bold uppercase text-2xl ">{event.title}</h1>
            <p className="text-slate-500 ">Descripcion: {event.description}</p>
            <p className="text-slate-500 ">Fecha: {event.date}</p>
            <p className="text-slate-500 ">Ubicacion: {event.location}</p>

        </div>
    );
}
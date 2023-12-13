import {Link} from "react-router-dom";

export function Navigation() {
    return (
        <div className="flex justify-between py-3">
            <Link to="/Event">
                <h1 className="font-bold text-3xl mb-4">Event Aplication</h1>
            </Link>
            <button className="bg-zinc-800 hover:bg-zinc-700 text-white font-b old py-2 px-4 rounded">
                <Link to="/Event-create">Crear evento</Link>
            </button>
        </div>
    );
}
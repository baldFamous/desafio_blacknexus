import {Link} from "react-router-dom";

export function Navigation() {
    return (
        <div>
            <Link to="/Event">
                <h1>Event Aplication</h1>
            </Link>
            <Link to="/Event-create">Crear evento</Link>
        </div>
    );
}
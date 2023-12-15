import {Link} from "react-router-dom";

/**
 * Navigation es un componente funcional que muestra la barra de navegación de la aplicación.
 * Utiliza el componente Link de react-router-dom para navegar a diferentes páginas cuando se hace clic en el elemento correspondiente.
 *
 * @returns {JSX.Element} Un elemento JSX que representa la barra de navegación.
 */
export function Navigation() {
    return (
        <div className="flex justify-between py-3">
            // Enlace a la página de Evento
            <Link to="/Event">
                <h1 className="font-bold text-3xl mb-4">Aplicación de Eventos</h1>
            </Link>
            // Botón para crear un nuevo evento
            <button className="bg-zinc-800 hover:bg-zinc-700 text-white font-bold py-2 px-4 rounded">
                <Link to="/Event-create">Crear evento</Link>
            </button>
        </div>
    );
}

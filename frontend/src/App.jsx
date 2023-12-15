import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import {EventPage} from "./pages/EventPage.jsx";
import {EventFormPage} from "./pages/EventFormPage.jsx";
import {Navigation} from "./components/Navigation.jsx";
import {Toaster} from "react-hot-toast";

/**
 * App es el componente raíz de la aplicación.
 * Utiliza los componentes BrowserRouter, Routes, Route y Navigate de react-router-dom para gestionar el enrutamiento.
 * Utiliza los componentes EventPage y EventFormPage para mostrar las páginas correspondientes.
 * Utiliza el componente Navigation para mostrar la barra de navegación.
 * Utiliza el componente Toaster de react-hot-toast para mostrar notificaciones.
 *
 * @returns {JSX.Element} Un elemento JSX que representa el componente raíz de la aplicación.
 */
function App(){
    return (
        <BrowserRouter>
            <div className="container mx-auto">
                // Barra de navegación
                <Navigation />
                // Rutas
                <Routes>
                    // Redirección de la URL raíz a la página de Evento
                    <Route path="/" element={<Navigate to="/Event"/>} />
                    // Página de Evento
                    <Route path="/Event" element={<EventPage />} />
                    // Página de creación de Evento
                    <Route path="/Event-create" element={<EventFormPage />} />
                    // Página de actualización de Evento
                    <Route path="/Event/:id" element={<EventFormPage />} />
                </Routes>
                // Notificaciones
                <Toaster />
            </div>
        </BrowserRouter>
    )
}

export default App;

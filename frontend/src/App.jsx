import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import {EventPage} from "./pages/EventPage.jsx";
import {EventFormPage} from "./pages/EventFormPage.jsx";
import {Navigation} from "./components/Navigation.jsx";
import {Toaster} from "react-hot-toast";


function App(){
    return (
        <BrowserRouter>
            <div className="container mx-auto">
                <Navigation />
                <Routes>
                    <Route path="/" element={< Navigate to="/Event"/>} />
                    <Route path="/Event" element={<EventPage />} />
                    <Route path="/Event-create" element={<EventFormPage />} />
                    <Route path="/Event/:id" element={<EventFormPage />} />
                </Routes>
                <Toaster />
            </div>
        </BrowserRouter>
    )
}

export default App;
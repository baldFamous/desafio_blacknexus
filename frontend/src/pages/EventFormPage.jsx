import React, {useEffect} from "react";
import {useForm} from "react-hook-form";
import {useNavigate, useParams} from "react-router-dom";
import {createEvent, deleteEvent, getEvent, updateEvent} from "../api/Events.api";
import {toast} from "react-hot-toast";


/**
 * EventFormPage es un componente funcional que muestra un formulario para crear o actualizar un evento.
 * Utiliza el hook useForm de react-hook-form para gestionar el estado del formulario.
 * Utiliza el hook useNavigate de react-router-dom para navegar a la página del evento cuando se envía el formulario.
 * Utiliza el hook useParams de react-router-dom para obtener el parámetro id de la URL.
 * Utiliza el hook useEffect de React para cargar el evento cuando el componente se monta y el parámetro id está presente.
 * Utiliza las funciones createEvent, deleteEvent, getEvent y updateEvent del archivo Events.api.js para interactuar con la API.
 * Utiliza la función toast de react-hot-toast para mostrar notificaciones.
 *
 * @returns {JSX.Element} Un elemento JSX que representa la página del formulario del evento.
 */
export function EventFormPage() {
    // Hook useForm para gestionar el estado del formulario
    const {register, clearErrors, handleSubmit, formState:errors, setValue} = useForm();
    // Hook useNavigate para navegar a la página del evento cuando se envía el formulario
    const navigate = useNavigate();
    // Hook useParams para obtener el parámetro id de la URL
    const params = useParams();

    // Función para manejar el envío del formulario
    const onSubmit = handleSubmit(async data => {
        // Si el parámetro id está presente, actualiza el evento
        if (params.id){
            await updateEvent(params.id, data);
            toast.success("Evento actualizado", {
                position: "top-center",
                style: {
                    background: "gray",
                    color: "#fff",
                    fontFamily: "arial"
                }
            })
        // Si el parámetro id no está presente, crea un nuevo evento
        } else {
            await createEvent(data);
            toast.success("Evento creado", {
                position: "top-center",
                style: {
                    background: "gray",
                    color: "#fff",
                    fontFamily: "arial"
                }
            })
        }
        // Navega a la página del evento
        navigate("/Event");
    });

    // Hook useEffect para cargar el evento cuando el componente se monta y el parámetro id está presente
    useEffect(() => {
        async function loadEvent() {
            if (params.id){
                const res = await getEvent(params.id);
                setValue("title", res.data.title);
                setValue("description", res.data.description);
                setValue("location", res.data.location);
                setValue("date", res.data.date);
            }
        }
        loadEvent();
    }, []);

    // Devuelve un elemento JSX que representa la página del formulario del evento
    return (
        <div className="max-w-xl mx-auto">
            <form onSubmit={onSubmit}>
                <input type="text" placeholder="title"
                       {...register("title", {required:true})}
                    className="bg-zinc-500 p-3 rounded-lg w-full mb-3"
                />
                {errors.title && <span>This field is required</span>}

                <textarea rows="3" placeholder="description"
                       {...register("description", {required:true})}
                    className="bg-zinc-500 p-3 rounded-lg w-full mb-3"
                />
                {errors.description && <span>This field is required</span>}

                <input type="text" placeholder="location"
                       {...register("location", {required:true})}
                    className="bg-zinc-500 p-3 rounded-lg w-full mb-3"
                />
                {errors.location && <span>This field is required</span>}

                <input type="date" placeholder="date"
                       {...register("date", {required:true})}
                    className="bg-zinc-500 p-3 rounded-lg w-full mb-3"
                />
                {errors.date && <span>This field is required</span>}

                <button className="bg-blue-600 hover:bg-blue-800 p-3 rounded-lg block w-full mt-3" type="submit">Create</button>

            </form>
            {params.id && <button
                className="bg-red-600 hover:bg-red-800 p-3 rounded-lg w-48 mt-3"
                onClick={(async () => {
                const res = window.confirm("Are you sure?");
                if (res){
                    await deleteEvent(params.id);
                    toast.success("Evento eliminado", {
                position: "top-center",
                style: {
                    background: "gray",
                    color: "#fff",
                    fontFamily: "arial"
                }
            })
                navigate("/Event");
                }
            })}>Delete</button>}
        </div>
    )
}

import {useForm} from "react-hook-form";
import {createEvent, deleteEvent, getEvent, updateEvent} from "../api/Events.api.js";
import {useNavigate, useParams} from "react-router-dom";
import {useEffect} from "react";
import toast from "react-hot-toast";


export function EventFormPage() {

const {register, clearErrors, handleSubmit, formState:errors, setValue} = useForm();
const navigate = useNavigate();
const params = useParams();

    const onSubmit = handleSubmit(async data => {
        if (params.id){
            await updateEvent(params.id, data);
            toast.success("Evento actualizado", {
                position: "top-right",
                style: {
                    background: "gray",
                    color: "#fff",
                    fontFamily: "arial"
                }
            })
        }else{
            await createEvent(data);
            toast.success("Evento creado", {
                position: "top-right",
                style: {
                    background: "gray",
                    color: "#fff",
                    fontFamily: "arial"
                }
            })

        }
        navigate("/Event");
    });

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

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input type="text" placeholder="title"
                       {...register("title", {required:true})}
                />
                {errors.title && <span>This field is required</span>}
                <textarea rows="3" placeholder="description"
                       {...register("description", {required:true})}
                />
                {errors.description && <span>This field is required</span>}
                <input type="text" placeholder="location"
                       {...register("location", {required:true})}
                />
                {errors.location && <span>This field is required</span>}
                <input type="date" placeholder="date"
                       {...register("date", {required:true})}
                />
                {errors.date && <span>This field is required</span>}
                <button type="submit">Create</button>

            </form>
            {params.id && <button onClick={(async () => {
                const res = window.confirm("Are you sure?");
                if (res){
                    await deleteEvent(params.id);
                    toast.success("Evento eliminado", {
                position: "top-right",
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
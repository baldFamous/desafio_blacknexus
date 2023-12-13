import axios from "axios";

const API_URL = axios.create({
    baseURL: "http://localhost:8000/events/api/v1/event/"
});

export const getEvents = () => API_URL.get("/");
export const getEvent = (id) => API_URL.get(`/${id}/`);
export const createEvent = (event) => API_URL.post("", event);
export const deleteEvent = (id) => API_URL.delete(`/${id}`);
export const updateEvent = (id, event) => API_URL.put(`/${id}/`, event);
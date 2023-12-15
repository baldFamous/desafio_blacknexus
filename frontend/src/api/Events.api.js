import axios from "axios";

const API_URL = axios.create({
    baseURL: "http://localhost:8000/events/api/v1/event/"
});

/**
 * Obtiene todos los eventos de la API.
 * @returns {Promise} Promesa de respuesta de Axios.
 */
export const getEvents = () => API_URL.get("/");

/**
 * Obtiene un evento específico por su ID de la API.
 * @param {number|string} id - El ID del evento.
 * @returns {Promise} Promesa de respuesta de Axios.
 */
export const getEvent = (id) => API_URL.get(`/${id}/`);

/**
 * Crea un nuevo evento en la API.
 * @param {Object} event - El objeto evento a ser creado.
 * @returns {Promise} Promesa de respuesta de Axios.
 */
export const createEvent = (event) => API_URL.post("", event);

/**
 * Elimina un evento específico por su ID de la API.
 * @param {number|string} id - El ID del evento.
 * @returns {Promise} Promesa de respuesta de Axios.
 */
export const deleteEvent = (id) => API_URL.delete(`/${id}`);

/**
 * Actualiza un evento específico por su ID en la API.
 * @param {number|string} id - El ID del evento.
 * @param {Object} event - El objeto evento actualizado.
 * @returns {Promise} Promesa de respuesta de Axios.
 */
export const updateEvent = (id, event) => API_URL.put(`/${id}/`, event);

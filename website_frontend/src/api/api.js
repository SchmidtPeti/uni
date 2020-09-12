
import React from 'react';
import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3000/api',
})

export const insertMatAlapTask = payload => api.post(`/matalap_task`, payload)
export const getAllMatAlapTasks = () => api.get(`/matalap_tasks`)
export const insertGeneralTask = payload => api.post(`/addGeneralTask`,payload)
export const getAllGeneralTasks = () => api.get(`/getAllGeneralTasks`)

const apis = {
    insertMatAlapTask,
    getAllMatAlapTasks,
    insertGeneralTask,
    getAllGeneralTasks,
}

export default apis
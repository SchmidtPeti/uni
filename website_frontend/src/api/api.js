
import React from 'react';
import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3000/api',
})

export const insertMatAlapTask = payload => api.post(`/matalap_task`, payload)
export const getAllMatAlapTasks = () => api.get(`/matalap_tasks`)
const apis = {
    insertMatAlapTask,
    getAllMatAlapTasks,
}

export default apis
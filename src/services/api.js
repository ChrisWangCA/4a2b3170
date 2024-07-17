import axios from 'axios';

const BASE_URL = 'https://aircall-backend.onrender.com';

const api = axios.create({
  baseURL: BASE_URL,
});

export const getActivities = () => api.get('/activities');
export const getActivityDetails = (id) => api.get(`/activities/${id}`);
export const updateActivity = (id, data) => api.patch(`/activities/${id}`, data);
export const resetActivities = () => api.patch('/reset');

export default api;
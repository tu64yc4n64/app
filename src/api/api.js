import axios from 'axios';

// API base URL ve token'i buraya ekleyin
const API_URL = 'http://tiosone.com/';
const TOKEN = '72ba3c48d87b3d820c790d1e69367636be28f822';

// Axios instance oluşturma
const api = axios.create({
    baseURL: API_URL,
    headers: {
        'Authorization': `Bearer ${TOKEN}`,
        'Content-Type': 'application/json'
    }
});

export default api;

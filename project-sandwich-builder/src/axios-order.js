import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-sandwich-builder-cb958-default-rtdb.firebaseio.com/'
});

export default instance;
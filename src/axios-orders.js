import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://key-mystery-213512.firebaseio.com/'
});

export default instance;
import axios from 'axios';

//axios.defaults.baseURL = 'http://192.168.1.72:8000/api/';
axios.defaults.baseURL = 'http://10.53.1.83:8000/api/'
axios.defaults.headers.common['Authorization'] = 'Bearer '+ localStorage.getItem('token');




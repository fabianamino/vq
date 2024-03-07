const { default: axios } = require("axios")

const API_KEY = process.env.NEXT_PUBLIC_STRAPI_API_KEY

const axiosClient = axios.create({
    baseURL: 'http://localhost:1337/api',
    headers: {
        Authorization: `Bearer ${API_KEY}`
    }

})

const getCategory=()=>axiosClient.get('/sliders?populate=*');

const getModel=()=>axiosClient.get('/models?populate=*');
const getModelByCategory=(category)=>axiosClient.get('/models?filters[categories][Name][$in]='+category+"&populate=*")

export default {
    getCategory,
    getModel,
    getModelByCategory
};


import axios from "axios";


const axiosPublic = axios.create({
    baseURL: 'https://api.spoonacular.com'
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;
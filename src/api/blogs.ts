import axios from 'axios';

const BASE_URL = "http://localhost:3001/blogs";

export const fetchBlogs = async () =>{
    const response = await axios.get(BASE_URL);
    return response.data;
}

export const fetchBLogByID = async (id: string) =>{
    const response = await axios.get(`${BASE_URL}/${id}`);
    return response.data;
}

export const createBlog = async (blog : any) => {
    const response = await axios.post(BASE_URL, blog);
    return response.data;
}
import axios from "axios";

export const getAllPhotos = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/photos');
    return response.data;
}
export const getSingleProduct = async (id) => {
    const response = await axios.get(`https://dummyjson.com/products/${id}`);
    return response.data;
}
export const insertPostData = async (id ,body) => {
    const response = await axios.post(`https://jsonplaceholder.typicode.com/posts/${id}` ,{
        body
    });
    return response.data;
}
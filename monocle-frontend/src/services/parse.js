import axios from 'axios';

const baseURL = '/api/'

export const parseLink = async (link) => {
    // Call api with link
    try{
        const response = await axios.get(link);
        return response.data;
    }
    catch (err){
        console.log(err);
    }
}

export const parsePDF = async (pdf) => {
    // Call api with pdf
    try{
        const response = await axios.get(pdf);
        return response.data;
    }
    catch (err){
        console.log(err);
    }
}
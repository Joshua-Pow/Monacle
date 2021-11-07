import axios from 'axios';

const baseURL = 'http://127.0.0.1:5000'

export const parseLink = async (link) => {
    // Call api with link
    try{
        const response = await axios({
          method: 'get',
          url: baseURL + '/link',
          headers: {
            "url": link
          }
        })
        console.log(response)
        return response.data;
    }
    catch (err){
        console.log(err);
    }
}

export const parsePDF = async (pdf) => {
    // Call api with pdf
    try{
        const response = await axios({
          method: 'get',
          url: baseURL + '/pdf',
          headers: {
            "url": pdf
          }
        });
        return response.data;
    }
    catch (err){
        console.log(err);
    }
}
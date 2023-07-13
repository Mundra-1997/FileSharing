import axios from 'axios'
const API_URL = `https://filesharing-oue4.onrender.com`
export const uploadFile = async(data)=>{
    try{
     let response =  await axios.post(`${API_URL}/upload`,data);
     return response.data
    }
    catch(err){
        console.log("Error",err.message)
    }
}


import {ADV_API_URL} from '../pages/utils/api';

export const signup=async (data)=>{
    const response=await fetch(`${ADV_API_URL}/advertiserSignup`,{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
       },
       body:JSON.stringify(data)
});
    return await response.json();
}

export const login=async (data)=>{
    const response=await fetch(`${ADV_API_URL}/advertiserLogin`,{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
       },
       body:JSON.stringify(data)
});
    return await response.json();
}
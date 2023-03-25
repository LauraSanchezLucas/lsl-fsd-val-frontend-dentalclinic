import axios from 'axios';

const root = 'http://localhost:3000'

export const logMe = async (body) => {

    return await axios.post(`${root}/login`, body);
};

export const registerMe = async (body) => {

    return await axios.post(`${root}/register`, body);
};

export const getUserProfile = async (token) => {
    let config = {
      headers: { 
        'Authorization': 'Bearer '+ token,  
      }
    };
    return await axios.get(`${root}/profile`, config);
  };

  export const getAllTreatments = async () => {

    return await axios.get(`${root}/allservice`);
  }

  export const bringUsers = async (token) => {
    let config = {

      headers: { 
        'Authorization': `Bearer ${token}`,  
      }
    };
    return await axios.get(`${root}/getProfilesAdm`, config);
  };
  
  export const bringUsersDoctor = async (token) => {
    let config = {

      headers: { 
        'Authorization': `Bearer ${token}`,  
      }
    };
    return await axios.get(`${root}/getProfilesDoc`, config);
  };

  export const getAppointment = async ( body, token) => {
    let config = {

      headers: { 
        'Authorization': `Bearer ${token}`,  
      }
    };
    return await axios.post(`${root}/app`,body, config);
  };


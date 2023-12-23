import axios from "axios";
import {env} from "../Enviroments"

export async function getInfoListApi() {
    try {
      console.log(env.service_url)
      const response = await axios.get(`${env.service_url}/stock`);
      return response.data;
    } catch (error) {
      console.error('Error:', error.message);
      throw error; 
    }
  }

  
  

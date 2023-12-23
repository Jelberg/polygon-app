import axios from "axios";
import {SERVICE_URL} from "../Enviroments"

export async function getInfoListApi() {
    try {
      console.log(SERVICE_URL)
      const response = await axios.get('https://f945-2605-6440-1012-e000-00-9528.ngrok-free.app/api/stock');
      return response.data;
    } catch (error) {
      console.error('Error al realizar la solicitud:', error.message);
      throw error; 
    }
  }
  

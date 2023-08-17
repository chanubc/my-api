import axios from 'axios'
import { ApiSeverUrl } from './DefaultSetup';
 

const NeighborApi = {
    
    getNeighborList: async (id) => {
        
        return axios.get(ApiSeverUrl + `/farmer/${id}/neighbor/?format=json`, {
            headers: {
                "Access-Control-Allow-Origin": "*",
                "content-type": "application/json",
                "ngrok-skip-browser-warning": "true",
            }
        })

    }

}

export default NeighborApi;
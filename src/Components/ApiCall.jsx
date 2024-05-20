import axios from "axios"
import { useQuery } from "react-query"

const IIS_Server="http://192.168.62.59:5009";
const localhost="http://localhost:5001";

let server=false; 

export const CameraStatus = () => {
    return useQuery("gettingCameraStatus", () =>
        axios.get(server?`${IIS_Server}/cameraStatus`:`${localhost}/cameraStatus`)
            .then(
                res => res.data
            )
            .catch(error=>{
                console.error("No Connection...",error)
            })   
    )
}

export const CabinOverview = () => {
    return useQuery("gettingCabinOverview", () =>
        axios.get(server?`${IIS_Server}/cabinOverview`:`${localhost}/cabinOverview`)
            .then(
                res => res.data
            )
            .catch(error=>{
                console.error("No Connection...",error)
            })   
    )
}

// #153448
// #3C5B6F
// #948979
// #DFD0B8
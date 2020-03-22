import React , {useState, useEffect} from "react"
import { ChurchListDiv, ChurchDiv, ChurchImg, ChurchName, ChurchCity, NoChurches, ChurchTextDiv } from "./ChurchListStyles"
import axios from "axios"

const ChurchList = () => {

    const [igrejas , setIgrejas] = useState([null])

    useEffect(()=>{
        const fetchData = async () => {
            const response = await axios.get (`/igrejas?state=Alagoas`)
            if (response.status === 200){
                console.log(400)
                setIgrejas(response.data);
                console.log(igrejas);
            }
        }
            fetchData();
    } , [])

    return (
        <ChurchListDiv>
                            <button onClick={console.log(igrejas)}>Button</button>
        </ChurchListDiv>
    )
}

export default ChurchList;
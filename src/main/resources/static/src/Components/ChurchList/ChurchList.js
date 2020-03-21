import React , {useState, useEffect} from "react"
import { ChurchListDiv, ChurchDiv, ChurchImg, ChurchName, ChurchCity, NoChurches, ChurchTextDiv } from "./ChurchListStyles"
import axios from "axios"

const ChurchList = () => {

    const [igrejas , setIgrejas] = useState([null])

    useEffect(()=>{
        const fetchData = async () => {
            const response = await axios.get (`/igrejas?state=Roraima`)
            if (response.status === 200){
                setIgrejas(response.data);
            }
        }
            fetchData();
            console.log(igrejas)
    } , [])

    return (
        <ChurchListDiv>
            {
                igrejas === null && <NoChurches>No Churches</NoChurches>
            }
            {
                igrejas && 
                igrejas.map( church => {
                    return(
                    <ChurchDiv>
                        <ChurchImg src="https://powerplants.com.au/wp-content/uploads/2017/04/no-profile-pic.jpg" alt="https://powerplants.com.au/wp-content/uploads/2017/04/no-profile-pic.jpg"/>
                        <ChurchTextDiv>
                            <ChurchName>
                                Name
                            </ChurchName>
                            <ChurchCity>
                                City, State
                            </ChurchCity>
                        </ChurchTextDiv>
                    </ChurchDiv>
                    )
                })
            }
        </ChurchListDiv>
    )
}

export default ChurchList;
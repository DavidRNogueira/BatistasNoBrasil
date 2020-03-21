import React , {useState, useEffect} from "react"
import { ChurchListDiv, ChurchDiv, ChurchImg, ChurchName, ChurchCity, NoChurches, ChurchTextDiv } from "./ChurchListStyles"
import axios from "axios"

const ChurchList = () => {

    const [igrejas , setIgrejas] = useState([{name:"Church" , city:"City" , state:"State" , image:"https://image.shutterstock.com/image-photo/family-relaxing-on-sofa-260nw-278188052.jpg"}])

    useEffect(()=>{
        const fetchData = async () => {
            const response = await axios.get ("/igrejas")
            if (response.status === 200){
                setIgrejas(response.data);
            }
        }
            fetchData();
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
                        <ChurchImg src={church.image} alt="https://powerplants.com.au/wp-content/uploads/2017/04/no-profile-pic.jpg"/>
                        <ChurchTextDiv>
                            <ChurchName>
                                {church.name}
                            </ChurchName>
                            <ChurchCity>
                                {church.city} , {church.state}
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
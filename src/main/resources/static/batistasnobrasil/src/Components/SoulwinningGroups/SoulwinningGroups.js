import React , {useState, useEffect} from "react"
import { GrupoListDiv, GrupoDiv, GrupoImg, GrupoName, GrupoCity , NoGrupos, GrupoTextDiv } from "./SoulwinningGroupsStyles"
import axios from "axios"



const SoulwinningGroups = () => {
    const [grupos , setGrupos] = useState([
        {name:"Igreja Batista Missionaria Bom Pastor" , location:"Nova Iguacu, RJ" , image:"https://image.shutterstock.com/image-photo/family-relaxing-on-sofa-260nw-278188052.jpg"},
        {name:"Igreja Batista" , location:"Rio De Janeiro, RJ" , image:"https://image.shutterstock.com/image-photo/family-relaxing-on-sofa-260nw-278188052.jpg"},
])

    useEffect(()=>{
        const fetchData = async () => {
            const response = await axios.get ("/grupos-evangelizacao")
            if (response.status === 200){
                setGrupos(response.data);
            }
        }
        fetchData();
    } , [])

    return (
        <GrupoListDiv>
            {
                grupos === null && <NoGrupos>No Grupoes</NoGrupos>
            }
            {
                grupos && 
                grupos.map( grupo => {
                    return (
                    <GrupoDiv>
                        <GrupoImg src={grupo.image} alt="https://powerplants.com.au/wp-content/uploads/2017/04/no-profile-pic.jpg"/>
                        <GrupoTextDiv>
                            <GrupoName>
                                {grupo.name}
                            </GrupoName>
                            <GrupoCity>
                                {grupo.location}
                            </GrupoCity>
                        </GrupoTextDiv>
                    </GrupoDiv>
                )})
            }
        </GrupoListDiv>
    )
    
}

export default SoulwinningGroups;
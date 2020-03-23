import React , {useState, useEffect} from "react"
import { ChurchListDiv, ChurchDiv, ChurchImg, ChurchName, ChurchCity, NoChurches, ChurchTextDiv, SelectState } from "./ChurchListStyles"
import axios from "axios"
import NoAvatar from "../../Images/NoAvatar.png"

const ChurchList = () => {

    const [igrejas , setIgrejas] = useState([{id:"000001" , name: "A Church" , city: "city" , state: "state"}])

    useEffect(()=>{
        const fetchData = async () => {
            const response = await axios.get (`/all-churches`)
            if (response.status === 200){
                setIgrejas(response.data);
            }
        }
            fetchData();
    } , [])

    const mappedChurches = 
                igrejas.map((church) => {
                    return (
                        <ChurchDiv to={`/${church.id}`}>
                            <ChurchImg src={NoAvatar} alt="Image"/>
                            <ChurchTextDiv>
                                <ChurchName>
                                    {church.name}
                                </ChurchName>
                                <ChurchCity>
                                    {`${church.city} , ${church.state}`}
                                </ChurchCity>
                            </ChurchTextDiv>
                        </ChurchDiv>
                    )
                })


    const handleStateChange = async (e) => {
            const response = await axios.get (`/igrejas?state=${e.target.value}`)
            if (response.status === 200){
                console.log(200)
                setIgrejas(response.data);
            }

    }

    return (
        <ChurchListDiv>
            <SelectState id= "state" onChange={(e) => handleStateChange(e)}>
                <option value="" selected disabled hidden>Escolha o seu estado</option>
                <option value="Acre">Acre</option>
                <option value="Alagoas">Alagoas</option>
                <option value="Amapá">Amapá</option>
                <option value="Amazonas">Amazonas</option>
                <option value="Bahia">Bahia</option>
                <option value="Ceará">Ceará</option>
                <option value="Distrito Federal">Distrito Federal</option>
                <option value="Espírito Santo">Espírito Santo</option>
                <option value="Goiás">Goiás</option>
                <option value="Maranhão">Maranhão</option>
                <option value="Mato Grosso">Mato Grosso</option>
                <option value="Mato Grosso do Sul">Mato Grosso do Sul</option>
                <option value="Minas Gerais">Minas Gerais</option>
                <option value="Pará">Pará</option>
                <option value="Paraíba">Paraíba</option>
                <option value="Paraná">Paraná</option>
                <option value="Piauí">Piauí</option>
                <option value="Rio de Janeiro">Rio de Janeiro</option>
                <option value="Rio Grande do Norte">Rio Grande do Norte</option>
                <option value="Rio Grande do Sul">Rio Grande do Sul</option>
                <option value="Rondônia">Rondônia</option>
                <option value="Roraima">Roraima</option>
                <option value="Santa Catarina">Santa Catarina</option>
                <option value="São Paulo">São Paulo</option>
                <option value="Sergipe">Sergipe</option>
                <option value="Tocantins">Tocantins</option>
            </SelectState>
            {mappedChurches}
        </ChurchListDiv>
    )
}

export default ChurchList;
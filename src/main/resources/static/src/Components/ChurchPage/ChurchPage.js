import React, { useEffect , useState } from "react"
import Axios from "axios"
import { ChurchPageDiv, ChurchName, Info, SubHeader, InfoDiv, ChurchAvatar } from "./ChurchPageStyles"
import NoAvatar from "../../Images/NoAvatar.png"

const ChurchPage = () => {

    const [churchInfo , setChurchInfo] = useState({name:"Church Name", address:"address" , id:"id"})
    const [id, setId] = useState()

    useEffect (() => {
        let location = window.location.href
        const post = location.split('/')
        const postId = post[post.length -1]
        setId(postId);
        
        const fetchChurch = async () => {
            const response = await Axios.get(`/church-by-id?id=${postId}`)
                if (response.status === 200){
                    setChurchInfo(response.data)
                    console.log(churchInfo);
                }
        }

        fetchChurch();
    } , [])

    const {name,address,city,state,zip,pastor,description,email,phone,website} = churchInfo

    const churchInfoToJSX = churchInfo ? 
        <ChurchPageDiv>
            <ChurchAvatar src={NoAvatar} alt="Sem Imagem"/>
            <ChurchName>{name}</ChurchName>
            <InfoDiv>
                <SubHeader>Endereço</SubHeader>
                    {
                        address && <Info>{address}</Info>
                    }
                <Info>{city} , {state}</Info>
                    {
                        zip && <Info>{zip}</Info>
                    }
            </InfoDiv>
            {
                pastor && 
                <InfoDiv>
                    <SubHeader>Dirigente</SubHeader>
                    <Info>{pastor}</Info>
                </InfoDiv>
            }
            {
                description && 
                <InfoDiv>
                    <SubHeader>Descrição</SubHeader>
                    <Info>{description}</Info>
                </InfoDiv>
            }
            <InfoDiv>
                <SubHeader>Contato</SubHeader>
                {
                    email && <Info>Email: {email}</Info>
                }
                {
                    phone && <Info>Telefone: {phone}</Info>
                }
            </InfoDiv>
            {
                website &&
                <InfoDiv>
                    <SubHeader>Site</SubHeader>
                    <Info>{website}</Info>
                </InfoDiv>
            }
        </ChurchPageDiv>
        :
        <h1>Ops</h1>

        return (
            <>
            {churchInfoToJSX}
            </>
        )
}

export default ChurchPage;
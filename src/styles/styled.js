import { Link } from 'react-router-dom'
import styled from 'styled-components'

//Estilos containers

export const DivFormRegistro = styled.div`
    width: 100%;
    height: 50rem;
    display: flex;
    justify-content: center;
    align-items: center;
`
//FormRegistro

export const DivForm = styled.div`
    width: 10rem;
    height: 20rem;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const ImgLogo = styled.img`
    width: 100%;
    height: 6vh;
    background-color: #000000;
   
`
export const ButtonFormRegistro = styled.button`
    width: 100%;
    height: 5vh;
    border-radius: 20px;
    border: none;
    font-size: 12px;
    color: #000000;
    background-color: orange;
    &:hover{
        box-shadow: 0 3px 10px -3px rgba(0, 0, 0, 0.25);
    }
`

//Estilos Header

export const DivHeader = styled.div`
    width: 100%;
    height: 5rem;
    display: flex;
    flex-direction: row;
    background-color:#000000;
    color: white;
`

export const DivLogo = styled.div`
    width: 10%;
    height: 5rem;
    object-fit: scale-down;
`

export const ImgHeaderLogo = styled.img`
    width: 100%;
    height: 4rem;
    padding: 3px;
`

export const DivBuscador = styled.div`
    width: 60%;
    height: 5rem;
    display: flex;
    flex-direction: row;
    justify-content:center;
    align-items: center;
`
export const DivUbicacion = styled.div`
    width: 10%;
    height: 5rem;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    justify-content: center;

`
export const DivIdentificate = styled.div`
    width: 10%;
    height: 5rem;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    justify-content: center;

`
export const DivCarrito = styled.div`
    width: 10%;
    height: 5rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`

//Estilos Main Menu

export const DivPrincipal = styled.div`
    padding: 10rem;
    background-image: url("https://res.cloudinary.com/dxgmhyliz/image/upload/v1639269868/Amazonas/Fondo_umnqaj.jpg");
    background-repeat: no-repeat;
    background-size: 100% 100%;

`

export const DivMain = styled.div`
    
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content:center;
    align-items: center;
    width: 100%;
    height: 100vh;
    
`

export const DivCart = styled.div`
    width: 15rem;
    height: 20rem;
    text-align: center;
    background: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;
    margin-top:5rem;
    margin-right: 5rem;
`

export const ImageCart = styled.img`
    width: 10rem;
    height: 10rem;
`

export const PCart = styled.p`
    text-align: justify;
    padding:3px;
`
export const LinkCart = styled(Link)`
    text-decoration: none;
    color:black;
`
//Buscador 

export const Form = styled.form`
    width: 100%;
    height: 5rem;
    display:flex;
    flex-direction: row;
    align-items: center;
    justify-content: center

`
export const Input = styled.input`
    width: 80%;
    height: 3rem;
`
export const ButtonSearch = styled.button`
    width: 10%;
    height: 3.4rem;
    background-color: orange;
    color: black;
    border-radius: 0 5px 5px 0;
`

//Hola identificate

export const LinkHola = styled(Link)`
    text-decoration: none;
    color:white;
`



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
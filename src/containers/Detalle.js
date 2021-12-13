import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { detalleAsync } from '../actions/actionData'

import Buscador from '../components/Header/Buscador'
import Carrito from '../components/Header/Carrito'
import Hola from '../components/Header/Hola'
import Ubicacion from '../components/Header/Ubicacion'
import { DivBuscador, DivCarrito, DivHeader, DivIdentificate, DivLogo, DivUbicacion, ImgHeaderLogo } from '../styles/styled'

const Detalle = () => {
    const { id } = useParams()
    const { productos } = useSelector(store => store.product)
    const dispatch = useDispatch()
    console.log(productos)

    useEffect(() => {
        dispatch(detalleAsync(id))
        // eslint-disable-next-line
    }, [])

    return (
        <>
          <DivHeader >
                <DivLogo>
                    <ImgHeaderLogo src="https://res.cloudinary.com/dxgmhyliz/image/upload/v1639017796/Amazonas/logo-amazon_sd8n8m.png" alt="Logo" />
                </DivLogo>
                <DivUbicacion>
                    <Ubicacion />
                </DivUbicacion>
                <DivBuscador>
                    <Buscador />
                </DivBuscador>
                <DivIdentificate>
                    <Hola />
                </DivIdentificate>
                <DivCarrito>
                    <Carrito />
                </DivCarrito>
            </DivHeader >  

        </>
    )
}

export default Detalle

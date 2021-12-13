import React, { useEffect } from 'react'
import Carrito from '../components/Header/Carrito'
import Hola from '../components/Header/Hola'
import Ubicacion from '../components/Header/Ubicacion'
import { DivBuscador, DivCarrito, DivCart, DivHeader, DivIdentificate, DivLogo, DivMain, DivPrincipal, DivUbicacion, ImageCart, ImgHeaderLogo, LinkCart, PCart } from '../styles/styled'
import { useSelector, useDispatch } from 'react-redux'
import { mostrarProductosAsync } from '../actions/actionData'
import Buscador from '../components/Header/Buscador'



const Main = () => {
    const { productos } = useSelector(store => store.product)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(mostrarProductosAsync())
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
            <DivPrincipal>
                <DivMain>

                    {productos.map((producto, index) => (
                        
                        <LinkCart key={index} to={"/producto/" + producto.id}>
                            <DivCart >
                                <ImageCart src={producto.imagenes.imagen1} alt="" />
                                <PCart>{producto.nombre2}</PCart>
                                <p>$ {producto.precio}</p>
                            </DivCart>
                        </LinkCart>
                    ))}

                </DivMain>
            </DivPrincipal>
        </>
    )
}

export default Main

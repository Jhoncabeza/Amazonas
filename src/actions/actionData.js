import { types } from "../types/types";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/firebase-config";

export const detalleAsync = (uid) => {
   
    return async (dispatch) => {
        const q = query(collection(db, "data"), where("id", "==", uid))
        const datos  = await getDocs(q);
        const productos  = [];
        datos.forEach((element) => {
            productos.push({
                id : element.id,
            } 
            )
        })
        console.log(productos)
        dispatch(detalleSync(productos))
    }
}


export const detalleSync = (idEncontrado) => {
    return {
        type: types.detalle,
        payload: idEncontrado
    }
}

export const searchAsync = (producto) => {
    return async (dispatch) => {
        const productoBuscado = collection(db, "data")
        const q = query(productoBuscado, where("nombre2", "==", producto))
        const datos  = await getDocs(q);
        const productos  = [];
        datos.forEach((element) => {
            productos.push(element.data())
        })
        dispatch(searchSync(productos))
    }
}


export const searchSync = (productos) => {
    
    return {
        type: types.search,
        payload: productos
    }
}

export const mostrarProductosAsync = () => {
    return async (dispatch) => {
       
        const querySnapshot = await getDocs(collection(db, "data"));
        const productos = [];
        querySnapshot.forEach((doc) => {
            productos.push({
                id : doc.id,
                ...doc.data() 
            } 
            )
           
        })
        console.log(productos)
        dispatch(mostrarProductosSync(productos))
    }
}

export const mostrarProductosSync = (producto) => {
    return {
        type: types.mostrarData,
        payload: producto
    }
}



import { types } from "../types/types";

const initialstate = {
    productos: [],
    search: "",
    detalle: []
}

export const reducerData = (state = initialstate, action) => {
    switch (action.type) {
        case (types.mostrarData):
            return {
                productos: [...action.payload]
            }
        case (types.search):
            return {
                productos: action.payload
            }
        case (types.detalle):
            return {
                productos: action.payload
            }
        default:
            return state;
    }
}
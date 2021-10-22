import { CoinsAction, CoinsActionEnum, CoinsState } from "./types";


const initState:CoinsState = {
    data: [],
    isLoading: false,
    error: ''
}

const coinsReducer = (state = initState, action:CoinsAction):CoinsState => {
    switch (action.type) {
        case CoinsActionEnum.SET_LOADING:
            return {...state, isLoading: true};
        case CoinsActionEnum.SET_DATA:
            return {...state, data: action.payload, isLoading: false}
        default:
            return state
    }

}


export default coinsReducer
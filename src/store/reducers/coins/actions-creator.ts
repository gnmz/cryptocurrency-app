import axios from "axios";
import { Dispatch } from "react"
import { CoinsAction, CoinsActionEnum } from "./types"

const headers = {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': '20087e220dmsh979028ba5076e69p1d1b21jsn943d61b9b235'
}

interface IResponseData {
        status:number,
        data:{
            data:{
               coins:[]
            }
        }
    
}


export const loadData =() => {
    return async (dispatch:Dispatch<CoinsAction>) => {
        dispatch({type:CoinsActionEnum.SET_LOADING, payload: true});
        const response:IResponseData = await axios.get('https://coinranking1.p.rapidapi.com/coins', {headers})
        if(response.status === 200){
            dispatch({type:CoinsActionEnum.SET_DATA, payload: response.data.data.coins})
        }
    }
}
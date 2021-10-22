export interface CoinsState {
  data: [];
  isLoading: boolean;
  error: string;
}

export enum CoinsActionEnum {
  SET_LOADING = "SET_LOADING",
  SET_DATA = "SET_DATA",
  SET_ERROR = "SET_ERROR",
}

export interface SetLoading {
  type: CoinsActionEnum.SET_LOADING;
  payload: boolean;
}

export interface SetData {
  type: CoinsActionEnum.SET_DATA;
  payload: [];
}

export interface SetError {
  type: CoinsActionEnum.SET_ERROR;
  payload: string;
}

export type CoinsAction = SetLoading | SetData | SetError;
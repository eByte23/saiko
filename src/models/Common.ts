export interface BaseResponse {
  message: string
  type: ResponseType
  data: any
}

export enum ResponseType {
  Success = <any>"Success",
  Error = <any>"Error",
  Warning = <any>"Warning",
  Information = <any>"Information"
}

export interface User {
  id: string
  username: string
}
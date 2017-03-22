import { ResponseType, BaseResponse } from 'models/Common'
import displayAlert from '../actions/displayAlert'
import convertResponseToAlert from '../actions/convertResponseToAlert'

export interface ChainInput {
  alert?: {
    message: string
    type: ResponseType  
  }
  result?: BaseResponse
}

export default [
  convertResponseToAlert,
  displayAlert
]
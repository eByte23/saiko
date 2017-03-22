import redirect from 'cerebral-module-router/redirect'
import { ResponseType, BaseResponse } from 'models/Common'
import logon from '../actions/logon'

export interface ChainInput {
  username: string
}

export default [
  logon, {
    success: [
      redirect("/browse")
    ],
    error: []
  }
]
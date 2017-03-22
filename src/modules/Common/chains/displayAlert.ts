import displayAlert from '../actions/displayAlert'

export interface ChainInput {
  message: string
  options?: {
    ele?: string
    type?: string
    offset?: {
      from?: string
      amount?: number
    }
    align?: string
    width?: string
    delay?: number
    allow_dismiss?: boolean
    stackup_spacing?: number
  } 
}

export default [
  displayAlert
]
import fieldChanged, { ChainInput as fieldChangedInput } from './chains/fieldChanged'
import displayAlert, { ChainInput as displayAlertInput } from './chains/displayAlert'
import logon, { ChainInput as logonInput } from './chains/logon'

export interface CommonSignals {
  fieldChanged: <T>(input: fieldChangedInput<T>) => void  
  displayAlert: (input: displayAlertInput) => void
  logon: (input: logonInput) => void
}

export default module => {

  module.addSignals({
    fieldChanged: {
        chain: fieldChanged,
        immediate: true
    },
    displayAlert: displayAlert,
    logon: logon
  })
}
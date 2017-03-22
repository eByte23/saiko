import { IActionContext } from 'models/StateModel'
import { ResponseType } from 'models/Common'
import { createAlert } from 'helpers/common'
import { ChainInput as Input } from '../chains/displayResponseAlert'
import { ChainInput as Output } from '../chains/displayAlert'

function convertResponseToAlert({input, output}: IActionContext<Input, any>) {
  var message = (input.alert)? input.alert.message : (input.result)? input.result.message : ""
  var type = (input.alert)? input.alert.type : (input.result)? input.result.type : ResponseType.Success
  if (message != "") {
    output({
      message: message,
      options: {
        type: getAlertType(type)
      }
    } as Output)
  }
}

function getAlertType(responseType: ResponseType): string {
  switch (responseType) {
    case ResponseType.Success:
      return "success"
    case ResponseType.Error:
      return "danger"
    case ResponseType.Warning:
      return "warning"
    case ResponseType.Information:
      return "info"
  }
}

export default convertResponseToAlert
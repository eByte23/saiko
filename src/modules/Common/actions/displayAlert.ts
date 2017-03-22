import { IActionContext } from 'models/StateModel'
import { createAlert } from 'helpers/common'
import { ChainInput } from '../chains/displayAlert'

function displayAlert({input, state}: IActionContext<ChainInput, {}>) {
  if (input.message && input.message.length > 0) createAlert(input.message, input.options);
}

export default displayAlert
import { IActionContext } from 'models/StateModel'
import { ChainInput } from '../chains/fieldChanged'

function updateValue({input, state}: IActionContext<ChainInput<any>, {}>) {
  state.set(input.field, input.value)

  if (input.urlField) {
    state.set(input.urlField, input.value)
  }
}

export default updateValue
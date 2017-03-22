import { getPath, IActionContext } from 'models/StateModel'
import { BaseResponse } from 'models/Common'
import { ChainInput } from '../chains/Logon'

export interface OutputData extends ChainInput {
}

function Logon({input, state, output, services}: IActionContext<ChainInput, any>) {
  services.http.get<BaseResponse>(`/logon/?username=${input.username}`)
    .then((data) => output.success())
    .catch(output.error)
}

(Logon as any).async = true;
(Logon as any).outputs = ['success', 'error'];

export default Logon
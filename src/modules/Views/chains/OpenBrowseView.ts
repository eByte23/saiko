import redirect from 'cerebral-module-router/redirect'
import { set, when } from 'cerebral/operators'
import { getPath } from 'models/StateModel'
import { Views } from 'models/ViewsStateModel'

export interface ChainInput {
  id: string
}

const isInitialized = getPath(x => x.views.viewInfo[0].isInitialized, Views.Browse)

export default [
  set(getPath(x => x.views.selected), Views.Browse),
  when(`state:${isInitialized}`), {
    false: [
      set(isInitialized, true)
    ],
    true: [
    ]
  },
]

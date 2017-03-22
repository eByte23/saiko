import ViewsStateModel, { Views } from 'models/ViewsStateModel'
import OpenBrowseView, { ChainInput as OpenBuildDetailsInput } from './chains/OpenBrowseView'
import OpenWatchView, { ChainInput as OpenWatchInput } from './chains/OpenWatchView'

export interface ViewsSignals {
    OpenBrowseView: () => void
    OpenWatchView: (input: OpenWatchInput) => void
}

export default (module, controller) => {
    const initialState: ViewsStateModel = {
        selected: Views.Browse,
        viewInfo: {}
    }

    module.addState(initialState);

    module.addSignals({
        OpenBrowseView: OpenBrowseView,
        OpenWatchView: OpenWatchView
    })
}
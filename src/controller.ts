import Model from 'cerebral-model-immutable'
import { Controller } from 'cerebral'
import { getSignal } from './models/Signals'
import StateModel from './models/StateModel'
import Devtools from 'cerebral-module-devtools'
import Router from 'cerebral-module-router'
import Http from 'cerebral-module-http'
import { rootLocation } from 'helpers/rootLocation'
import Common from 'modules/Common'
import Views from 'modules/Views'

declare var process: any;

const appState: StateModel = {
    views: null
};

const controller = Controller(Model(appState, { immutable: true }))

var modules = {
    common: Common,
    views: Views,
    http: Http({
        baseUrl: (process.env.NODE_ENV !== 'production' ? 'http://localhost:5000/' : rootLocation) + 'api',
    }),
    router: Router({
        '/': getSignal(x => x.views.OpenBrowseView) as any,
        '/watch/:id': getSignal(x=>x.views.OpenWatchView) as any
        //'/browse':  getSignal(x => x.views.OpenBrowseView) as any
    }, {
            onlyHash: true, // use only hash part of url for matching
            query: true     // option to enable query support in url-mapper
        })
}

//if (process.env.NODE_ENV !== 'production') modules["devtools"] = Devtools();
modules["devtools"] = Devtools();

controller.addModules(modules);

export default controller
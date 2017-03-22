import { IStateModel } from "cerebral"
import { HttpModule } from "cerebral-module-http"
import { RouterModule } from "cerebral-module-router"
import { pathFromModel } from "../helpers/common"
import { Moment } from 'moment'
import ViewsStateModel from './ViewsStateModel'

export interface IServices {
    http: HttpModule
    router: RouterModule
}

export interface IActionContext<TInput, TOutput> {
    input: TInput,
    state: IStateModel,
    output: TOutput,
    services: IServices
}

interface StateModel {
    views: ViewsStateModel
};

export const getPath = pathFromModel<StateModel>();
export const getPath_ = pathFromModel<StateModel>(".*");
export const getPath__ = pathFromModel<StateModel>(".**");

export default StateModel;
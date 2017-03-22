export enum Views {
    Login = <any>"login",
    Browse = <any>"browse",
    Watch = <any>"watch"
}

export interface PageInfo {
    isInitialized: boolean
}

interface ViewsStateModel {
    selected: Views
    viewInfo: { [id: string]: PageInfo }
};


export default ViewsStateModel;
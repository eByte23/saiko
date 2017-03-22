declare module "cerebral-view-react" {
    export var Container: any;    

    import { SFC, ComponentClass, ClassicComponentClass } from 'react';
    type Components<P> = ComponentClass<P> | ClassicComponentClass<P> | SFC<P>;

    export function connect<ExtProps>(stateMap: ExtProps, component: Components<ExtProps>): ClassicComponentClass<any>;
    export function connect<TPropsIn, ExtProps>(stateMap: (props: TPropsIn) => ExtProps, component: Components<ExtProps & TPropsIn>): ClassicComponentClass<TPropsIn>;
    
    export function Link(props: { signal: (input?) => void, params?: any }): any;
    export function Link(props: { signal: string, params?: any }): any;
}

declare module "react-select" {
    export default function (obj): void
}
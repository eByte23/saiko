import * as React from 'react'
import { connect } from 'cerebral-view-react'
import PropSignals from 'models/Signals';

export enum Categories{
    Action = "action" as any,
    Popular = "popular" as any,
    Drama = "drama"as any,
}

export enum ShowType {
    Movie = "movie" as any,
    Series = "series" as any
}

export interface PropsIn extends PropSignals{
    category: Categories;
    type?: ShowType;
}
export interface Props extends PropSignals{
}

export default connect<PropsIn,Props>((props)=> ({
}), function Slider(props){
    return(
        <div>

        </div>
    );
});
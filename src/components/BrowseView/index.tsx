import * as React from 'react'
import { connect } from 'cerebral-view-react'
import { getPath } from 'models/StateModel'
import PropSignals from 'models/Signals';
import Slider, { ShowType, Categories } from '../Common/Slider';

interface Props extends PropSignals {
}

export default connect<Props>({
}, function BrowseView(props) {


    return (<div>
        {/*<WishlistSlider />
        <ContinueWatchingSlider />*/}
        <Slider category={Categories.Popular}  />
        <Slider category={Categories.Action}  />
        <Slider type={ShowType.Movie} category={Categories.Drama}  />
    </div>
    )
})


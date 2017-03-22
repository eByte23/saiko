import * as React from 'react'
import { connect } from 'cerebral-view-react'
import { getPath } from 'models/StateModel'
import { Views } from 'models/ViewsStateModel'
import PropSignals from 'models/Signals'
import { ViewPort, View } from './ViewPort';
import Nav from "./nav";
import BrowseView from '../BrowseView'
import videojs from 'video.js';

interface Props extends PropSignals {
    view: Views
}

export default connect<Props>({
    view: getPath(x => x.views.selected)
}, function App(props) {
    return (<div>
        <Nav />
        <div className="pageContent" style={{ maxWidth: "1024px", margin: "auto" }}>
            <ViewPort view={props.view.toString()}>
                <View match={Views.Browse.toString()}>
                    <BrowseView />
                </View>
                <View match={Views.Watch.toString()}>
                    <h3>watch</h3>
                    <video
                        id="my-player"
                        className="video-js"
                        controls
                        preload="auto"
                        poster="//vjs.zencdn.net/v/oceans.png"
                        data-setup='{}'>
                        <source src="//vjs.zencdn.net/v/oceans.mp4" type="video/mp4"></source>
                        <source src="//vjs.zencdn.net/v/oceans.webm" type="video/webm"></source>
                        <source src="//vjs.zencdn.net/v/oceans.ogv" type="video/ogg"></source>
                        <p className="vjs-no-js">
                            To view this video please enable JavaScript, and consider upgrading to a  web browser that
                        <a href="http://videojs.com/html5-video-support/" target="_blank">
                                                    supports HTML5 video
                        </a>
                        </p>
                    </video>
                </View>
            </ViewPort>
        </div>
    </div>
    )
})


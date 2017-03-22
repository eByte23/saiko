import * as React from 'react'
import { connect, Link } from 'cerebral-view-react'
import { getPath } from 'models/StateModel'
import { Views } from 'models/ViewsStateModel'
import PropSignals from 'models/Signals'
import { ViewPort, View } from './ViewPort';
import { rootLocation } from 'helpers/rootLocation'

interface Props extends PropSignals {
    view: Views
}

export default connect<Props>({
    view: getPath(x => x.views.selected)
}, function Nav(props) {
    return (
        <nav className="navbar navbar-inbuild">
            <div className="container-fluid" >
                <div className="navbar-header">
                    <a className="navbar-brand" href="/#/">
                        <img alt="Brand" src={`${rootLocation}images/logo.png`} />
                    </a>
                </div>
                <div className="collapse navbar-collapse">
                    <ul className="nav navbar-nav">
                        <li className={props.view == Views.Browse? "active" : ""}>
                            <Link signal={props.signals.views.OpenBrowseView}>
                                Browse
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
})


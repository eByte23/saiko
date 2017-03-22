import * as React from 'react'
import { connect } from 'cerebral-view-react'
import { getPath } from 'models/StateModel'
import PropSignals from 'models/Signals'

interface PropsIn {
    currentPagePath: string
    totalPagesPath: string
    itemsPerPagePath: string
    nextPage: (page: number) => void
    prevPage: (page: number) => void
    perPageChange: (count: number) => void
}

interface Props extends PropSignals {
    currentPage: number
    totalPages: number
    itemsPerPage: number
}

export default connect<PropsIn, Props>((props) => ({
    currentPage: props.currentPagePath as any,
    totalPages: props.totalPagesPath as any,
    itemsPerPage: props.itemsPerPagePath as any
}), function PageControl(props) {

    const nextPage = () => {
        if (props.currentPage >= props.totalPages) return;

        props.nextPage(props.currentPage + 1);
    }

    const prevPage = () => {
        if (props.currentPage <= 1) return;

        props.prevPage(props.currentPage - 1);
    }

    const perPageChange = (event) => {
        props.signals.common.fieldChanged({
            field: props.itemsPerPagePath,
            value: event.target.value
        })
        props.perPageChange(event.target.value);
    }

    return (<ul className="pager">
        <li className={(props.currentPage == 1 ? "disabled" : "")}>
            <a onClick={prevPage}>Previous</a>
        </li>
        <li style={{ padding: "0 10px" }}>
            Page: {props.currentPage} / {props.totalPages < 1 ? 1 : props.totalPages}
        </li>
        <li style={{ padding: "0 10px 0 0" }}>
            <select value={props.itemsPerPage.toString()} onChange={perPageChange}>
                <option value={"5"}> 5 </option>
                <option value={"10"}> 10 </option>
                <option value={"20"}> 20 </option>
                <option value={"50"}> 50 </option>
            </select>
        </li>
        <li className={(props.currentPage >= props.totalPages ? "disabled" : "")}>
            <a onClick={nextPage}>Next</a>
        </li>
    </ul>
    )
})


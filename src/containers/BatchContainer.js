import React, { PureComponent } from 'react'
import BatchTile from '../components/BatchTile'
import '../styles/style.css'

export default class BatchContainer extends PureComponent {

    render() {
        return (
            <div className="BatchContainer">
                <BatchTile />
                BatchContainer
                
            </div>
        )
    }
}
